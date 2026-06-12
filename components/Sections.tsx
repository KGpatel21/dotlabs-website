import Link from "next/link";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { clients, services, industries, whyUs } from "@/lib/data";

export function LogoMarquee() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Trusted by" className="border-b border-line bg-white py-10">
      <div className="wrap">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-slatex">
          Trusted by 153+ companies across 12+ industries
        </p>
      </div>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 px-7">
          {row.map((c, i) => (
            <span key={`${c}-${i}`} className="flex items-center gap-2 whitespace-nowrap font-display text-base font-medium text-slatex/70">
              <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" /> {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="What we build"
          title="Software development services that cover the full product lifecycle"
          desc="One partner for strategy, design, engineering, AI, cloud, and support — so nothing falls between vendors."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.3)}>
              <article className="card card-hover group flex h-full flex-col p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-100 text-cobalt transition-colors group-hover:bg-grad-brand group-hover:text-white">
                  <Icon name={s.icon} />
                </span>
                <h3 className="h-display mt-5 text-lg text-ink">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slatex">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs font-medium text-slatex">
                      <Icon name="check" className="h-3.5 w-3.5 text-cobalt" /> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-cobalt transition-transform group-hover:translate-x-1"
                >
                  Discuss your project <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        {limit && (
          <Reveal className="mt-10 text-center">
            <Link href="/services" className="btn-ghost">
              View all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function IndustriesGrid() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 dot-field-dark" aria-hidden />
      <div className="wrap relative">
        <SectionHeading
          dark
          eyebrow="Industries we serve"
          title="Domain depth, not just code"
          desc="Twelve-plus industries means we already speak your regulators' language, know your integrations, and skip months of onboarding."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={Math.min(i * 0.04, 0.32)}>
              <div className="glass-dark group h-full p-5 transition-colors hover:border-cyanx/50">
                <Icon name={ind.icon} className="h-6 w-6 text-cyanx" />
                <h3 className="h-display mt-3 text-base">{ind.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-mist">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Why choose DotLabs"
            title="The vendor checklist your procurement team wishes everyone passed"
            desc="We win deals against larger agencies for one reason: we behave like the partner companies hoped those agencies would be."
          />
          <Reveal delay={0.15} className="mt-8">
            <Link href="/about" className="btn-ghost">
              Meet the team <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="card card-hover h-full p-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-grad-brand" aria-hidden />
                <h3 className="h-display mt-3 text-base text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatex">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
