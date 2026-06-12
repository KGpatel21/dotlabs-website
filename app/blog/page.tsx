import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/Sections2";
import { posts } from "@/lib/data";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog — Software Development Insights for Founders & CTOs",
  description:
    "Practical articles on SaaS development, AI agents, choosing a software development company, Spring Boot microservices, Next.js SEO, and outsourcing models — written by the DotLabs engineering team.",
  path: "/blog",
  keywords: ["software development blog", "SaaS development guide", "AI agents in business"],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Blog"
        title="Notes from the delivery floor"
        desc="What we learn shipping software every week — scoping frameworks, architecture lessons, and honest takes on AI. Written for founders and CTOs."
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.25)}>
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                <article className="card card-hover flex h-full flex-col p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobalt">{p.category}</p>
                  <h2 className="h-display mt-3 text-lg leading-snug text-ink group-hover:text-cobalt">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slatex">{p.excerpt}</p>
                  <p className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-wider text-slatex">
                    {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {p.readTime}
                  </p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
