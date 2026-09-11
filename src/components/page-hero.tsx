import type { ReactNode } from "react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="surface-grain relative overflow-hidden bg-ink pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
      <div aria-hidden="true" className="surface-diagonal absolute inset-0 opacity-24" />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 hidden w-[44%] opacity-16 lg:block"
      />

      <BrushGlow
        tone="magenta"
        className="right-[-30%] top-[-20%] h-[440px] w-[440px] opacity-34 sm:right-[-12%]"
      />

      <BrushGlow
        tone="cyan"
        className="bottom-[-40%] left-[-28%] h-[420px] w-[420px] opacity-28 sm:left-[-10%]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <BrandBar className="h-[2px] w-9 sm:w-10" />

            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-7 max-w-[900px] text-[3rem] leading-[0.92] min-[400px]:text-[3.4rem] sm:mt-8 sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
            {title}
          </h1>
        </Reveal>

        {text && (
          <Reveal delay={120}>
            <p className="mt-6 max-w-[600px] text-[0.95rem] leading-7 text-foreground/58 sm:mt-8 sm:text-lg sm:leading-8">
              {text}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
