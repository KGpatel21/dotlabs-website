"use client";

import { useId } from "react";
import { Reveal, SectionHeading } from "./Reveal";

/* Abstract world map: graticule grid + glowing client markers + delivery arcs
   from the Ahmedabad hub. Pure SVG (crisp at any resolution, ~2 KB). */

type Marker = { name: string; lon: number; lat: number; hub?: boolean };

const markers: Marker[] = [
  { name: "Ahmedabad · HQ", lon: 72.6, lat: 23.0, hub: true },
  { name: "United Kingdom", lon: -0.1, lat: 51.5 },
  { name: "Germany", lon: 13.4, lat: 52.5 },
  { name: "Netherlands", lon: 4.9, lat: 52.4 },
  { name: "UAE", lon: 55.3, lat: 25.2 },
  { name: "Singapore", lon: 103.8, lat: 1.35 },
  { name: "United States", lon: -74.0, lat: 40.7 },
  { name: "Canada", lon: -79.4, lat: 43.7 },
  { name: "Australia", lon: 151.2, lat: -33.9 },
  { name: "Japan", lon: 139.7, lat: 35.7 },
];

const W = 860;
const H = 430;
const px = (lon: number) => ((lon + 180) / 360) * W;
const py = (lat: number) => ((90 - lat) / 180) * H;

export default function ClientMap() {
  const gid = useId().replace(/:/g, "");
  const hub = markers[0];

  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 neural-field-dark opacity-50" aria-hidden />
      <div className="wrap relative">
        <SectionHeading
          dark
          eyebrow="Global delivery"
          title="Built in Ahmedabad. Shipped worldwide."
          desc="Client engagements across 5+ countries, run with fixed overlap hours so collaboration happens in your working day."
        />

        <Reveal className="mt-14">
          <div className="glass-dark overflow-hidden rounded-2xl p-4 sm:p-6">
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Map of countries Sparken Technologies has delivered projects in">
              <defs>
                <linearGradient id={`${gid}-arc`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#7C5CFF" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#2DD4FF" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id={`${gid}-hub`} cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="#2DD4FF" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#2DD4FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* graticule */}
              <g stroke="rgba(140,160,210,0.10)" strokeWidth="1">
                {Array.from({ length: 11 }, (_, i) => (
                  <line key={`v${i}`} x1={(i * W) / 10} y1="0" x2={(i * W) / 10} y2={H} />
                ))}
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={`h${i}`} x1="0" y1={(i * H) / 5} x2={W} y2={(i * H) / 5} />
                ))}
              </g>

              {/* delivery arcs from hub */}
              <g fill="none" stroke={`url(#${gid}-arc)`} strokeWidth="1.3" opacity="0.55">
                {markers.slice(1).map((m) => {
                  const x1 = px(hub.lon), y1 = py(hub.lat);
                  const x2 = px(m.lon), y2 = py(m.lat);
                  const mx = (x1 + x2) / 2;
                  const my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.18 - 24;
                  return <path key={m.name} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} />;
                })}
              </g>

              {/* hub glow */}
              <circle cx={px(hub.lon)} cy={py(hub.lat)} r="34" fill={`url(#${gid}-hub)`} />

              {/* markers */}
              {markers.map((m) => (
                <g key={m.name} transform={`translate(${px(m.lon)}, ${py(m.lat)})`}>
                  <circle
                    r={m.hub ? 7 : 5}
                    fill={m.hub ? "#2DD4FF" : "#7C5CFF"}
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.5"
                    className="animate-dot-pulse"
                    style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${(Math.abs(m.lon) % 5) * 0.35}s` }}
                  />
                  <text
                    y={m.lat < 10 ? 22 : -14}
                    textAnchor="middle"
                    className="fill-white font-mono"
                    style={{ fontSize: "11px", opacity: 0.85 }}
                  >
                    {m.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
