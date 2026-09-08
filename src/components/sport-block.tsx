import { ArrowUpRight } from "lucide-react";

import { BrandBar, BrushGlow, Wordmark } from "@/components/brand";
import { CtaAnchor, CtaLink } from "@/components/cta-button";
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
      className="surface-grain relative scroll-mt-24 overflow-hidden bg-ink py-24 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="surface-diagonal absolute inset-0 opacity-55"
      />

      <div
        aria-hidden="true"
        className="surface-grid absolute inset-y-0 right-0 w-[48%] opacity-20"
      />

      <BrushGlow
        tone="magenta"
        className="left-[-15%] top-[-15%] h-[560px] w-[560px] opacity-60"
      />

      <BrushGlow
        tone="cyan"
        className="bottom-[-20%] right-[-10%] h-[600px] w-[600px] opacity-55"
      />

      <BrushGlow
        tone="yellow"
        className="right-[30%] top-[5%] h-[260px] w-[260px] opacity-25"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
            <div className="flex items-center gap-3">
              <BrandBar className="h-[2px] w-10" />

              <span className="eyebrow text-yellow">
                VinilArt Sport
              </span>
            </div>

            <span className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-foreground/30 sm:block">
              Uma vertente VinilArt
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <Wordmark
                sport
                className="text-3xl sm:text-4xl"
              />
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-7 text-[3rem] leading-[0.92] sm:text-6xl lg:text-[4.7rem]">
                Personalizamos
                <br />
                a tua{" "}
                <span className="text-gradient-brand">
                  paixão.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-7 max-w-xl text-base leading-7 text-foreground/62 sm:text-lg">
                A vertente desportiva da VinilArt, pensada para
                atletas, equipas, clubes e adeptos que querem
                levar a sua identidade mais longe.
              </p>
            </Reveal>

            <div className="mt-10">
              {sportServices.map((service, index) => (
                <Reveal
                  key={service}
                  delay={160 + index * 55}
                >
                  <div className="group flex items-center justify-between border-t border-white/[0.08] py-4 last:border-b">
                    <div className="flex items-center gap-5">
                      <span className="font-display text-xs font-bold text-foreground/20 transition-colors group-hover:text-yellow">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-sm font-bold uppercase tracking-[0.03em] text-foreground/82">
                        {service}
                      </span>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-foreground/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={390}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaAnchor href={SPORT_STORE_URL}>
                  Conhecer VinilArt Sport
                </CtaAnchor>

                <CtaLink
                  to="/contactos"
                  hash="pedido"
                  variant="outline"
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
            <div className="relative mx-auto max-w-[650px]">
              <MediaSlot
                label="Equipamentos e artigos personalizados VinilArt Sport"
                ratio="4 / 5"
                tone="yellow"
                showLabel={false}
                className="shadow-[0_40px_120px_rgba(0,0,0,.55)]"
              />

              <div className="absolute -left-4 bottom-[10%] hidden bg-ink/94 p-6 shadow-2xl backdrop-blur sm:block lg:-left-10">
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
