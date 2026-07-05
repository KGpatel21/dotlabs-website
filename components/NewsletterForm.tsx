"use client";

import { useRef, useState } from "react";
import { submitToSheet } from "./formUtils";
import { site } from "@/lib/data";

export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    if (!email) return;
    setState("sending");

    const result = await submitToSheet(
      { source: "newsletter", email },
      { mountedAt: mountedAt.current, honeypot: String(form.get("company_url") ?? "") }
    );

    if (result.ok) {
      setState("done");
      setMsg("You're subscribed — thanks!");
    } else if (result.reason === "config") {
      setState("error");
      setMsg(`Not wired up yet — email ${site.emails.hello} to be added.`);
    } else {
      setState("error");
      setMsg("Something went wrong. Please try again.");
    }
  }

  if (state === "done") {
    return <p className="mt-6 max-w-sm text-sm text-cyanx">{msg}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-sm" aria-label="Newsletter signup">
      <div className="flex gap-2">
        <label htmlFor="newsletter" className="sr-only">Email address</label>
        <input
          id="newsletter"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-mist/60 focus:border-cyanx focus:outline-none"
        />
        {/* honeypot */}
        <input name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <button type="submit" disabled={state === "sending"} className="btn-primary !px-5 !py-2.5 shrink-0 disabled:opacity-60">
          {state === "sending" ? "…" : "Subscribe"}
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-xs text-amber-400">{msg}</p>}
      <p className="mt-2 text-xs text-mist/70">Occasional field notes on building software. No spam.</p>
    </form>
  );
}
