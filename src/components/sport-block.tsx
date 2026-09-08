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
      className="surface-grain relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <div
        aria-hidden="true"
        className="surface-diagonal absolute inset-0 opacity-28"
      />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 hidden w-[46%] opacity-16 lg:block"
      />

      <BrushGlow
        tone="magenta"
        className="left-[-35%] top-[-12%] h-[500px] w-[500px] opacity-42 sm:left-[-18%] lg:left-[-12%]"
      />

      <BrushGlow
        tone="cyan"
        className="bottom-[-30%] right-[-35%] h-[540px] w-[540px] opacity-40 sm:right-[-15%]"
      />

      <BrushGlow
        tone="yellow"
        className="right-[24%] top-[2%] hidden h-[240px] w-[240px] opacity-18 md:block"
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

            <span className="hidden text-[0.6rem] uppercase tracking-[0.2em] text-foreground/28 md:block">
              Uma vertente VinilArt
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <Reveal>
              <Wordmark
                sport
                className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-4xl"
              />
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-6 max-w-[650px] text-[2.75rem] leading-[0.92] min-[400px]:text-[3.1rem] sm:mt-7 sm:text-6xl lg:text-[4rem] xl:text-[4.65rem]">
                Personalizamos
                <br />
                a tua{" "}

                <span className="text-gradient-brand">
                  paixão.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[590px] text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
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
                  <div className="group flex items-center justify-between gap-4 border-t border-white/[0.08] py-4 last:border-b">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                      <span className="shrink-0 font-display text-[0.65rem] font-bold text-foreground/20 transition-colors group-hover:text-yellow sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-[0.72rem] font-bold uppercase leading-5 tracking-[0.02em] text-foreground/82 sm:text-sm">
                        {service}
                      </span>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/18 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
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
            className="min-w-0"
          >
            {/* TELEFONE + TABLET */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden">
                <MediaSlot
                  label="Equipamentos e artigos personalizados VinilArt Sport"
                  ratio="16 / 10"
                  tone="yellow"
                  showLabel={false}
                  className="shadow-[0_30px_90px_rgba(0,0,0,.5)]"
                />

                <div className="absolute bottom-4 left-4 max-w-[190px] bg-ink/92 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:max-w-[230px] sm:px-5 sm:py-4">
                  <p className="text-[0.52rem] uppercase tracking-[0.2em] text-foreground/30 sm:text-[0.58rem]">
                    VinilArt Sport
                  </p>

                  <p className="mt-2 font-display text-sm font-extrabold uppercase leading-tight sm:text-lg">
                    O teu clube.
                    <br />
                    As tuas cores.
                  </p>

                  <BrandBar className="mt-3 w-14 sm:mt-4 sm:w-16" />
                </div>
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-[620px] overflow-hidden">
                <MediaSlot
                  label="Equipamentos e artigos personalizados VinilArt Sport"
                  ratio="4 / 5"
                  tone="yellow"
                  showLabel={false}
                  className="shadow-[0_40px_120px_rgba(0,0,0,.55)]"
                />

                <div className="absolute bottom-6 left-6 max-w-[250px] bg-ink/94 px-6 py-5 shadow-[0_25px_70px_rgba(0,0,0,.55)] backdrop-blur-xl xl:bottom-7 xl:left-7">
                  <p className="text-[0.56rem] uppercase tracking-[0.22em] text-foreground/30">
                    VinilArt Sport
                  </p>

                  <p className="mt-2 font-display text-lg font-extrabold uppercase leading-[1.05] xl:text-xl">
                    O teu clube.
                    <br />
                    As tuas cores.
                  </p>

                  <BrandBar className="mt-4 w-16 xl:w-20" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
