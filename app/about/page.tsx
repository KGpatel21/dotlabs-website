import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import StatCounters from "@/components/StatCounters";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { TeamGrid, Testimonials, CTABand } from "@/components/Sections2";
import { ApproachGrid, Milestones } from "@/components/Sections3";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { aboutStory } from "@/lib/data";

export const metadata = buildMetadata({
  title: "About Sparken Technologies — A Founder-Led Software Development Company",
  description:
    "Meet Sparken Technologies: a founder-led software development company delivering web, mobile, SaaS, AI, and enterprise systems for clients across four continents. Learn how we work and why clients stay.",
  path: "/about",
  keywords: ["about Sparken Technologies", "software development team", "software consulting services"],
});

const values = [
  {
    n: "01",
    title: "Engineering honesty",
    desc: "We give real estimates and surface risks early — even when it costs us the deal. Trust compounds faster than revenue.",
  },
  {
    n: "02",
    title: "Ownership mentality",
    desc: "Every engineer treats your product like their own startup: questioning requirements, suggesting cheaper paths, protecting your runway.",
  },
  {
    n: "03",
    title: "Craft over volume",
    desc: "We'd rather ship fewer projects exceptionally than many projects adequately. Our 98% satisfaction rate is the result.",
  },
  {
    n: "04",
    title: "Long-term thinking",
    desc: "Code is written once and read for years. We document, test, and architect for the team that maintains it after us.",
  },
];

const missionVision = [
  {
    icon: "target",
    label: "Our mission",
    text: "To be the engineering partner ambitious companies can hand a hard problem to — and trust completely with the outcome, the budget, and the honest truth along the way.",
  },
  {
    icon: "sparkles",
    label: "Our vision",
    text: "A world where great software isn't reserved for companies with in-house engineering armies — where any serious business can ship products of world-class quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About Sparken Technologies"
        title="A software company built the way we wished vendors behaved"
        desc="Sparken Technologies was founded by engineers who spent years inside enterprise delivery — and saw how much gets lost between sales decks and shipped software. We built the company that closes that gap."
      />

      {/* Story — white */}
      <section className="bg-white py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">
              From fintech trenches to a global delivery team
            </h2>
            <div className="mt-8 grid gap-4">
              {missionVision.map((m) => (
                <div key={m.label} className="card relative overflow-hidden p-6">
                  <div className="absolute inset-y-0 left-0 w-1 aurora-surface" aria-hidden />
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-grad-aurora text-white">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">{m.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slatex">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-slatex">
              {aboutStory.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="wrap mt-16">
          <div className="card p-8 sm:p-10">
            <StatCounters />
          </div>
        </div>
      </section>

      {/* Values — paper */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four values, enforced in every sprint"
            desc="Values that don't change behavior are decoration. These four show up in our contracts, our standups, and our code reviews."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card card-hover h-full p-7">
                  <span className="bg-grad-aurora bg-clip-text font-display text-3xl font-semibold text-transparent">
                    {v.n}
                  </span>
                  <h3 className="h-display mt-3 text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatex">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ApproachGrid />   {/* white */}
      <TeamGrid />       {/* paper — founder + discipline pods */}
      <Milestones />     {/* dark  */}
      <Testimonials />   {/* white */}
      <CTABand />        {/* aurora */}
    </>
  );
}
