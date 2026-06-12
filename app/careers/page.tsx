import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CTABand } from "@/components/Sections2";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers at DotLabs — Build Software That Ships",
  description:
    "Join DotLabs: open roles for senior Java/Spring Boot engineers, React/Next.js developers, AI engineers, product designers, QA, and DevOps. Remote-friendly, engineering-led culture.",
  path: "/careers",
  keywords: ["software developer jobs Ahmedabad", "remote software engineer jobs", "DotLabs careers"],
});

const roles = [
  { title: "Senior Java / Spring Boot Engineer", type: "Full-time · Hybrid (Ahmedabad)", tags: ["Java 21", "Microservices", "FinTech"] },
  { title: "Senior React / Next.js Developer", type: "Full-time · Remote (India)", tags: ["Next.js", "TypeScript", "Tailwind"] },
  { title: "AI Engineer — LLM Applications", type: "Full-time · Remote", tags: ["OpenAI", "LangChain", "RAG"] },
  { title: "Product Designer (UI/UX)", type: "Full-time · Hybrid (Ahmedabad)", tags: ["Figma", "Design systems", "B2B SaaS"] },
  { title: "DevOps Engineer", type: "Full-time · Remote (India)", tags: ["Kubernetes", "AWS", "CI/CD"] },
  { title: "QA Automation Engineer", type: "Full-time · Hybrid (Ahmedabad)", tags: ["Playwright", "API testing", "Performance"] },
];

const perks = [
  "Engineering-led culture — leads write code, not just Jira tickets",
  "Direct client exposure and ownership of real product decisions",
  "Learning budget plus certifications paid by the company",
  "Modern stack: Java 21, Next.js, AI tooling in daily use",
  "Transparent salary bands and a documented growth ladder",
  "Flexible hours with remote-friendly roles",
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />
      <PageHero
        eyebrow="Careers"
        title="Do the best engineering work of your career"
        desc="No legacy maintenance purgatory, no bench time. At DotLabs you ship modern products for real clients, with seniors who review your code and a ladder that rewards craft."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Open roles"
            title="We're hiring across the stack"
            desc="Don't see your exact role? Send your work anyway — we hire for trajectory, not checklists."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={Math.min(i * 0.05, 0.25)}>
                <Link href="/contact" className="group block h-full">
                  <article className="card card-hover flex h-full flex-col p-6">
                    <h3 className="h-display text-lg text-ink group-hover:text-cobalt">{r.title}</h3>
                    <p className="mt-1 text-sm text-slatex">{r.type}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] text-slatex">{t}</span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-cobalt transition-transform group-hover:translate-x-1">
                      Apply now <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 lg:py-28">
        <div className="wrap">
          <SectionHeading
            eyebrow="Why DotLabs"
            title="What working here actually feels like"
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p} delay={Math.min(i * 0.04, 0.2)}>
                <li className="card flex items-start gap-3 p-5 text-sm leading-relaxed text-slatex">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" /> {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
