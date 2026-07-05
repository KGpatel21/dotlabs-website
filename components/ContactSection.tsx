"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { site } from "@/lib/data";
import { submitToSheet, TurnstileNote } from "./formUtils";

const channels = [
  { icon: "mail", label: "New business", value: site.emails.sales, href: `mailto:${site.emails.sales}` },
  { icon: "bot", label: "Existing clients", value: site.emails.support, href: `mailto:${site.emails.support}` },
  { icon: "users", label: "LinkedIn", value: "Connect with us", href: site.social.linkedin },
  { icon: "pin", label: "Based in", value: site.city, href: undefined },
];

const inquiryTypes = [
  "Fixed-scope project",
  "Ongoing / dedicated team",
  "Hire a specific developer",
  "Small task (site, fix, API)",
  "Schedule a call",
  "Not sure yet",
];

export default function ContactSection({ defaultInquiry }: { defaultInquiry?: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("message")) {
      setError("Name, email, and project details are required.");
      return;
    }
    setError("");
    setSending(true);

    const result = await submitToSheet(
      {
        source: "contact-form",
        type: String(form.get("type") ?? ""),
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? ""),
        budget: String(form.get("budget") ?? ""),
        message: String(form.get("message") ?? ""),
      },
      {
        mountedAt: mountedAt.current,
        honeypot: String(form.get("company_url") ?? ""),
        turnstileToken: String(form.get("cf-turnstile-response") ?? ""),
      }
    );

    setSending(false);
    if (result.ok) {
      setSent(true);
    } else if (result.reason === "config") {
      setError(`Our form isn't fully wired yet. Please email us directly at ${site.emails.hello}.`);
    } else if (result.reason === "spam") {
      setError("That submission looked automated. Please try again.");
    } else {
      setError(`Something went wrong. Please email us directly at ${site.emails.hello}.`);
    }
  }

  return (
    <section className="bg-paper py-20 lg:py-28" id="contact">
      <div className="wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you're building"
          desc="An engineer — not a salesperson — replies within one business day. Pick the option that fits and we'll route you to the right person."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grad-brand text-white">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <h3 className="h-display mt-5 text-xl text-ink">Message received</h3>
                  <p className="mt-2 max-w-sm text-sm text-slatex">
                    Thanks — it's landed with our team and we'll reply at the email you gave us within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="type" className="text-sm font-medium text-ink">How can we help? *</label>
                    <select id="type" name="type" defaultValue={defaultInquiry} className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none">
                      {inquiryTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-ink">Full name *</label>
                    <input id="name" name="name" required autoComplete="name" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Jane Smith" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-ink">Email *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="jane@company.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-ink">Company (optional)</label>
                    <input id="company" name="company" autoComplete="organization" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Company Inc." />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-sm font-medium text-ink">Budget range (optional)</label>
                    <select id="budget" name="budget" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none">
                      <option>Not sure yet</option>
                      <option>Under $2k (small task)</option>
                      <option>$2k – $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">Project details *</label>
                    <textarea id="message" name="message" required rows={5} className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="What are you building, who is it for, and when do you need it?" />
                  </div>

                  {/* Honeypot — hidden from humans, tempting to bots */}
                  <div className="hidden" aria-hidden>
                    <label htmlFor="company_url">Leave this field empty</label>
                    <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="sm:col-span-2">
                    <TurnstileNote />
                  </div>

                  {error && <p className="text-sm font-medium text-red-600 sm:col-span-2" role="alert">{error}</p>}
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                      {sending ? "Sending…" : <>Send message <Icon name="arrow" className="h-4 w-4" /></>}
                    </button>
                    <p className="mt-3 text-xs text-slatex">Covered by NDA on request. Your details are never shared.</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {channels.map((c, i) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-slatex">{c.label}</span>
                    <span className="h-display text-sm text-ink sm:text-base">{c.value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <a href={c.href} className="card card-hover flex items-center gap-4 p-5">{inner}</a>
                  ) : (
                    <div className="card flex items-center gap-4 p-5">{inner}</div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.28}>
              <div className="card relative overflow-hidden p-6">
                <div className="absolute inset-x-0 top-0 h-1 aurora-surface" aria-hidden />
                <h3 className="h-display text-base text-ink">Prefer to talk it through?</h3>
                <p className="mt-2 text-sm text-slatex">
                  Book a free 30-minute call and we'll scope your idea live — no obligation.
                </p>
                <Link href="/contact?type=call#contact" className="btn-ghost mt-4 w-full">
                  Schedule a call
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
