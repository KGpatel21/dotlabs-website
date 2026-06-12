import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { CTABand } from "@/components/Sections2";
import { posts } from "@/lib/data";
import { buildMetadata, breadcrumbSchema, articleSchema } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article className="bg-white pb-20 pt-36 md:pt-44">
        <div className="wrap max-w-3xl">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-widest text-slatex">
            <Link href="/" className="hover:text-cobalt">Home</Link> / <Link href="/blog" className="hover:text-cobalt">Blog</Link> / <span className="text-cobalt">{post.category}</span>
          </nav>
          <h1 className="h-display mt-6 text-3xl leading-[1.15] text-ink sm:text-4xl">{post.title}</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-slatex">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime} · DotLabs Engineering
          </p>
          <div className="prose-custom mt-10 space-y-6 text-base leading-relaxed text-slatex">
            <p className="text-lg text-ink">{post.excerpt}</p>
            <p>
              This article is part of the DotLabs engineering blog. Replace this placeholder body with your
              full article content — the layout, metadata, structured data, and SEO wiring are already in place.
            </p>
            <p>
              Each post ships with Article schema, breadcrumb schema, canonical URLs, and Open Graph tags, so
              content published here is fully crawlable and rich-result ready from day one.
            </p>
          </div>
          <Link href="/blog" className="btn-ghost mt-12">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Back to all articles
          </Link>
        </div>
      </article>
      <CTABand />
    </>
  );
}
