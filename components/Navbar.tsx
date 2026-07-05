"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Icon from "./Icon";
import { services, industries } from "@/lib/data";

/* Grouped mega-menu navigation (bitontree-style): four intent-based groups
   instead of eight flat links. Panels open on hover or click on desktop and
   collapse into accordions on mobile. */

type Group = {
  label: string;
  columns?: { heading: string; items: { label: string; href: string; icon?: string; desc?: string }[] }[];
  promo?: boolean;
  href?: string;
};

const groups: Group[] = [
  {
    label: "What we do",
    promo: true,
    columns: [
      {
        heading: "Services",
        items: services.slice(0, 6).map((s) => ({
          label: s.title,
          href: `/services#${s.slug}`,
          icon: s.icon,
          desc: s.blurb.split("—")[0].trim().replace(/\.$/, ""),
        })),
      },
    ],
  },
  {
    label: "Industries",
    columns: [
      {
        heading: "Where we deliver",
        items: industries.map((i) => ({ label: i.name, href: "/industries", icon: i.icon })),
      },
    ],
  },
  {
    label: "Our work",
    columns: [
      {
        heading: "Proof",
        items: [
          { label: "Portfolio", href: "/portfolio", icon: "layers", desc: "Case studies with the numbers that changed" },
          { label: "Technologies", href: "/technologies", icon: "code", desc: "The production stack we ship on" },
          { label: "Blog", href: "/blog", icon: "pen", desc: "Field notes from shipping software" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "Sparken Technologies",
        items: [
          { label: "About us", href: "/about", icon: "users", desc: "Founder-led, organised around eight disciplines" },
          { label: "Careers", href: "/careers", icon: "target", desc: "Build serious software with us" },
          { label: "Contact", href: "/contact", icon: "mail", desc: "An engineer replies within one business day" },
        ],
      },
    ],
  },
];

function DesktopPanel({ group, onNavigate }: { group: Group; onNavigate: () => void }) {
  const wide = group.label === "Industries";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className={`flex ${group.promo ? "w-[720px]" : wide ? "w-[560px]" : "w-[400px]"}`}>
          <div className="flex-1 p-5">
            {group.columns?.map((col) => (
              <div key={col.heading}>
                <p className="px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slatex">{col.heading}</p>
                <ul className={`mt-2 grid gap-0.5 ${wide ? "grid-cols-2" : group.promo ? "grid-cols-2" : ""}`}>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-paper"
                      >
                        {item.icon && (
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cobalt/10 text-cobalt transition-all duration-200 group-hover/item:scale-110 group-hover/item:bg-grad-aurora group-hover/item:text-white">
                            <Icon name={item.icon} className="h-4 w-4" />
                          </span>
                        )}
                        <span>
                          <span className="block text-sm font-semibold text-ink transition-colors group-hover/item:text-cobalt">
                            {item.label}
                          </span>
                          {item.desc && <span className="mt-0.5 block text-xs leading-snug text-slatex">{item.desc}</span>}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {group.label === "What we do" && (
                  <Link
                    href="/services"
                    onClick={onNavigate}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 text-xs font-semibold text-cobalt hover:text-violet-600"
                  >
                    View all services <Icon name="arrow" className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {group.promo && (
            <Link
              href="/hire-developers"
              onClick={onNavigate}
              className="group/promo relative m-3 flex w-56 shrink-0 flex-col justify-between overflow-hidden rounded-xl aurora-surface p-5 text-white"
            >
              <div className="absolute inset-0 neural-field-dark opacity-50" aria-hidden />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">Hire developers</p>
                <p className="h-display mt-2 text-lg leading-snug">Pre-vetted engineers, ready in 48 hours</p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Build your team
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover/promo:translate-x-1" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [activeGroup, setActiveGroup] = useState<string | null>(null); // desktop panel
  const [mobileGroup, setMobileGroup] = useState<string | null>(null); // mobile accordion
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveGroup(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveGroup(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setActiveGroup(null), 140);
  };

  const solid = scrolled || open || activeGroup !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line bg-white/85 backdrop-blur-xl shadow-card" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Logo dark={!solid} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="relative" onMouseEnter={() => enter(g.label)} onMouseLeave={leave}>
              <button
                type="button"
                aria-expanded={activeGroup === g.label}
                onClick={() => setActiveGroup((v) => (v === g.label ? null : g.label))}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid ? "text-slatex hover:bg-paper hover:text-ink" : "text-white/80 hover:bg-white/10 hover:text-white"
                } ${activeGroup === g.label ? (solid ? "bg-paper text-ink" : "bg-white/10 text-white") : ""}`}
              >
                {g.label}
                <Icon
                  name="arrow"
                  className={`h-3 w-3 rotate-90 transition-transform duration-200 ${activeGroup === g.label ? "-rotate-90" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeGroup === g.label && <DesktopPanel group={g} onNavigate={() => setActiveGroup(null)} />}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Book a free consultation
          </Link>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 transition-opacity ${solid ? "bg-ink" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 transition-transform ${solid ? "bg-ink" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer: accordion groups */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {groups.map((g) => (
                <div key={g.label} className="rounded-xl">
                  <button
                    type="button"
                    aria-expanded={mobileGroup === g.label}
                    onClick={() => setMobileGroup((v) => (v === g.label ? null : g.label))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-paper"
                  >
                    {g.label}
                    <Icon
                      name="arrow"
                      className={`h-3.5 w-3.5 rotate-90 text-slatex transition-transform duration-200 ${
                        mobileGroup === g.label ? "-rotate-90" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === g.label && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3"
                      >
                        {g.promo && (
                          <li>
                            <Link href="/hire-developers" className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-violet-600 hover:bg-paper">
                              <Icon name="bot" className="h-4 w-4" /> Hire Developers
                            </Link>
                          </li>
                        )}
                        {g.columns?.flatMap((c) => c.items).map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slatex hover:bg-paper hover:text-cobalt"
                            >
                              {item.icon && <Icon name={item.icon} className="h-4 w-4 text-cobalt" />}
                              {item.label}
                            </Link>
                          </li>
                        ))}
                        {g.label === "What we do" && (
                          <li>
                            <Link href="/services" className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-cobalt">
                              View all services <Icon name="arrow" className="h-3 w-3" />
                            </Link>
                          </li>
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link href="/hire-developers" className="btn-ghost mt-2 w-full">
                Hire developers
              </Link>
              <Link href="/contact" className="btn-primary mt-2 w-full">
                Book a free consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
