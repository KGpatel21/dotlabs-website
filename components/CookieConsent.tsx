"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

/* Fluid, translucent consent bar: full-width glass strip pinned to the
   bottom, one line of copy, Accept / Reject / close. Choice persists in
   localStorage; the site sets no marketing cookies either way. */

const KEY = "sparken-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.4, ease: [0.25, 0.6, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie notice"
          className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-5 sm:pb-5"
        >
          <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-[0_16px_60px_rgba(7,12,26,0.18)] backdrop-blur-2xl sm:flex-row sm:items-center sm:gap-6 sm:py-4 sm:pl-6 sm:pr-14">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent" aria-hidden />

            <p className="flex-1 text-sm leading-relaxed text-slatex">
              <span className="font-semibold text-ink">🍪 Cookies, kept minimal.</span>{" "}
              Only what's needed to run this site — no ad tracking, no selling data.{" "}
              <Link href="/privacy" className="font-semibold text-cobalt underline-offset-2 hover:underline">
                Privacy policy
              </Link>
            </p>

            <div className="flex shrink-0 items-center gap-2.5">
              <button type="button" onClick={() => choose("accepted")} className="btn-primary !px-6 !py-2.5 text-sm">
                Accept
              </button>
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="btn-ghost !px-6 !py-2.5 text-sm !border-slatex/25 text-slatex hover:!border-slatex hover:text-ink"
              >
                Reject
              </button>
            </div>

            <button
              type="button"
              onClick={() => choose("rejected")}
              aria-label="Close cookie notice"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slatex transition-colors hover:bg-ink/5 hover:text-ink sm:right-3 sm:top-1/2 sm:-translate-y-1/2"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
