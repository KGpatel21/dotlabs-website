"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/hire-developers", label: "Hire Developers" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technologies", label: "Technologies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // The top of every page is a dark hero, so when the bar is transparent its
  // contents must be light. Once scrolled (or the mobile menu is open) the bar
  // turns white and its contents switch to dark.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line bg-white/80 backdrop-blur-xl shadow-card" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Logo dark={!solid} />
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-cobalt"
                      : "text-slatex hover:text-cobalt"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
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

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slatex hover:bg-paper hover:text-cobalt"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3 w-full">
                Book a free consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
