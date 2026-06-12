import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#070C1A", 900: "#0B1226", 800: "#101A36" },
        paper: "#F6F8FB",
        cobalt: { DEFAULT: "#2E5BFF", 600: "#1F47E0", 100: "#E4EAFF" },
        cyanx: "#2DD4FF",
        slatex: "#5B6478",
        mist: "#9AA6BF",
        line: "rgba(155,170,200,0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { wrap: "76rem" },
      boxShadow: {
        card: "0 1px 2px rgba(7,12,26,0.06), 0 8px 24px rgba(7,12,26,0.07)",
        lift: "0 2px 4px rgba(7,12,26,0.08), 0 20px 44px rgba(46,91,255,0.16)",
        glow: "0 0 0 1px rgba(45,212,255,0.25), 0 8px 40px rgba(46,91,255,0.35)",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(100deg, #2E5BFF 0%, #2DD4FF 100%)",
        "grad-ink": "radial-gradient(1200px 600px at 70% -10%, rgba(46,91,255,0.28), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(45,212,255,0.12), transparent 60%)",
      },
      animation: {
        "dot-pulse": "dotPulse 2.4s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
      },
      keyframes: {
        dotPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.35)", opacity: "0.7" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
