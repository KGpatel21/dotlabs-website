import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { PortfolioGrid, SmallProjects, Testimonials, CTABand } from "@/components/Sections2";
import ClientMap from "@/components/ClientMap";
import { ProofStrip } from "@/components/Sections3";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio & Case Studies — Software Projects We've Delivered",
  description:
    "Browse Sparken Technologies case studies: banking middleware, SaaS platforms, AI agents, trading systems, and enterprise software — each with the problem, solution, tech stack, and measurable business impact.",
  path: "/portfolio",
  keywords: ["software development case studies", "software development portfolio"],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])} />
      <PageHero
        eyebrow="Portfolio"
        title="Projects delivered for clients across multiple countries"
        desc="From European healthcare to Gulf logistics, every case study below follows the same honest format: the problem we were handed, what we built, and the number that changed because of it."
      />
      <ProofStrip />
      <ClientMap />
      <PortfolioGrid />
      <SmallProjects />
      <Testimonials />
      <CTABand />
    </>
  );
}
