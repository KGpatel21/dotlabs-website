import { Reveal } from "./Reveal";

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
      <div className="absolute inset-0 dot-field-dark" aria-hidden />
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
