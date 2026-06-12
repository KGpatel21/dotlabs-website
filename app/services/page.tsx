import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { ServicesGrid } from "@/components/Sections";
import { ProcessTimeline, TechStack, CTABand } from "@/components/Sections2";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Development Services — Web, Mobile, SaaS, AI & Enterprise",
  description:
    "Explore DotLabs' software development services: custom software, web and mobile development, SaaS products, AI agents, ERP/CRM, cloud & DevOps, QA, and dedicated development teams.",
  path: "/services",
  keywords: [
    "software development services",
    "custom software development services",
    "SaaS development company",
    "AI development company",
    "dedicated development team",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title="Every capability you need to ship serious software"
        desc="Strategy, design, engineering, AI, cloud, QA, and support — delivered by one accountable team. Pick a single service or hand us the whole product."
      />
      <ServicesGrid />
      <ProcessTimeline />
      <TechStack />
      <FAQ limit={10} />
      <CTABand />
    </>
  );
}
