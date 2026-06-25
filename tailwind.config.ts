import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#070C1A", 900: "#0B1226", 800: "#101A36", 700: "#16234A" },
        paper: "#F6F8FB",
        cobalt: { DEFAULT: "#2E5BFF", 600: "#1F47E0", 100: "#E4EAFF" },
        cyanx: "#2DD4FF",
        // Secondary brand — violet, for an AI/premium accent that breaks the all-blue feel
        violet: { DEFAULT: "#7C5CFF", 600: "#6438F5", 100: "#ECE7FF" },
        // Fresh accent — teal, used sparingly for proof/positive emphasis
        teal: { DEFAULT: "#1FD0B0", 600: "#0FB89A", 100: "#D6FBF3" },
        // Warm accent — amber, rare highlights only
        amber: { DEFAULT: "#FFB35C", 600: "#FB9A33", 100: "#FFEFD9" },
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
        "glow-violet": "0 0 0 1px rgba(124,92,255,0.30), 0 10px 44px rgba(124,92,255,0.40)",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(100deg, #2E5BFF 0%, #2DD4FF 100%)",
        "grad-violet": "linear-gradient(100deg, #6438F5 0%, #7C5CFF 100%)",
        // The colourful signature gradient — cobalt → violet → cyan
        "grad-aurora": "linear-gradient(115deg, #1F47E0 0%, #6438F5 42%, #2DD4FF 100%)",
        "grad-aurora-tri": "linear-gradient(120deg, #2E5BFF 0%, #7C5CFF 38%, #2DE0C2 72%, #2DD4FF 100%)",
        // Dark-section glow now mixes a violet bloom so it isn't purely blue
        "grad-ink": "radial-gradient(1100px 560px at 72% -8%, rgba(124,92,255,0.30), transparent 60%), radial-gradient(900px 520px at 8% 112%, rgba(45,212,255,0.14), transparent 60%), radial-gradient(700px 420px at 50% 50%, rgba(46,91,255,0.10), transparent 70%)",
      },
      animation: {
        "dot-pulse": "dotPulse 2.4s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        synapse: "synapse 3.2s ease-in-out infinite",
        "synapse-slow": "synapse 5s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        aurora: "aurora 14s ease infinite",
        "draw-in": "drawIn 2.4s ease-out forwards",
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
        synapse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.25)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        aurora: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        drawIn: {
          to: { "stroke-dashoffset": "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
