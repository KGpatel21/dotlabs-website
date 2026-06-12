import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="DotLabs home" className="group inline-flex items-baseline gap-0.5">
      <span className={`h-display text-xl ${dark ? "text-white" : "text-ink"}`}>Dot</span>
      <span className="relative -top-px inline-block h-2 w-2 rounded-full bg-grad-brand transition-transform duration-300 group-hover:scale-125" />
      <span className={`h-display text-xl ${dark ? "text-white" : "text-ink"}`}>Labs</span>
    </Link>
  );
}
