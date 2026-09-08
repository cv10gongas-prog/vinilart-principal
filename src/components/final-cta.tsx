import { ArrowUpRight } from "lucide-react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="surface-grain relative overflow-hidden bg-ink py-24 lg:py-36">
      <BrushGlow
        tone="magenta"
        className="left-[-5%] top-[-45%] h-[620px] w-[620px] opacity-55"
      />

      <BrushGlow
        tone="yellow"
        className="bottom-[-55%] right-[-5%] h-[520px] w-[520px] opacity-35"
      />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 w-1/2 opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <BrandBar className="mb-12 h-[2px] w-24" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow">
                O próximo projeto
              </span>

              <h2 className="mt-6 max-w-[900px] text-[3rem] leading-[0.92] sm:text-6xl lg:text-[5rem]">
                Tens uma ideia?
                <br />
                <span className="text-gradient-brand">
                  Vamos dar-lhe forma.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/58 sm:text-lg">
                Conta-nos o que tens em mente. Falamos sobre o
                projeto, percebemos o objetivo e encontramos a
                melhor forma de o tornar real.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:justify-self-end">
              <CtaLink
                to="/contactos"
                hash="pedido"
                className="min-w-[220px]"
              >
                Pedir orçamento
              </CtaLink>

              <CtaLink
                to="/contactos"
                variant="ghost"
                className="mt-5 flex w-fit"
              >
                Falar connosco
              </CtaLink>

              <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-foreground/30">
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
