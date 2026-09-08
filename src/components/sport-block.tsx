import { ArrowUpRight } from "lucide-react";

import {
  BrandBar,
  BrushGlow,
  Wordmark,
} from "@/components/brand";
import {
  CtaAnchor,
  CtaLink,
} from "@/components/cta-button";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import {
  SPORT_STORE_URL,
  sportServices,
} from "@/data/site";

export function SportBlock() {
  return (
    <section
      id="vinilart-sport"
      className="surface-grain relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="surface-diagonal absolute inset-0 opacity-30"
      />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 hidden w-[48%] opacity-18 lg:block"
      />

      <BrushGlow
        tone="magenta"
        className="left-[-30%] top-[-10%] h-[500px] w-[500px] opacity-45 sm:left-[-15%]"
      />

      <BrushGlow
        tone="cyan"
        className="bottom-[-30%] right-[-30%] h-[540px] w-[540px] opacity-45 sm:right-[-10%]"
      />

      <BrushGlow
        tone="yellow"
        className="right-[25%] top-[2%] hidden h-[260px] w-[260px] opacity-20 sm:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-white/[0.08] pb-5 sm:pb-6">
            <div className="flex items-center gap-3">
              <BrandBar className="h-[2px] w-9 sm:w-10" />

              <span className="eyebrow text-yellow">
                VinilArt Sport
              </span>
            </div>

            <span className="hidden text-[0.6rem] uppercase tracking-[0.2em] text-foreground/28 sm:block">
              Uma vertente VinilArt
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          <div>
            <Reveal>
              <Wordmark
                sport
                className="text-2xl sm:text-3xl lg:text-4xl"
              />
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-6 text-[2.75rem] leading-[0.92] min-[400px]:text-[3.1rem] sm:mt-7 sm:text-6xl lg:text-[4.5rem]">
                Personalizamos
                <br />
                a tua{" "}

                <span className="text-gradient-brand">
                  paixão.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
                A vertente desportiva da VinilArt, pensada para
                atletas, equipas, clubes e adeptos que querem
                levar a sua identidade mais longe.
              </p>
            </Reveal>

            <div className="mt-8 sm:mt-10">
              {sportServices.map((service, index) => (
                <Reveal
                  key={service}
                  delay={140 + index * 50}
                >
                  <div className="group flex items-center justify-between gap-3 border-t border-white/[0.08] py-4 last:border-b">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                      <span className="shrink-0 font-display text-[0.65rem] font-bold text-foreground/20 transition-colors group-hover:text-yellow sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-[0.72rem] font-bold uppercase leading-5 tracking-[0.02em] text-foreground/82 sm:text-sm">
                        {service}
                      </span>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/18 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <CtaAnchor
                  href={SPORT_STORE_URL}
                  className="w-full sm:w-auto"
                >
                  Conhecer VinilArt Sport
                </CtaAnchor>

                <CtaLink
                  to="/contactos"
                  hash="pedido"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Pedir orçamento
                </CtaLink>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={100}
            className="relative"
          >
            <div className="lg:hidden">
              <MediaSlot
                label="Equipamentos e artigos personalizados VinilArt Sport"
                ratio="16 / 10"
                tone="yellow"
                showLabel={false}
                className="shadow-[0_30px_90px_rgba(0,0,0,.5)]"
              />
            </div>

            <div className="relative mx-auto hidden max-w-[650px] lg:block">
              <MediaSlot
                label="Equipamentos e artigos personalizados VinilArt Sport"
                ratio="4 / 5"
                tone="yellow"
                showLabel={false}
                className="shadow-[0_40px_120px_rgba(0,0,0,.55)]"
              />

              <div className="absolute -left-8 bottom-[10%] bg-ink/94 p-6 shadow-2xl backdrop-blur">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-foreground/32">
                  VinilArt Sport
                </p>

                <p className="mt-2 font-display text-xl font-extrabold uppercase leading-tight">
                  O teu clube.
                  <br />
                  As tuas cores.
                </p>

                <BrandBar className="mt-5 w-20" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
