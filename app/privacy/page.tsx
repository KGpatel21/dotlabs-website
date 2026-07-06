import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Sparken Technologies handles the information you share with us — plainly written, no legal maze.",
  path: "/privacy",
});

const sections = [
  {
    h: "What we collect",
    p: "Only what you give us: the details you type into our contact, careers, or newsletter forms (name, email, company, message, links). We don't buy data, scrape profiles, or track you across the web.",
  },
  {
    h: "How we use it",
    p: "To reply to your inquiry, evaluate your application, or send the newsletter you asked for. Form submissions are stored in a private spreadsheet accessible only to our team and trigger an internal email notification.",
  },
  {
    h: "Cookies",
    p: "We keep cookies minimal: essential functionality and, if enabled, basic anonymous analytics to understand which pages are useful. No advertising cookies, no cross-site tracking, no selling or sharing of personal data — ever.",
  },
  {
    h: "Spam protection",
    p: "Our forms use Cloudflare Turnstile to verify you're human. Cloudflare may process limited technical signals (like your browser characteristics) for that purpose, governed by Cloudflare's own privacy policy.",
  },
  {
    h: "Your choices",
    p: `Want your data corrected or deleted, or to unsubscribe? One email: ${site.emails.hello}. We'll act on it promptly — no forms, no friction.`,
  },
  {
    h: "NDAs & client work",
    p: "Anything you share about your project is treated as confidential by default, and we're happy to sign an NDA before your first call.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your data, handled like we'd want ours handled"
        desc="Plain-language privacy: what we collect, why, and how to make us delete it. Last updated July 2026."
      />
      <section className="bg-white py-20 lg:py-24">
        <div className="wrap max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="h-display text-xl text-ink">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-slatex">{s.p}</p>
            </div>
          ))}
          <p className="border-t border-line pt-8 text-sm text-slatex">
            Questions about this policy? Email{" "}
            <a href={`mailto:${site.emails.hello}`} className="font-semibold text-cobalt">
              {site.emails.hello}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
