"use client";

import { useState } from "react";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { site } from "@/lib/data";

const channels = [
  { icon: "mail", label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "smartphone", label: "WhatsApp", value: "Chat instantly", href: site.whatsapp },
  { icon: "pin", label: "Visit us", value: "Ahmedabad, Gujarat, India", href: "https://maps.google.com/?q=Ahmedabad" },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("message")) {
      setError("Name, email, and project details are required.");
      return;
    }
    setError("");
    setSent(true);
    // TODO: wire to API/CRM — no data is sent anywhere yet.
    // Wire this to your API route, CRM, or email service:
    // await fetch("/api/contact", { method: "POST", body: form });
  }

  return (
    <section className="bg-paper py-20 lg:py-28" id="contact">
      <div className="wrap">
        <SectionHeading
          eyebrow="Contact"
          title="Book a free consultation"
          desc="Tell us about your project. An engineer — not a salesperson — replies within one business day with next steps."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grad-brand text-white">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <h3 className="h-display mt-5 text-xl text-ink">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-slatex">
                    Thanks — we've received your project details. Expect a reply at the email you provided within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-ink">Full name *</label>
                    <input id="name" name="name" required autoComplete="name" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Jane Smith" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-ink">Work email *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="jane@company.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
                    <input id="company" name="company" autoComplete="organization" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Company Inc." />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-sm font-medium text-ink">Estimated budget</label>
                    <select id="budget" name="budget" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none">
                      <option>Under $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k – $150k</option>
                      <option>$150k+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">Project details *</label>
                    <textarea id="message" name="message" required rows={5} className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="What are you building, who is it for, and when do you need it?" />
                  </div>
                  {error && <p className="text-sm font-medium text-red-600 sm:col-span-2" role="alert">{error}</p>}
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send project details <Icon name="arrow" className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-slatex">
                      Covered by NDA on request. Your details are never shared.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a href={c.href} className="card card-hover flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-slatex">{c.label}</span>
                    <span className="h-display text-sm text-ink sm:text-base">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <div className="card overflow-hidden">
                <iframe
                  title="DotLabs office location on Google Maps"
                  src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
