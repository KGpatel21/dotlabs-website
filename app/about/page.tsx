import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import StatCounters from "@/components/StatCounters";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { WhyUs } from "@/components/Sections";
import { TeamGrid, Testimonials, CTABand } from "@/components/Sections2";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About DotLabs — A 50+ Engineer Software Development Company",
  description:
    "Meet DotLabs: 50+ expert engineers, 153+ happy clients, and 300+ projects delivered across 12+ industries. Learn how our software development company works and why clients stay.",
  path: "/about",
  keywords: ["about DotLabs", "software development team", "software consulting services"],
});

const values = [
  { title: "Engineering honesty", desc: "We give real estimates and surface risks early — even when it costs us the deal. Trust compounds faster than revenue." },
  { title: "Ownership mentality", desc: "Every engineer treats your product like their own startup: questioning requirements, suggesting cheaper paths, protecting your runway." },
  { title: "Craft over volume", desc: "We'd rather ship fewer projects exceptionally than many projects adequately. Our 98% satisfaction rate is the result." },
  { title: "Long-term thinking", desc: "Code is written once and read for years. We document, test, and architect for the team that maintains it after us." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About DotLabs"
        title="A software company built the way we wished vendors behaved"
        desc="DotLabs was founded by engineers who spent years inside enterprise delivery — and saw how much gets lost between sales decks and shipped software. We built the company that closes that gap."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="h-display mt-3 text-3xl text-ink sm:text-4xl">From fintech trenches to a global delivery team</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-slatex">
              <p>
                DotLabs began with a small team building banking middleware for regulated markets — systems where
                a bug isn't an inconvenience, it's a compliance incident. That environment shaped everything about
                how we work: rigorous reviews, automated testing, and documentation that survives audits.
              </p>
              <p>
                Today we're 50+ engineers, designers, and architects serving 153+ clients across 12+ industries,
                from venture-backed SaaS startups to enterprise groups spanning multiple verticals. The fintech
                discipline never left — it just got applied to everything we build.
              </p>
              <p>
                We stay deliberately mid-sized. Large enough to staff full product teams with 24/7 support;
                small enough that the founder still reviews architecture on every major engagement.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="wrap mt-16">
          <div className="card p-8 sm:p-10">
            <StatCounters />
          </div>
        </div>
      </section>

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
                  <span className="font-mono text-xs text-cobalt">●</span>
                  <h3 className="h-display mt-2 text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatex">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamGrid />
      <WhyUs />
      <Testimonials />
      <CTABand />
    </>
  );
}
