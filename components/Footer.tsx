import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { NeuralBackdrop } from "./Decor";
import NewsletterForm from "./NewsletterForm";
import { site, services } from "@/lib/data";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Hire developers", href: "/hire-developers" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 6).map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
  },
  {
    title: "Expertise",
    links: [
      { label: "Industries we serve", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
      { label: "Dedicated teams", href: "/hire-developers" },
      { label: "AI & automation", href: "/services#ai-solutions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-mist">
      <div className="aurora-surface h-1 w-full" aria-hidden />
      <NeuralBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
      <div className="absolute inset-0 dot-field-dark opacity-50" aria-hidden />
      <div className="wrap relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {site.tagline}. A software company building web, mobile, SaaS,
            AI, and enterprise products for clients across the globe.
          </p>
          <NewsletterForm />
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors hover:border-cyanx hover:text-cyanx"
            >
              <Icon name="users" className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="wrap relative flex flex-col gap-4 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sparken Technologies. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="mail" className="h-3.5 w-3.5" /> {site.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="pin" className="h-3.5 w-3.5" /> Ahmedabad, India · Serving clients globally
          </span>
        </div>
      </div>
    </footer>
  );
}
