import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import {
  BrandBar,
  BrushGlow,
} from "@/components/brand";

import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

import {
  processSteps,
} from "@/data/site";

const values = [
  {
    number: "01",
    title: "Criatividade",
    text:
      "Procuramos soluções visuais com identidade própria e adequadas ao contexto de cada projeto.",
  },
  {
    number: "02",
    title: "Atenção ao detalhe",
    text:
      "Cada elemento contribui para o resultado, desde a ideia inicial até à aplicação.",
  },
  {
    number: "03",
    title: "Soluções adaptadas",
    text:
      "Cada marca, espaço ou suporte exige uma abordagem própria.",
  },
  {
    number: "04",
    title: "Impacto visual",
    text:
      "Criamos comunicação pensada para ser vista, reconhecida e lembrada.",
  },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      {
        title:
          "Sobre a VinilArt — Comunicação visual e personalização",
      },
      {
        name: "description",
        content:
          "A VinilArt desenvolve soluções de comunicação visual e personalização, do conceito à aplicação final. Oeiras, Portugal.",
      },
      {
        property: "og:title",
        content:
          "Sobre a VinilArt — Criamos impacto visual",
      },
      {
        property: "og:description",
        content:
          "Mais do que produzir. Soluções de comunicação visual e personalização adaptadas a cada projeto.",
      },
    ],
  }),

  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a VinilArt"
        title={
          <>
            Mais do que produzir.
            <br />

            <span className="text-gradient-brand">
              Damos forma às ideias.
            </span>
          </>
        }
        text="Desenvolvemos soluções de comunicação visual e personalização acompanhando cada projeto desde o conceito até à aplicação final."
      />

      <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
        <BrushGlow
          tone="magenta"
          className="bottom-[-35%] left-[-25%] h-[480px] w-[480px] opacity-18 sm:left-[-10%]"
        />

        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="relative">
              <MediaSlot
                label="Fotografia da equipa, oficina ou produção VinilArt"
                ratio="4 / 5"
                tone="magenta"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-ink/92 p-4 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[280px] sm:p-5">
                <span className="eyebrow">
                  VinilArt
                </span>

                <p className="mt-2 font-display text-base font-extrabold uppercase leading-tight sm:text-lg">
                  Saber fazer…
                  <br />

                  <span className="text-gradient-brand">
                    como deve ser.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <BrandBar className="h-[2px] w-9" />

                <span className="eyebrow">
                  A nossa abordagem
                </span>
              </div>

              <h2 className="mt-6 max-w-[700px] text-[2.7rem] leading-[0.94] sm:text-5xl lg:text-6xl">
                A ideia é
                <br />

                <span className="text-gradient-brand">
                  só o começo.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-foreground/58 sm:text-lg sm:leading-8">
                O objetivo não é apenas produzir
                uma peça gráfica. É perceber o que
                o projeto precisa e encontrar a
                solução visual que melhor responde
                ao espaço, suporte e resultado
                pretendido.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-foreground/44">
                Do desenvolvimento visual à
                produção e aplicação, cada etapa
                faz parte do mesmo processo.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.17em] text-foreground/28">
                <span>
                  Ideia
                </span>

                <ArrowDown className="h-3.5 w-3.5" />

                <span>
                  Resultado
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-charcoal/20 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
              <div>
                <span className="eyebrow">
                  O que nos move
                </span>

                <h2 className="mt-5 text-[2.6rem] leading-[0.94] sm:text-5xl lg:text-6xl">
                  Criatividade
                  <br />

                  <span className="text-gradient-brand">
                    com propósito.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-foreground/54 lg:ml-auto">
                Uma boa solução visual não precisa
                apenas de chamar a atenção. Precisa
                de fazer sentido para o projeto
                onde vai viver.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 lg:mt-16">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 65}
                className="group"
              >
                <div className="grid gap-x-5 gap-y-3 border-t border-white/[0.07] py-6 last:border-b sm:grid-cols-[50px_220px_1fr] sm:py-7 lg:grid-cols-[70px_0.8fr_1.2fr] lg:items-center lg:px-3">
                  <span className="font-display text-xs font-bold text-foreground/18 transition-colors group-hover:text-magenta">
                    {value.number}
                  </span>

                  <h3 className="text-xl sm:text-2xl">
                    {value.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-foreground/52">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="surface-grid absolute inset-y-0 right-0 hidden w-[45%] opacity-15 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">
              Como trabalhamos
            </span>

            <h2 className="mt-5 max-w-[800px] text-[2.6rem] leading-[0.94] sm:text-5xl lg:text-6xl">
              Da ideia ao{" "}

              <span className="text-gradient-brand">
                resultado.
              </span>
            </h2>
          </Reveal>

          <ol className="relative mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
            <div
              aria-hidden="true"
              className="bar-brand absolute left-0 right-0 top-[20px] hidden h-px opacity-35 lg:block"
            />

            {processSteps.map(
              (step, index) => (
                <Reveal
                  as="li"
                  key={step.n}
                  delay={index * 70}
                  className="relative border-t border-white/[0.07] pt-5 md:border-t-0 md:pt-0 lg:pr-10"
                >
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-ink font-display text-xs font-extrabold text-foreground/55">
                    {step.n}
                  </span>

                  <h3 className="mt-6 text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[280px] text-sm leading-6 text-foreground/52">
                    {step.text}
                  </p>
                </Reveal>
              ),
            )}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
