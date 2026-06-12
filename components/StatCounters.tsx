"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix, dark }: { value: number; suffix: string; dark?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={`h-display text-3xl sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
      {n}
      <span className="bg-grad-brand bg-clip-text text-transparent">{suffix}</span>
    </span>
  );
}

export default function StatCounters({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 ${compact ? "lg:grid-cols-5" : "lg:grid-cols-5"}`}>
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1.5">
          <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist sm:text-xs">
            {s.label}
          </dt>
          <dd className="order-1">
            <Counter value={s.value} suffix={s.suffix} dark={dark} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
