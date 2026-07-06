"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";

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
      <div className="absolute inset-0 neural-field-dark opacity-40" aria-hidden />
      <DotConstellation />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] max-w-full rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.5), transparent 65%)" }}
        aria-hidden
      />

      <div className="wrap relative flex min-h-[88svh] items-center pb-20 pt-32 md:pt-36">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ── Left: minimal copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyanx backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-cyanx" />
              Software · AI · Since 2019
            </p>
            <h1 className="h-display mt-7 text-[2.6rem] leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.2rem]">
              We build software{" "}
              <span className="bg-grad-aurora-tri bg-clip-text text-transparent">that ships.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
              Custom software, web &amp; mobile apps, SaaS, and AI — designed, engineered, and
              supported by one accountable team.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary !px-7 !py-3.5">
                Book a free consultation <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost border-white/20 !px-7 !py-3.5 text-white hover:border-cyanx hover:text-cyanx">
                See our work
              </Link>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-mist sm:text-sm">
              <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-cyanx" /> 100+ projects</span>
              <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-cyanx" /> NDA on request</span>
              <span className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-cyanx" /> 100% IP yours</span>
            </p>
          </motion.div>

          {/* ── Right: build-and-ship terminal (Sparken's own motif) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.6, 0.35, 1] }}
            className="relative mx-auto w-full max-w-md"
            aria-hidden
          >
            <div className="glass-dark overflow-hidden rounded-2xl border-white/15 shadow-[0_24px_80px_rgba(7,12,26,0.55)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyanx/70" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">sparken — build &amp; ship</p>
              </div>

              <div className="space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
                <p className="text-mist"><span className="text-violet">$</span> sparken scope your-idea</p>
                <p className="text-white/85"><span className="text-teal">✓</span> proposal &amp; fixed estimate <span className="text-mist">— 48h</span></p>
                <p className="text-white/85"><span className="text-teal">✓</span> architecture review <span className="text-mist">— founder-led</span></p>
                <p className="text-mist"><span className="text-violet">$</span> sparken build --with-you</p>
                <p className="text-white/85"><span className="text-teal">✓</span> weekly demos <span className="text-mist">· 214 tests passing</span></p>
                <p className="text-mist"><span className="text-violet">$</span> sparken deploy --production</p>
                <p className="text-cyanx"><span className="animate-dot-pulse mr-1 inline-block h-2 w-2 rounded-full bg-teal align-middle" /> live — supported long-term</p>
              </div>

              <div className="flex divide-x divide-white/10 border-t border-white/10 bg-white/[0.03] text-center">
                {[
                  { v: "48h", l: "to proposal" },
                  { v: "99.9%", l: "uptime" },
                  { v: "100%", l: "IP yours" },
                ].map((c) => (
                  <div key={c.l} className="flex-1 px-2 py-3.5">
                    <p className="h-display bg-grad-aurora-tri bg-clip-text text-base text-transparent">{c.v}</p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-mist">{c.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
