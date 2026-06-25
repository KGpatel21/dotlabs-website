import { Reveal } from "./Reveal";
import { HeroNeural } from "./Decor";

export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink bg-grad-ink pb-16 pt-36 text-white md:pb-20 md:pt-44">
      <div className="absolute inset-0 neural-field-dark opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[420px] -translate-y-1/2 opacity-25 lg:block"
        aria-hidden
      >
        <HeroNeural className="h-auto w-full animate-float" />
      </div>
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow-dark">{eyebrow}</p>
          <h1 className="h-display mt-4 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{desc}</p>
        </Reveal>
      </div>
    </section>
  );
}
