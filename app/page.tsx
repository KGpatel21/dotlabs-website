import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { LogoMarquee, ServicesGrid, IndustriesGrid, WhyUs } from "@/components/Sections";
import {
  ProcessTimeline,
  PortfolioGrid,
  TechStack,
  TeamGrid,
  Testimonials,
  BlogPreview,
  CTABand,
} from "@/components/Sections2";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DotLabs — Custom Software Development Company | Web, Mobile, AI & SaaS",
  description:
    "DotLabs is a custom software development company with 50+ engineers, 153+ happy clients, and 300+ delivered projects. Web development, mobile apps, SaaS, AI agents, and enterprise software — book a free consultation.",
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <LogoMarquee />
      <ServicesGrid limit={6} />
      <IndustriesGrid />
      <WhyUs />
      <ProcessTimeline />
      <PortfolioGrid limit={4} />
      <TechStack />
      <TeamGrid limit={8} />
      <Testimonials />
      <FAQ limit={8} />
      <BlogPreview />
      <CTABand />
      <ContactSection />
    </>
  );
}
