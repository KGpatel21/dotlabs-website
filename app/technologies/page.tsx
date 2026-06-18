import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { ProcessTimeline, CTABand } from "@/components/Sections2";
import { TechDeep, TechPrinciples } from "@/components/Sections3";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technologies — React, Next.js, Java, Spring Boot, AI & Cloud Stack",
  description:
    "DotLabs' technology stack: React, Next.js, Angular, Vue on the frontend; Java, Spring Boot, Node.js, .NET on the backend; PostgreSQL, MongoDB; AWS, Azure, GCP; Docker, Kubernetes; OpenAI, LangChain, and RAG systems.",
  path: "/technologies",
  keywords: [
    "React development company",
    "Spring Boot development company",
    "Next.js development",
    "Java development company",
  ],
});

export default function TechnologiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Technologies", path: "/technologies" }])} />
      <PageHero
        eyebrow="Technologies"
        title="Boring on purpose: a stack your future hires already know"
        desc="We choose technologies for ten-year futures and deep talent pools — React, Next.js, Java, Spring Boot, Node.js, and proven cloud infrastructure — plus modern AI where it earns its keep."
      />
      <TechDeep />
      <TechPrinciples />
      <ProcessTimeline />
      <FAQ limit={8} />
      <CTABand />
    </>
  );
}
