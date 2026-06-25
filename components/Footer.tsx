import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { NeuralBackdrop } from "./Decor";
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
            {site.tagline}. A 50+ person software development company building web, mobile, SaaS,
            AI, and enterprise products for clients across the globe.
          </p>
          <form className="mt-6 flex max-w-sm gap-2" aria-label="Newsletter signup">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Work email"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-mist/60 focus:border-cyanx focus:outline-none"
            />
            <button type="button" className="btn-primary !px-5 !py-2.5 shrink-0">Subscribe</button>
          </form>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.social).map(([k, v]) => (
              <a
                key={k}
                href={v}
                aria-label={k}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors hover:border-cyanx hover:text-cyanx"
              >
                {k}
              </a>
            ))}
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
        <p>© {new Date().getFullYear()} DotLabs. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="mail" className="h-3.5 w-3.5" /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="phone" className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="pin" className="h-3.5 w-3.5" /> Ahmedabad, India · Serving clients globally
          </span>
        </div>
      </div>
    </footer>
  );
}
