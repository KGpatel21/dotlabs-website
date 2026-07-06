"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

/* Lightweight cookie/privacy consent. Stores the choice in localStorage —
   the site sets no marketing cookies; this covers analytics/essential use
   and gives visitors a clear, honest notice. */

const KEY = "sparken-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage unavailable — stay quiet */
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-label="Cookie notice"
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl"
        >
          <div className="card relative overflow-hidden border-line/80 p-5 shadow-lift sm:p-6">
            <div className="absolute inset-x-0 top-0 h-1 aurora-surface" aria-hidden />
            <p className="text-sm leading-relaxed text-slatex">
              <span className="font-semibold text-ink">Cookies, kept minimal.</span> We use only what's
              needed to run this site and understand basic, anonymous usage. No ad tracking, no selling
              data. Details in our{" "}
              <Link href="/privacy" className="font-semibold text-cobalt underline-offset-2 hover:underline">
                privacy policy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={() => choose("accepted")} className="btn-primary !py-2.5 text-sm">
                Accept
              </button>
              <button
                type="button"
                onClick={() => choose("declined")}
                className="btn-ghost !py-2.5 text-sm"
              >
                Essential only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
