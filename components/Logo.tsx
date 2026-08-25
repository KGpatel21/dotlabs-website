import Link from "next/link";

/* Sparken Technologies logo — geometric S mark + wordmark.
   Pure SVG mark = crisp at any size; adapts to dark/light navbars. */
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="Sparken Technologies home" className="group inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 350 350"
        className="h-9 w-9 rounded-xl transition-transform duration-300 group-hover:scale-110"
        role="presentation"
        aria-hidden
      >
        <rect x="0.5" y="0.5" width="349" height="349" rx="53.5" fill={dark ? "rgba(255,255,255,0.08)" : "#010617"} />
        <path
          d="M277 123.942V71.77C277 62.5082 269.492 55 260.23 55H81V102.603L172.711 165.053L277 236.383M182.039 106.706L277 172.366V236.383L178.476 295.021L90.141 241.882C84.469 238.47 81 232.335 81 225.715V160.875L169.884 220.789"
          stroke="url(#sparken-mark)"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M254.5 114.5V80C254.5 77.7909 252.709 76 250.5 76H109C106.791 76 105 77.7909 105 80V89.3751C105 90.7038 105.66 91.9457 106.761 92.6896L254.5 192.5"
          stroke={dark ? "rgba(255,255,255,0.85)" : "white"}
          fill="none"
        />
        <circle cx="254.5" cy="114.5" r="2.5" fill="white" />
        <circle cx="254.5" cy="192.5" r="2.5" fill="white" />
        <path
          d="M76 127L232.123 231.404C234.594 233.057 234.463 236.732 231.881 238.204L179.015 268.351C177.769 269.062 176.238 269.051 175.002 268.322L103.469 226.16C102.249 225.441 101.5 224.131 101.5 222.715V198.36"
          stroke="white"
          strokeOpacity="0.8"
          fill="none"
        />
        <circle cx="101.5" cy="198.5" r="2.5" fill="white" />
        <circle cx="75.5" cy="126.5" r="2.5" fill="white" />
        <defs>
          <linearGradient id="sparken-mark" x1="179" y1="55" x2="179" y2="297.118" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0845FE" />
            <stop offset="1" stopColor="#F1F7FE" />
          </linearGradient>
        </defs>
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
