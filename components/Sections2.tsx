import Link from "next/link";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { process, portfolio, techStack, team, testimonials, posts } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="How we work"
          title="A delivery process with no black boxes"
          desc="Seven stages, weekly demos, and a live project board. You always know what shipped, what's next, and what it costs."
        />
        <ol className="relative mx-auto mt-16 max-w-3xl">
          <span className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-cobalt via-cyanx to-transparent sm:left-[13px]" aria-hidden />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={Math.min(i * 0.05, 0.3)}>
              <li className="relative flex gap-6 pb-10 pl-0 last:pb-0">
                <span className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-cobalt bg-paper sm:h-7 sm:w-7">
                  <span className="h-2 w-2 rounded-full bg-grad-brand" />
                </span>
                <div className="card w-full p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="h-display text-lg text-ink">{p.step}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-cobalt">{p.duration}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slatex">{p.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PortfolioGrid({ limit }: { limit?: number }) {
  const list = limit ? portfolio.slice(0, limit) : portfolio;
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Case studies"
          title="Proof, not promises"
          desc="A sample of the 300+ projects we've delivered — each with a measurable business outcome."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.06, 0.25)}>
              <article className="card card-hover flex h-full flex-col p-7 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">{p.industry}</p>
                <h3 className="h-display mt-2 text-xl text-ink">{p.title}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-ink">Problem</dt>
                    <dd className="mt-1 text-slatex">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Solution</dt>
                    <dd className="mt-1 text-slatex">{p.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Business impact</dt>
                    <dd className="mt-1 font-medium text-cobalt-600">{p.impact}</dd>
                  </div>
                </dl>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] text-slatex">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        {limit && (
          <Reveal className="mt-10 text-center">
            <Link href="/portfolio" className="btn-ghost">
              View full portfolio <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 neural-field-dark opacity-70" aria-hidden />
      <div className="wrap relative">
        <SectionHeading
          dark
          eyebrow="Technologies"
          title="A modern stack, chosen for longevity"
          desc="We standardize on technologies with deep talent pools and ten-year futures — so your product never becomes a hiring problem."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([group, items], i) => (
            <Reveal key={group} delay={Math.min(i * 0.05, 0.25)}>
              <div className="glass-dark h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">{group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/90 transition-colors hover:border-cyanx/60">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const avatarGrads = [
  "from-[#2E5BFF] to-[#2DD4FF]",
  "from-[#7C3AED] to-[#2E5BFF]",
  "from-[#0EA5E9] to-[#22D3EE]",
  "from-[#1D4ED8] to-[#7C3AED]",
];

export function TeamGrid({ limit }: { limit?: number }) {
  const list = limit ? team.slice(0, limit) : team;
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="The people behind the dot"
          title="50+ engineers, designers, and architects — here are the leads"
          desc="Real names, real specializations. The people on this page are the people on your calls."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((m, i) => (
            <Reveal key={m.name} delay={Math.min(i * 0.04, 0.3)}>
              <article className="card card-hover h-full p-5 text-center sm:p-6">
                <span
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${avatarGrads[i % avatarGrads.length]} font-display text-lg font-semibold text-white sm:h-20 sm:w-20`}
                  aria-hidden
                >
                  {m.initials}
                </span>
                <h3 className="h-display mt-4 text-sm text-ink sm:text-base">{m.name}</h3>
                <p className="mt-1 text-xs font-medium text-cobalt sm:text-sm">{m.role}</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-slatex sm:text-[11px]">{m.area}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-slatex">
            …plus 38 more engineers, QA specialists, and DevOps leads across our delivery teams.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Client outcomes"
          title="What clients say when the project is over"
          desc="98% satisfaction isn't a vanity metric — it's renewals, referrals, and second projects."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.05, 0.25)}>
              <figure className="card card-hover flex h-full flex-col p-7">
                <div className="flex gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slatex">“{t.quote}”</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${avatarGrads[i % avatarGrads.length]} font-display text-sm font-semibold text-white`}
                    aria-hidden
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-slatex">{t.role}, {t.company}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="Insights"
          title="Engineering insights from the delivery floor"
          desc="What we learn shipping software every week — written for founders and CTOs, not search engines (they like it anyway)."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.slice(0, limit).map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.2)}>
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                <article className="card card-hover flex h-full flex-col p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">{p.category}</p>
                  <h3 className="h-display mt-3 text-lg leading-snug text-ink group-hover:text-cobalt">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatex">{p.excerpt}</p>
                  <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-wider text-slatex">
                    {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {p.readTime}
                  </p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/blog" className="btn-ghost">
            Read the blog <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function HireBand() {
  const chips = ["Java / Spring Boot", "React & Next.js", "Python", "React Native", "AI / ML", "DevOps & Cloud"];
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl aurora-surface px-7 py-12 text-white sm:px-12 lg:py-16">
          <div className="absolute inset-0 neural-field-dark opacity-60" aria-hidden />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow-dark !text-white">Hire Developers</p>
              <h2 className="h-display mt-4 max-w-xl text-3xl sm:text-4xl">
                Need engineers, not a whole project? Hire our developers directly.
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Extend your team with pre-vetted DotLabs engineers on an hourly, monthly, or
                team-extension basis. Matched profiles in 48 hours and a 2-week no-risk trial — you
                interview, approve, and keep full control of the IP.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/hire-developers" className="btn-on-color">
                  Hire developers <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link
                  href="/hire-developers"
                  className="btn-ghost border-white/40 text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  See engagement models
                </Link>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden aurora-surface py-20 text-white lg:py-24">
      <div className="absolute inset-0 neural-field-dark opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-ink/10" aria-hidden />
      <div className="wrap relative text-center">
        <Reveal>
          <p className="eyebrow-dark justify-center !text-white">Start a conversation</p>
          <h2 className="h-display mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
            Tell us what you're building. We'll tell you exactly how we'd build it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            A 30-minute discovery call with an engineer — scope, honest timeline, and a fixed estimate within 48 hours. No sales scripts.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-on-color">
              Book a free consultation <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/919876543210" className="btn-ghost border-white/40 text-white hover:border-white hover:bg-white/10 hover:text-white">
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
