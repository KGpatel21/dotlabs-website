"use client";

import { memo, useId } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   Neural / "brain" decoration system.

   Everything here is pure SVG with a viewBox, so it is resolution-independent
   — crisp at 4K and beyond — and a fraction of the weight of a raster banner.
   Animations are CSS-only (defined in tailwind.config) and respect
   prefers-reduced-motion via the global stylesheet. useId() gives each
   instance stable, collision-free gradient IDs across SSR + hydration.
   ────────────────────────────────────────────────────────────────────────── */

const clean = (s: string) => s.replace(/:/g, "");

/* Small neural motif placed at the top of section headings. */
export const SectionDecor = memo(function SectionDecor({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  const g = clean(useId());
  return (
    <svg
      viewBox="0 0 132 26"
      width="132"
      height="26"
      role="presentation"
      aria-hidden
      className={`${align === "center" ? "mx-auto" : ""} ${className}`}
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="0.5" stopColor="#2E5BFF" />
          <stop offset="1" stopColor="#2DD4FF" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${g})`} strokeWidth="1.4" fill="none" strokeLinecap="round">
        <line x1="6" y1="13" x2="40" y2="13" opacity="0.5" />
        <line x1="92" y1="13" x2="126" y2="13" opacity="0.5" />
        <path d="M40 13 L52 7 M40 13 L52 19" opacity="0.7" />
        <path d="M92 13 L80 7 M92 13 L80 19" opacity="0.7" />
      </g>
      <g fill={`url(#${g})`}>
        <circle cx="52" cy="7" r="2" />
        <circle cx="52" cy="19" r="2" />
        <circle cx="80" cy="7" r="2" />
        <circle cx="80" cy="19" r="2" />
        <circle cx="66" cy="13" r="3.4" className="animate-synapse" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
        <circle cx="6" cy="13" r="1.6" opacity="0.6" />
        <circle cx="126" cy="13" r="1.6" opacity="0.6" />
      </g>
    </svg>
  );
});

/* Large brain / neural-network composition — the hero focal graphic. */
export const HeroNeural = memo(function HeroNeural({ className = "" }: { className?: string }) {
  const base = clean(useId());
  const stroke = `${base}s`;
  const fill = `${base}f`;
  const glow = `${base}g`;

  const nodes: [number, number, number][] = [
    [250, 70, 3], [310, 96, 4], [356, 150, 3], [372, 220, 5], [356, 290, 3],
    [310, 344, 4], [250, 372, 3], [190, 360, 4], [150, 312, 3], [132, 244, 5],
    [146, 176, 3], [188, 120, 4], [232, 150, 6], [286, 168, 3], [316, 226, 5],
    [286, 286, 4], [228, 300, 6], [196, 238, 5], [248, 222, 7], [228, 188, 3],
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
    [9, 10], [10, 11], [11, 0], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
    [17, 12], [18, 19], [18, 12], [18, 14], [18, 16], [12, 1], [14, 3], [16, 5],
    [11, 12], [13, 2], [17, 9], [18, 13], [19, 11], [19, 17],
  ];
  const pulse = new Set([3, 9, 12, 14, 16, 18]);

  return (
    <svg
      viewBox="0 0 504 444"
      role="img"
      aria-label="Abstract neural network forming a brain, representing AI-driven engineering"
      className={className}
    >
      <defs>
        <linearGradient id={stroke} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="0.5" stopColor="#2E5BFF" />
          <stop offset="1" stopColor="#2DD4FF" />
        </linearGradient>
        <radialGradient id={fill} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#2DD4FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </radialGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#6438F5" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#2E5BFF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#2E5BFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="252" cy="222" r="210" fill={`url(#${glow})`} />

      <g stroke={`url(#${stroke})`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M250 66 C150 66 96 150 110 232 C120 300 170 384 252 384 C300 384 332 360 350 326"
          strokeWidth="2"
          opacity="0.35"
        />
        <path d="M210 150 C250 180 250 230 214 252" strokeWidth="1.6" opacity="0.25" />
        <path d="M300 200 C268 232 280 286 246 300" strokeWidth="1.6" opacity="0.25" />

        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            strokeWidth="1.1"
            opacity="0.4"
          />
        ))}
      </g>

      {nodes.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={`url(#${fill})`}
          className={pulse.has(i) ? "animate-synapse-slow" : ""}
          style={pulse.has(i) ? { transformBox: "fill-box", transformOrigin: "center", animationDelay: `${(i % 5) * 0.4}s` } : undefined}
        />
      ))}
    </svg>
  );
});

/* Full-bleed faint neural backdrop for dark sections (synapse arcs + nodes). */
export const NeuralBackdrop = memo(function NeuralBackdrop({ className = "" }: { className?: string }) {
  const g = clean(useId());
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#2DD4FF" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${g})`} fill="none" strokeWidth="1" opacity="0.18">
        <path d="M-20 120 C200 60 360 200 560 140 S920 60 1220 160" />
        <path d="M-20 320 C220 260 380 420 600 360 S960 280 1220 360" />
        <path d="M-20 500 C200 460 420 540 640 480 S980 440 1220 520" />
      </g>
      <g fill={`url(#${g})`} opacity="0.6">
        {[
          [120, 92], [360, 168], [560, 140], [780, 110], [980, 150],
          [220, 300], [600, 360], [860, 312], [1080, 348],
          [180, 486], [640, 480], [900, 452], [1120, 506],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} />
        ))}
      </g>
    </svg>
  );
});
