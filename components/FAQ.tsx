"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQ({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions founders and CTOs ask us"
          desc="Straight answers about cost, timelines, security, and how working with a software development company actually works."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="h-display text-sm text-ink sm:text-base">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line font-mono text-sm transition-all ${
                      isOpen ? "rotate-45 border-cobalt text-cobalt" : "text-slatex"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.21, 0.6, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slatex">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
