"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/* Thin aurora progress bar pinned under the navbar — reads how far down the
   page you are. Disabled for reduced-motion users. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-grad-aurora-tri"
    />
  );
}

/* Marker-style highlight that sweeps in when scrolled into view.
   Usage: <Highlight>key phrase</Highlight> inside any heading. */
export function Highlight({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={reduce ? undefined : { backgroundSize: "0% 38%" }}
      whileInView={reduce ? undefined : { backgroundSize: "100% 38%" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.6, 0.3, 1], delay: 0.25 }}
      className="rounded-sm bg-gradient-to-r from-cobalt/25 via-violet/25 to-cyanx/30 bg-no-repeat px-0.5 [background-position:0_88%] [background-size:100%_38%]"
    >
      {children}
    </motion.span>
  );
}
