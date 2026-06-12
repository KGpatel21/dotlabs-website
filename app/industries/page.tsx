import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { IndustriesGrid } from "@/components/Sections";
import { PortfolioGrid, Testimonials, CTABand } from "@/components/Sections2";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve — FinTech, Healthcare, Real Estate & More",
  description:
    "DotLabs builds software for 12+ industries: FinTech, healthcare, real estate, e-commerce, logistics, education, manufacturing, agriculture, travel, and pharma — with domain compliance built in.",
  path: "/industries",
  keywords: [
    "fintech software development",
    "healthcare software development",
    "real estate software development",
    "ecommerce development company",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries"
        title="We already know your domain's hard parts"
        desc="Regulations, legacy integrations, and industry-specific workflows — twelve-plus industries of delivery means we skip the expensive learning curve."
      />
      <IndustriesGrid />
      <PortfolioGrid />
      <Testimonials />
      <CTABand />
    </>
  );
}
