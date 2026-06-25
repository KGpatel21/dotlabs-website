"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { SectionDecor } from "./Decor";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <SectionDecor align={center ? "center" : "left"} className="mb-4 opacity-90" />
      <p className={`${dark ? "eyebrow-dark" : "eyebrow"} ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`h-display mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.12] ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-mist" : "text-slatex"}`}>{desc}</p>
      )}
    </Reveal>
  );
}
