import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { PortfolioGrid, Testimonials, CTABand } from "@/components/Sections2";
import { ProofStrip } from "@/components/Sections3";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio & Case Studies — 300+ Software Projects Delivered",
  description:
    "Browse DotLabs case studies: banking middleware, SaaS platforms, AI agents, trading systems, and enterprise software — each with the problem, solution, tech stack, and measurable business impact.",
  path: "/portfolio",
  keywords: ["software development case studies", "software development portfolio"],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])} />
      <PageHero
        eyebrow="Portfolio"
        title="300+ projects. Here's how a few of them went."
        desc="Every case study below follows the same honest format: the problem we were handed, what we built, and the number that changed because of it."
      />
      <ProofStrip />
      <PortfolioGrid />
      <Testimonials />
      <CTABand />
    </>
  );
}
