import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { LogoMarquee, IndustriesGrid, WhyUs } from "@/components/Sections";
import PillarsScroll from "@/components/Pillars";
import { AISpotlight } from "@/components/Sections3";
import { PortfolioGrid, Testimonials, BlogPreview, CTABand, HireBand } from "@/components/Sections2";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sparken Technologies — Custom Software Development Company | Web, Mobile, AI & SaaS",
  description:
    "Sparken Technologies is a software development company delivering custom software, web and mobile apps, SaaS, and AI solutions — 100+ projects for clients across 6+ industries. Book a free consultation.",
  path: "/",
  keywords: [
    "web development company",
    "mobile app development company",
    "AI development company",
    "SaaS development company",
    "dedicated development team",
    "enterprise software development",
    "software outsourcing company",
  ],
});

/*
  Homepage = a curated OVERVIEW that teases each area and links out to the
  dedicated pages (the TatvaSoft / Simform pattern). Deep content lives on
  /services, /industries, /technologies, /portfolio and /about — so the home
  page stays scannable instead of dumping every detail in one scroll.
  Background tones deliberately alternate (dark → light → dark …) so no two
  adjacent sections share a colour and nothing blends into the footer.
*/
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />                          {/* dark  */}
      <LogoMarquee />                   {/* white */}
      <PillarsScroll />                 {/* paper — scroll-pinned capabilities */}
      <HireBand />                      {/* white (aurora panel) */}
      <AISpotlight />                   {/* dark  */}
      <WhyUs />                         {/* white */}
      <IndustriesGrid />                {/* dark  */}
      <PortfolioGrid limit={3} />       {/* white */}
      <BlogPreview limit={3} />         {/* paper */}
      <Testimonials limit={3} />        {/* white */}
      <CTABand />                       {/* aurora gradient */}
      <ContactSection />                {/* paper */}
    </>
  );
}
