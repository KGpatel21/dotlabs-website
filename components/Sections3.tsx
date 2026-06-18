import Link from "next/link";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import {
  services,
  industries,
  engagementModels,
  aiCapabilities,
  techCategories,
  techPrinciples,
  milestones,
  aboutApproach,
  proofPoints,
} from "@/lib/data";

/* Secondary proof-point strip (light) */
export function ProofStrip() {
  return (
    <section className="border-y border-line bg-white py-12">
      <div className="wrap">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {proofPoints.map((p, i) => (
            <Reveal key={p.label} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex flex-col gap-1.5 text-center">
                <dd className="h-display text-2xl text-ink sm:text-3xl">
                  <span className="bg-grad-brand bg-clip-text text-transparent">{p.value}</span>
                </dd>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-slatex sm:text-[11px]">
                  {p.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* Full, detailed per-service breakdown (used on /services) */
export function ServicesDeep() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="What we build"
          title="Twelve capabilities, one accountable team"
          desc="Engage us for a single service or hand us the whole product. Either way, you get senior engineers, visible delivery, and software you own outright."
        />
        <div className="mt-14 space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.03, 0.2)}>
              <article id={s.slug} className="card scroll-mt-28 p-7 sm:p-9">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                      <Icon name={s.icon} />
                    </span>
                    <h3 className="h-display mt-5 text-xl text-ink sm:text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slatex sm:text-base">{s.detail}</p>
                    <p className="mt-5 rounded-xl border border-line bg-paper px-4 py-3 text-xs leading-relaxed text-slatex sm:text-sm">
                      <span className="font-semibold text-ink">Ideal for: </span>
                      {s.idealFor}
                    </p>
                  </div>
                  <div className="lg:border-l lg:border-line lg:pl-12">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">What's included</p>
                    <ul className="mt-4 space-y-2.5">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slatex">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt transition-transform hover:translate-x-1"
                    >
                      Discuss your project <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* AI capability spotlight band (dark) */
export function AISpotlight() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 dot-field-dark" aria-hidden />
      <div className="wrap relative">
        <SectionHeading
          dark
          eyebrow="AI that earns its keep"
          title="We can build almost anything with AI — the question is whether you should"
          desc="From autonomous agents to RAG systems grounded in your data, we build practical AI with guardrails, evaluation, and security built in. And we'll tell you honestly where it helps and where it doesn't."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="glass-dark h-full p-6 transition-colors hover:border-cyanx/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyanx">
                  <Icon name={c.icon} />
                </span>
                <h3 className="h-display mt-4 text-base text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Talk to our AI team <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Engagement models (used on /services) */
export function EngagementModels() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="How to work with us"
          title="Three engagement models — we'll recommend the one that minimizes your risk"
          desc="Not sure which fits? Tell us about your project and we'll point you to the model that gives you the most value for the least exposure."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.name} delay={Math.min(i * 0.06, 0.25)}>
              <article className="card card-hover flex h-full flex-col p-7 sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                  <Icon name={m.icon} />
                </span>
                <h3 className="h-display mt-5 text-lg text-ink">{m.name}</h3>
                <p className="mt-2 text-sm font-medium text-cobalt">{m.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-slatex">
                  <span className="font-semibold text-ink">Best for: </span>
                  {m.bestFor}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {m.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slatex">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Detailed per-industry breakdown (used on /industries) */
export function IndustriesDeep() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Domain depth, not just code"
          desc="Twelve-plus industries of delivery means we already speak your regulators' language, know your integrations, and skip the expensive learning curve."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={Math.min(i * 0.04, 0.25)}>
              <article className="card card-hover flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                    <Icon name={ind.icon} />
                  </span>
                  <h3 className="h-display text-lg text-ink sm:text-xl">{ind.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slatex">{ind.long}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">What we build</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ind.build.map((b) => (
                    <li key={b} className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-slatex">
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto flex items-start gap-2 pt-6 text-xs leading-relaxed text-slatex">
                  <Icon name="shield-check" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  {ind.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Technology stack with rationale (used on /technologies) */
export function TechDeep() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Our stack, and why"
          title="Every technology here was chosen for a reason"
          desc="We don't chase trends. We standardize on technologies with deep talent pools and long-term futures — and pick the right tool for each job rather than forcing one to do everything."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {techCategories.map((cat, i) => (
            <Reveal key={cat.group} delay={Math.min(i * 0.05, 0.25)}>
              <article className="card flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                    <Icon name={cat.icon} />
                  </span>
                  <h3 className="h-display text-lg text-ink">{cat.group}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slatex">{cat.why}</p>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {cat.items.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-slatex">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Engineering principles (used on /technologies) */
export function TechPrinciples() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="How we make technology decisions"
          title="Principles that keep your software cheap to own"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {techPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.06, 0.25)}>
              <div className="card card-hover h-full p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                  <Icon name={p.icon} />
                </span>
                <h3 className="h-display mt-4 text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatex">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* How-we-engage approach grid (used on /about) */
export function ApproachGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="How we engage"
          title="The way we wished vendors behaved"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutApproach.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i * 0.06, 0.25)}>
              <div className="card card-hover h-full p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt">
                  <Icon name={a.icon} />
                </span>
                <h3 className="h-display mt-4 text-lg text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatex">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Company milestones timeline (used on /about) */
export function Milestones() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 dot-field-dark" aria-hidden />
      <div className="wrap relative">
        <SectionHeading
          dark
          eyebrow="Our journey"
          title="From fintech trenches to a global delivery team"
        />
        <ol className="relative mx-auto mt-16 max-w-3xl">
          <span className="absolute left-[11px] bottom-1 top-1 w-px bg-gradient-to-b from-cyanx via-cobalt to-transparent sm:left-[13px]" aria-hidden />
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={Math.min(i * 0.05, 0.3)}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-cyanx bg-ink sm:h-7 sm:w-7">
                  <span className="h-2 w-2 rounded-full bg-grad-brand" />
                </span>
                <div className="glass-dark w-full p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="h-display text-lg text-white">{m.label}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-cyanx">{m.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{m.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
