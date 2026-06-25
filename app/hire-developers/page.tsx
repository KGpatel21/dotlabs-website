import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { CTABand } from "@/components/Sections2";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { NeuralBackdrop } from "@/components/Decor";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  hiringModels,
  hireRoles,
  hireProcess,
  whyHire,
  whatsIncluded,
  hireFaqs,
} from "@/lib/hire";

export const metadata = buildMetadata({
  title: "Hire Dedicated Developers — Hourly, Monthly & Team Extension | DotLabs",
  description:
    "Hire pre-vetted dedicated developers from DotLabs on an hourly, monthly, or team-extension basis. Java, React, Node, Python, mobile, AI/ML, DevOps and QA engineers — profiles in 48 hours, 2-week no-risk trial.",
  path: "/hire-developers",
  keywords: [
    "hire dedicated developers",
    "hire developers monthly",
    "hire remote developers",
    "staff augmentation company",
    "hire java developers",
    "hire react developers",
    "dedicated development team",
  ],
});

export default function HireDevelopersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hire Developers", path: "/hire-developers" },
        ])}
      />
      <PageHero
        eyebrow="Hire Developers"
        title="Hire dedicated developers, ready in 48 hours"
        desc="Extend your team with pre-vetted DotLabs engineers — hourly, monthly, or as a full dedicated pod. You interview and approve every developer, start with a 2-week no-risk trial, and keep full control of the work and the IP."
      />

      {/* Engagement models — white */}
      <section className="bg-white py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Engagement models"
            title="Three ways to hire — pick what fits the work"
            desc="Short-term spike or long-term build, there's a model that matches the commitment you actually need."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {hiringModels.map((m, i) => (
              <Reveal key={m.name} delay={Math.min(i * 0.06, 0.2)}>
                <div
                  className={`card flex h-full flex-col p-7 ${
                    m.featured ? "ring-2 ring-violet/50 shadow-glow-violet" : "card-hover"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-aurora text-white">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    {m.featured && (
                      <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet-600">
                        Most popular
                      </span>
                    )}
                  </div>
                  <h3 className="h-display mt-5 text-xl text-ink">{m.name}</h3>
                  <p className="mt-1 text-sm text-slatex">{m.tagline}</p>
                  <dl className="mt-5 space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-slatex">Billing</dt>
                      <dd className="text-right font-medium text-ink">{m.billing}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-slatex">Commitment</dt>
                      <dd className="text-right font-medium text-ink">{m.commitment}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slatex">Best for</p>
                  <p className="mt-1 text-sm text-slatex">{m.bestFor}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-slatex">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-ghost mt-7 w-full">
                    Hire on this model
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles — paper */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Roles you can hire"
            title="Engineers across every layer of the stack"
            desc="From a single specialist to a cross-functional pod — matched to your stack and seniority."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hireRoles.map((r, i) => (
              <Reveal key={r.role} delay={Math.min(i * 0.04, 0.24)}>
                <div className="card card-hover flex h-full flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">{r.role}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {r.stack.map((s) => (
                      <li key={s} className="rounded-md bg-paper px-2 py-1 text-xs text-slatex ring-1 ring-line">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-5 text-sm text-slatex">
                    from <span className="font-display text-lg font-semibold text-ink">{r.from}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slatex">
            Rates are indicative starting points. Your exact quote depends on seniority, stack, and engagement length.
          </p>
        </div>
      </section>

      {/* Process — dark */}
      <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
        <NeuralBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
        <div className="absolute inset-0 neural-field-dark opacity-70" aria-hidden />
        <div className="wrap relative">
          <SectionHeading
            dark
            eyebrow="How hiring works"
            title="From first call to first commit in days"
            desc="A structured path designed to de-risk the decision — you approve every step."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {hireProcess.map((s, i) => (
              <Reveal key={s.step} delay={Math.min(i * 0.06, 0.24)}>
                <div className="glass-dark h-full p-6">
                  <span className="font-display text-2xl font-semibold text-cyanx">{s.step}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why hire — white */}
      <section className="bg-white py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Why DotLabs"
            title="Talent you can trust, without the hiring risk"
            desc="Everything that makes in-house hiring slow and risky — vetting, retention, ramp-up, replacement — sits with us."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyHire.map((w, i) => (
              <Reveal key={w.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="card card-hover h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-aurora text-white">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatex">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — paper */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">What your rate covers</p>
            <h2 className="h-display mt-4 text-3xl text-ink sm:text-4xl">
              One transparent rate. No surprise invoices.
            </h2>
            <p className="mt-4 text-slatex">
              Hiring through DotLabs replaces a stack of hidden employer costs with a single predictable
              number. Everything needed to keep a developer productive is already included.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Request a custom quote <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whatsIncluded.map((item) => (
                <li key={item} className="card flex items-start gap-3 p-5 text-sm text-slatex">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ — white */}
      <section className="bg-white py-20 lg:py-28">
        <div className="wrap max-w-3xl">
          <SectionHeading
            eyebrow="Hiring FAQ"
            title="The questions every client asks first"
          />
          <div className="mt-12 space-y-3">
            {hireFaqs.map((f) => (
              <details key={f.q} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-ink">
                  {f.q}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 rotate-90 text-slatex transition-transform duration-200 group-open:-rotate-90"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slatex">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
