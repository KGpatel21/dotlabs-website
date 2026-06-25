"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import { trustBadges } from "@/lib/data";
import StatCounters from "./StatCounters";
import { HeroNeural } from "./Decor";

function DotConstellation() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    type Dot = { x: number; y: number; vx: number; vy: number; r: number };
    let dots: Dot[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 16000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.7,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }
      ctx.strokeStyle = "rgba(96,140,255,0.10)";
      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 130 * 130) {
            ctx.globalAlpha = 1 - dist / (130 * 130);
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (const d of dots) {
        ctx.fillStyle = d.r > 1.8 ? "rgba(45,212,255,0.85)" : "rgba(120,150,230,0.55)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink text-white">
      <div className="absolute inset-0 neural-field-dark opacity-60" aria-hidden />
      <DotConstellation />
      {/* extra aurora bloom for depth + colour */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[640px] w-[640px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.55), transparent 65%)" }}
        aria-hidden
      />

      {/* brain graphic — focal on large screens, faint backdrop on mobile */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center lg:flex" aria-hidden>
        <HeroNeural className="h-[80%] w-auto animate-float" />
      </div>
      <div className="pointer-events-none absolute right-[-90px] top-24 w-[340px] opacity-[0.16] sm:w-[440px] lg:hidden" aria-hidden>
        <HeroNeural className="h-auto w-full" />
      </div>

      <div className="wrap relative flex min-h-[92svh] flex-col justify-center pb-16 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
          className="max-w-3xl lg:max-w-2xl"
        >
          <p className="eyebrow-dark">AI-driven software development company</p>
          <h1 className="h-display mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            Transforming ideas into{" "}
            <span className="bg-grad-aurora-tri bg-clip-text text-transparent">scalable digital solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            DotLabs designs and engineers custom software, web and mobile apps, SaaS platforms, and
            AI solutions for ambitious companies. 50+ senior engineers. 300+ projects shipped.
            One accountable partner from first call to long-term support.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a free consultation <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-ghost border-white/20 text-white hover:border-cyanx hover:text-cyanx">
              See our work
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs text-mist sm:text-sm">
                <Icon name="check" className="h-3.5 w-3.5 text-cyanx" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.6, 0.35, 1] }}
          className="glass-dark relative mt-16 max-w-3xl px-6 py-7 sm:px-10"
        >
          <StatCounters dark compact />
        </motion.div>
      </div>
    </section>
  );
}
