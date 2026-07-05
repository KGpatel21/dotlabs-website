"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import { trustBadges } from "@/lib/data";
import { outcomes } from "@/lib/data";

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
      <div className="absolute inset-0 neural-field-dark opacity-50" aria-hidden />
      <DotConstellation />
      {/* aurora blooms for depth (contained, positive offsets only) */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] max-w-full rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.55), transparent 65%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] max-w-full rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(45,212,255,0.45), transparent 65%)" }}
        aria-hidden
      />

      <div className="wrap relative flex min-h-[92svh] flex-col justify-center pb-14 pt-28 md:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyanx backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-cyanx" />
              Independent since 2019 · Now Sparken Technologies
            </p>
            <h1 className="h-display mt-6 text-4xl leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Transforming ideas into{" "}
              <span className="bg-grad-aurora-tri bg-clip-text text-transparent">scalable digital solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              We design and engineer custom software, web and mobile apps, SaaS platforms, and AI
              solutions — a 25+ person team, 100+ projects shipped, and one accountable partner from
              first call to long-term support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a free consultation <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost border-white/20 text-white hover:border-cyanx hover:text-cyanx">
                See our work
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
              {trustBadges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-mist sm:text-sm">
                  <Icon name="check" className="h-3.5 w-3.5 text-cyanx" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: product mockup with floating stat chips ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.6, 0.35, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            aria-hidden
          >
            <div className="glass-dark relative overflow-hidden rounded-2xl border-white/15 p-5 shadow-[0_24px_80px_rgba(7,12,26,0.55)] sm:p-6">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyanx/70" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">sparken · delivery</p>
              </div>

              {/* delivery rows */}
              <ul className="mt-4 space-y-3">
                {[
                  { name: "AI support agent", status: "Live", metric: "47% auto-resolved", on: true },
                  { name: "Claims platform", status: "Deploying", metric: "v2.4 → production", on: true },
                  { name: "Fleet control tower", status: "Live", metric: "96% on-time", on: true },
                  { name: "Wealth portal", status: "In QA", metric: "214 tests passing", on: false },
                ].map((r) => (
                  <li key={r.name} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${r.on ? "animate-dot-pulse bg-teal" : "bg-amber"}`} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">{r.name}</p>
                        <p className="truncate font-mono text-[10px] uppercase tracking-wider text-mist">{r.metric}</p>
                      </div>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${r.on ? "bg-teal/10 text-teal" : "bg-amber/10 text-amber"}`}>
                      {r.status}
                    </span>
                  </li>
                ))}
              </ul>

              {/* mini bar chart */}
              <div className="mt-4 flex items-end justify-between gap-1.5 rounded-xl bg-white/[0.04] p-4">
                {[34, 52, 41, 66, 58, 79, 64, 88, 72, 95, 84, 100].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 0.44}px` }}
                    className="w-full rounded-sm bg-grad-aurora opacity-80"
                  />
                ))}
              </div>
              <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                Shipped releases · trailing 12 months
              </p>
            </div>

            {/* floating chips */}
            <div className="absolute -top-4 right-3 animate-float rounded-xl border border-white/15 bg-ink/80 px-3.5 py-2 backdrop-blur-md sm:-right-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist">Uptime</p>
              <p className="h-display text-sm text-teal">99.9%</p>
            </div>
            <div className="absolute -bottom-4 left-3 animate-float rounded-xl border border-white/15 bg-ink/80 px-3.5 py-2 backdrop-blur-md sm:-left-3" style={{ animationDelay: "1.4s" }}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist">First proposal</p>
              <p className="h-display text-sm text-cyanx">&lt; 48 hrs</p>
            </div>
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 animate-float rounded-xl border border-white/15 bg-ink/80 px-3.5 py-2 backdrop-blur-md xl:block" style={{ animationDelay: "2.6s" }}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-mist">IP ownership</p>
              <p className="h-display text-sm text-violet">100% yours</p>
            </div>
          </motion.div>
        </div>

        {/* ── Outcome metrics strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map((o) => (
            <Link
              key={o.tag}
              href="/portfolio"
              className="glass-dark group/oc min-w-0 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.07]"
            >
              <p className="h-display bg-grad-aurora-tri bg-clip-text text-3xl text-transparent">{o.value}</p>
              <p className="mt-1.5 text-sm leading-snug text-white/90">{o.label}</p>
              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition-colors group-hover/oc:text-cyanx">
                {o.tag}
              </p>
            </Link>
          ))}
        </motion.div>

        {/* scroll cue */}
        <div className="pointer-events-none mt-10 hidden justify-center lg:flex" aria-hidden>
          <div className="flex flex-col items-center gap-2 opacity-60">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">Scroll</span>
            <span className="h-8 w-px animate-pulse bg-gradient-to-b from-cyanx to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
