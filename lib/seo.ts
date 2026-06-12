import type { Metadata } from "next";
import { site, faqs } from "./data";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords: [
      "software development company",
      "custom software development",
      "DotLabs",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/og.png`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "DotLabs Software Development Company",
  url: site.url,
  logo: `${site.url}/logo.png`,
  slogan: site.tagline,
  description:
    "DotLabs is a software development company delivering custom software, web and mobile apps, SaaS products, AI solutions, and enterprise systems for clients worldwide.",
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: Object.values(site.social),
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "153",
    bestRating: "5",
  },
  knowsAbout: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Solutions",
    "Enterprise Software",
    "Cloud and DevOps",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(post: { slug: string; title: string; excerpt: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
}
