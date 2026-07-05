import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Sparken Technologies — Book a Free Software Consultation",
  description:
    "Contact Sparken Technologies for a free software development consultation. Email or the project form — an engineer replies within one business day with scope and a fixed estimate.",
  path: "/contact",
  keywords: ["hire software development company", "free software consultation", "contact Sparken Technologies"],
});

function ContactWithParams({ searchParams }: { searchParams: { type?: string } }) {
  const wantsCall = searchParams?.type === "call";
  const defaultInquiry = wantsCall ? "Schedule a call" : undefined;
  return <ContactSection defaultInquiry={defaultInquiry} />;
}

export default function ContactPage({ searchParams }: { searchParams: { type?: string } }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact"
        title="Let's scope your project — free, in 30 minutes"
        desc="Send your project details and get a discovery call with an engineer, a written proposal, and a fixed estimate within 48 hours. No obligation, NDA on request."
      />
      <Suspense fallback={<ContactSection />}>
        <ContactWithParams searchParams={searchParams} />
      </Suspense>
      <FAQ limit={6} />
    </>
  );
}
