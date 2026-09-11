import { ArrowUpRight } from "lucide-react";

import { BrandBar, BrushGlow, Wordmark } from "@/components/brand";

import { CtaAnchor, CtaLink } from "@/components/cta-button";

import { Reveal } from "@/components/reveal";

import { SPORT_STORE_URL, sportServices } from "@/data/site";

export function SportBlock() {
  return (
    <section
      id="vinilart-sport"
      className="surface-grain relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <div aria-hidden="true" className="surface-diagonal absolute inset-0 opacity-28" />

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

              <span className="eyebrow text-yellow">VinilArt Sport</span>
            </div>

            <span className="hidden text-[0.6rem] uppercase tracking-[0.2em] text-foreground/28 md:block">
              Uma vertente VinilArt
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <Reveal>
              <Wordmark sport className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-4xl" />
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-6 max-w-[650px] text-[2.75rem] leading-[0.92] min-[400px]:text-[3.1rem] sm:mt-7 sm:text-6xl lg:text-[4rem] xl:text-[4.65rem]">
                Personalizamos
                <br />a tua <span className="text-gradient-brand">paixão.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-[590px] text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
                A vertente desportiva da VinilArt, pensada para atletas, equipas, clubes e adeptos
                que querem levar a sua identidade mais longe.
              </p>
            </Reveal>

            <div className="mt-8 sm:mt-10">
              {sportServices.map((service, index) => (
                <Reveal key={service} delay={140 + index * 50}>
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
                <CtaAnchor href={SPORT_STORE_URL} className="w-full sm:w-auto">
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

          <Reveal delay={100} className="min-w-0">
            {/* CARTAZ DE MARCA OFICIAL VINILART SPORT */}
            <div className="group relative mx-auto w-full max-w-[620px]">
              {/* Nuance de luz CMYK de fundo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-2xl opacity-25 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 20% 30%, rgba(0, 188, 242, 0.28), transparent 60%), radial-gradient(circle at 80% 40%, rgba(236, 0, 140, 0.25), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 237, 0, 0.2), transparent 60%)",
                }}
              />

              {/* Contentor do Cartaz Editorial */}
              <div className="relative overflow-hidden border border-white/[0.09] bg-[#0c1016] p-7 sm:p-9 lg:p-11 shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
                {/* Texturas subtis de fundo */}
                <div
                  aria-hidden="true"
                  className="surface-grid pointer-events-none absolute inset-0 opacity-20"
                />
                <div
                  aria-hidden="true"
                  className="surface-diagonal pointer-events-none absolute inset-0 opacity-15"
                />

                {/* Topo do cartaz com marcas de registo editorial */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                      Identidade Oficial
                    </span>
                  </div>
                  <span className="text-[0.56rem] font-mono uppercase tracking-[0.16em] text-foreground/30">
                    ED. SPORT // 2026
                  </span>
                </div>

                {/* Logótipo Oficial VinilArt Sport com autoridade e destaque */}
                <div className="relative z-10 flex flex-col items-center justify-center py-10 sm:py-14 lg:py-16">
                  <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-y-2 scale-110 opacity-30 blur-xl"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(236, 0, 140, 0.35), rgba(0, 188, 242, 0.25), transparent 70%)",
                      }}
                    />
                    <img
                      src="/brand/official/vinilart-sport-logo-horizontal.png"
                      alt="VinilArt Sport — Logótipo Oficial"
                      width={1018}
                      height={264}
                      className="relative z-10 h-auto w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Rodapé do cartaz: Slogan como elemento secundário de apoio */}
                <div className="relative z-10 border-t border-white/[0.08] pt-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-yellow/80">
                        Slogan Oficial
                      </p>
                      <p className="mt-1 font-display text-base font-extrabold uppercase tracking-tight text-foreground/90 sm:text-lg">
                        O teu clube. As tuas cores.
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-[0.58rem] uppercase tracking-[0.14em] text-foreground/45">
                        Equipamentos · Têxtil · Merchandising
                      </p>
                    </div>
                  </div>
                  <BrandBar className="mt-4 h-[2px] opacity-70" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
