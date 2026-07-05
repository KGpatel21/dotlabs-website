import { Reveal } from "./Reveal";

/* Editorial inner-page hero (coorb-style): pill eyebrow, large tight headline,
   optional stat chips. No decorative graphics — clean, typographic, contained. */
export default function PageHero({
  eyebrow,
  title,
  desc,
  chips,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  chips?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink pb-14 pt-32 text-white md:pb-20 md:pt-40">
      <div className="absolute inset-0 neural-field-dark opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] max-w-full rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.5), transparent 65%)" }}
        aria-hidden
      />
      <div className="wrap relative">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyanx backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-cyanx" />
            {eyebrow}
          </p>
          <h1 className="h-display mt-6 max-w-4xl text-4xl leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{desc}</p>

          {chips && chips.length > 0 && (
            <ul className="mt-9 flex flex-wrap gap-3">
              {chips.map((c) => (
                <li key={c.label} className="glass-dark flex items-baseline gap-2 rounded-xl px-4 py-2.5">
                  <span className="h-display bg-grad-aurora-tri bg-clip-text text-lg text-transparent">{c.value}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mist">{c.label}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent" aria-hidden />
    </section>
  );
}
