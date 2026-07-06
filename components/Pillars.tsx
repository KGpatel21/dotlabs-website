"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import Icon from "./Icon";
import { Reveal, SectionHeading } from "./Reveal";
import { services } from "@/lib/data";

/* Scroll-pinned capabilities: the viewport pins while scrolling advances
   through six capability panels (progress rail on the left, active panel on
   the right). Falls back to simple stacked cards on mobile / reduced motion. */

const pillars = services.slice(0, 6);

function PinnedPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(pillars.length - 1, Math.floor(v * pillars.length));
    setActive(idx);
  });

  const p = pillars[active];

  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `${pillars.length * 90}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="wrap grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: heading + progress rail */}
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="h-display mt-4 text-4xl tracking-[-0.02em] text-ink">
              Six capabilities.
              <br />
              One accountable team.
            </h2>
            <p className="mt-4 max-w-sm text-slatex">
              Scroll — each capability is a practice we run end to end, not a line on a services page.
            </p>
            <ol className="mt-8 space-y-1">
              {pillars.map((s, i) => (
                <li key={s.slug}>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-300 ${
                      i === active ? "bg-white shadow-card" : "opacity-45"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs ${i === active ? "bg-grad-aurora bg-clip-text text-transparent" : "text-slatex"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-sm font-semibold ${i === active ? "text-ink" : "text-slatex"}`}>{s.title}</span>
                    {i === active && <Icon name="arrow" className="ml-auto h-3.5 w-3.5 text-cobalt" />}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: active panel */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.25, 0.6, 0.3, 1] }}
                className="card relative overflow-hidden p-9"
              >
                <div className="absolute inset-x-0 top-0 h-1 aurora-surface" aria-hidden />
                <span className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[7rem] font-bold leading-none text-paper">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-grad-aurora text-white">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="h-display relative mt-6 text-2xl text-ink">{p.title}</h3>
                <p className="relative mt-3 max-w-md text-base leading-relaxed text-slatex">{p.blurb}</p>
                {p.benefits && (
                  <ul className="relative mt-5 space-y-2">
                    {p.benefits.slice(0, 3).map((pt: string) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-slatex">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /> {pt}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/services#${p.slug}`}
                  className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt transition-colors hover:text-violet-600"
                >
                  Explore {p.title.toLowerCase()} <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedPillars() {
  return (
    <div className="wrap lg:hidden">
      <SectionHeading
        eyebrow="What we do"
        title="Six capabilities. One accountable team."
        desc="Each capability is a practice we run end to end, not a line on a services page."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {pillars.map((s, i) => (
          <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.25)}>
            <Link href={`/services#${s.slug}`} className="card card-hover block h-full p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-aurora text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-display mt-4 text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slatex">{s.blurb}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function PillarsScroll() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-paper py-20 lg:py-0">
      {reduce ? (
        <div className="hidden lg:block py-20">
          <StackedPillarsDesktopFallback />
        </div>
      ) : (
        <PinnedPillars />
      )}
      <StackedPillars />
    </section>
  );
}

function StackedPillarsDesktopFallback() {
  return (
    <div className="wrap">
      <SectionHeading
        eyebrow="What we do"
        title="Six capabilities. One accountable team."
        desc="Each capability is a practice we run end to end, not a line on a services page."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {pillars.map((s, i) => (
          <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.25)}>
            <Link href={`/services#${s.slug}`} className="card card-hover block h-full p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-aurora text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="h-display mt-4 text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slatex">{s.blurb}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
