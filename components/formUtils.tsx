"use client";

/* Shared client-side form submission with layered spam protection:
   1. Honeypot field ("company_url") — bots fill hidden fields; humans can't see them.
   2. Time-trap — a submit faster than 3s after mount is almost certainly a script.
   3. Cloudflare Turnstile token (optional) — passed through to Apps Script,
      which can verify it server-side once you add your secret key.
   All submissions POST url-encoded to the Google Apps Script webhook so a row
   is appended to your sheet and you get an email notification.
*/

export type SubmitResult = { ok: true } | { ok: false; reason: "spam" | "config" | "network" };

export async function submitToSheet(
  fields: Record<string, string>,
  opts: { mountedAt: number; honeypot: string; turnstileToken?: string }
): Promise<SubmitResult> {
  // Honeypot must stay empty
  if (opts.honeypot.trim() !== "") return { ok: false, reason: "spam" };
  // Time-trap: reject sub-3-second submissions
  if (Date.now() - opts.mountedAt < 3000) return { ok: false, reason: "spam" };

  const endpoint = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK;
  if (!endpoint) return { ok: false, reason: "config" };

  try {
    const body = new URLSearchParams();
    Object.entries(fields).forEach(([k, v]) => body.set(k, v));
    body.set("page", typeof window !== "undefined" ? window.location.pathname : "");
    body.set("submittedAt", new Date().toISOString());
    if (opts.turnstileToken) body.set("turnstileToken", opts.turnstileToken);

    await fetch(endpoint, { method: "POST", mode: "no-cors", body });
    return { ok: true };
  } catch {
    return { ok: false, reason: "network" };
  }
}

/* Cloudflare Turnstile widget (renders only if a site key is configured).
   Add NEXT_PUBLIC_TURNSTILE_SITE_KEY in Vercel to activate. */
export function TurnstileNote() {
  const key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!key) return null;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <div className="cf-turnstile" data-sitekey={key} data-theme="light" />
    </>
  );
}
