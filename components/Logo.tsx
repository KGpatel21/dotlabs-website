import Link from "next/link";

/* Sparken Technologies logo — spark bolt mark + wordmark.
   Pure SVG mark = crisp at any size; adapts to dark/light navbars. */
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="Sparken Technologies home" className="group inline-flex items-center gap-2">
      <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 rounded-[9px] transition-transform duration-300 group-hover:scale-110"
        role="presentation"
        aria-hidden
      >
        <defs>
          <linearGradient id="sparken-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="0.5" stopColor="#2E5BFF" />
            <stop offset="1" stopColor="#2DD4FF" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill={dark ? "rgba(255,255,255,0.08)" : "#070C1A"} />
        <path d="M36 8 L18 36 L30 36 L26 56 L46 26 L33 26 Z" fill="url(#sparken-mark)" />
      </svg>
      <span className="inline-flex items-baseline">
        <span className={`h-display text-xl leading-none ${dark ? "text-white" : "text-ink"}`}>Sparken</span>
        <span className="ml-1.5 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-mist sm:inline">
          Technologies
        </span>
      </span>
    </Link>
  );
}
