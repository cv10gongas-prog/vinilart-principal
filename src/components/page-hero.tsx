import { BrushGlow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string | undefined;
}) {
  return (
    <section className="surface-grain relative overflow-hidden border-b border-border bg-charcoal/30 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <BrushGlow tone="cyan" className="right-[-6%] top-[-20%] h-[380px] w-[380px]" />
      <BrushGlow tone="magenta" className="left-[-8%] bottom-[-30%] h-[320px] w-[320px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="bar-brand h-[2px] w-8" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">{title}</h1>
          {text ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
              {text}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
