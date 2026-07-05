"use client";

import { useRef, useState } from "react";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { site } from "@/lib/data";
import { submitToSheet, TurnstileNote } from "./formUtils";

const roleOptions = [
  "Backend Engineer (Java / Node / Python)",
  "Frontend Engineer (React / Next.js)",
  "Full-Stack Engineer",
  "Mobile Engineer (React Native / Flutter)",
  "AI / ML Engineer",
  "Product Designer (UI/UX)",
  "DevOps / Cloud Engineer",
  "QA / Automation Engineer",
  "Internship / Fresher",
  "Other / General application",
];

export default function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("resume")) {
      setError("Name, email, and a resume/portfolio link are required.");
      return;
    }
    setError("");
    setSending(true);

    const result = await submitToSheet(
      {
        source: "careers-application", // ← routes to the Applications tab + careers@ email
        role: String(form.get("role") ?? ""),
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        experience: String(form.get("experience") ?? ""),
        resume: String(form.get("resume") ?? ""),
        message: String(form.get("message") ?? ""),
      },
      {
        mountedAt: mountedAt.current,
        honeypot: String(form.get("company_url") ?? ""),
        turnstileToken: String(form.get("cf-turnstile-response") ?? ""),
      }
    );

    setSending(false);
    if (result.ok) setSent(true);
    else if (result.reason === "config")
      setError(`Applications aren't fully wired yet. Please email your resume to ${site.emails.careers}.`);
    else if (result.reason === "spam") setError("That submission looked automated. Please try again.");
    else setError(`Something went wrong. Please email your resume to ${site.emails.careers}.`);
  }

  return (
    <section className="bg-white py-20 lg:py-28" id="apply">
      <div className="wrap max-w-3xl">
        <SectionHeading
          eyebrow="Apply"
          title="Apply in two minutes"
          desc="This form is for job seekers. Share a link to your resume, GitHub, or portfolio — we read every application."
        />

        <Reveal className="mt-12">
          <div className="card p-7 sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-grad-brand text-white">
                  <Icon name="check" className="h-7 w-7" />
                </span>
                <h3 className="h-display mt-5 text-xl text-ink">Application received</h3>
                <p className="mt-2 max-w-sm text-sm text-slatex">
                  Thanks for applying. If there's a fit, someone from our team will reach out at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="role" className="text-sm font-medium text-ink">Role you're applying for *</label>
                  <select id="role" name="role" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none">
                    {roleOptions.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-ink">Full name *</label>
                  <input id="name" name="name" required autoComplete="name" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="you@email.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="experience" className="text-sm font-medium text-ink">Years of experience</label>
                  <select id="experience" name="experience" className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none">
                    <option>Student / Fresher</option>
                    <option>0–2 years</option>
                    <option>2–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="resume" className="text-sm font-medium text-ink">Resume / portfolio link *</label>
                  <input id="resume" name="resume" required className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="Google Drive, LinkedIn, or GitHub URL" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">Anything you'd like us to know?</label>
                  <textarea id="message" name="message" rows={4} className="rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-cobalt focus:outline-none" placeholder="A note, your best project, why Sparken…" />
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden>
                  <label htmlFor="company_url">Leave this field empty</label>
                  <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="sm:col-span-2"><TurnstileNote /></div>

                {error && <p className="text-sm font-medium text-red-600 sm:col-span-2" role="alert">{error}</p>}
                <div className="sm:col-span-2">
                  <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                    {sending ? "Sending…" : <>Submit application <Icon name="arrow" className="h-4 w-4" /></>}
                  </button>
                  <p className="mt-3 text-xs text-slatex">
                    Tip: make sure your link is set to “anyone with the link can view.”
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
