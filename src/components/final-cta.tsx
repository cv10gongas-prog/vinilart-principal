import { ArrowUpRight } from "lucide-react";

import {
  BrandBar,
  BrushGlow,
} from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="surface-grain relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
      <BrushGlow
        tone="magenta"
        className="left-[-35%] top-[-35%] h-[520px] w-[520px] opacity-45 sm:left-[-5%] sm:h-[620px] sm:w-[620px]"
      />

      <BrushGlow
        tone="yellow"
        className="bottom-[-60%] right-[-40%] h-[460px] w-[460px] opacity-28 sm:right-[-5%]"
      />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 hidden w-1/2 opacity-18 md:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <BrandBar className="mb-10 h-[2px] w-20 sm:mb-12 sm:w-24" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              O próximo projeto
            </span>

            <h2 className="mt-5 max-w-[900px] text-[2.75rem] leading-[0.92] min-[400px]:text-[3.15rem] sm:mt-6 sm:text-6xl lg:text-[4.8rem]">
              Tens uma ideia?
              <br />

              <span className="text-gradient-brand">
                Vamos dar-lhe forma.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
              Conta-nos o que tens em mente. Falamos sobre o
              projeto, percebemos o objetivo e encontramos a
              melhor forma de o tornar real.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex flex-col lg:items-start lg:justify-self-end">
              <CtaLink
                to="/contactos"
                hash="pedido"
                className="w-full sm:w-fit sm:min-w-[220px]"
              >
                Pedir orçamento
              </CtaLink>

              <CtaLink
                to="/contactos"
                variant="ghost"
                className="mt-3 w-fit sm:mt-5"
              >
                Falar connosco
              </CtaLink>

              <div className="mt-8 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-foreground/28 sm:mt-10 sm:text-xs">
                <span>VinilArt</span>

                <ArrowUpRight className="h-3.5 w-3.5" />

                <span>Oeiras</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
