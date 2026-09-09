import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { CtaLink } from "@/components/cta-button";
import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      {
        title:
          "Serviços — Design, Impressão e Personalização | VinilArt",
      },
      {
        name: "description",
        content:
          "Logotipos 3D, design, impressão, decoração de montras, interiores e viaturas, brindes e estampagem. Soluções VinilArt em Oeiras.",
      },
      {
        property: "og:title",
        content:
          "Serviços VinilArt — Soluções de comunicação visual",
      },
      {
        property: "og:description",
        content:
          "Soluções pensadas para dar visibilidade às ideias. Conhece os serviços VinilArt.",
      },
    ],
  }),

  component: ServicosPage,
});

function ServicosPage() {
  const visualServices = services.filter((service) =>
    [
      "decoracao-de-viaturas",
      "decoracao-de-montras",
      "estampagem",
    ].includes(service.slug),
  );

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Soluções para ideias
            <br />

            <span className="text-gradient-brand">
              que querem ser vistas.
            </span>
          </>
        }
        text="Do desenvolvimento visual à produção e aplicação, trabalhamos diferentes suportes para encontrar a solução certa para cada projeto."
      />

      <section className="border-b border-white/[0.06] bg-charcoal/20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex items-center gap-5 overflow-x-auto py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/28">
              Explorar
            </span>

            <span className="h-4 w-px shrink-0 bg-white/[0.08]" />

            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="group flex shrink-0 items-center gap-2 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-foreground/52 transition-colors hover:text-foreground sm:text-[0.72rem]"
              >
                <span className="text-foreground/18 transition-colors group-hover:text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {service.title}
              </a>
            ))}

            <ArrowDown className="ml-auto hidden h-4 w-4 shrink-0 text-foreground/22 lg:block" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="surface-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[39%] opacity-16 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-7 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
              <div>
                <span className="eyebrow">
                  O que fazemos
                </span>

                <h2 className="mt-5 text-[2.55rem] leading-[0.94] sm:text-5xl lg:text-6xl">
                  Um projeto.
                  <br />

                  <span className="text-gradient-brand">
                    Diferentes possibilidades.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-foreground/56 lg:ml-auto">
                Cada serviço responde a uma necessidade
                diferente, mas todos partem do mesmo princípio:
                perceber o objetivo e encontrar a forma certa de
                o concretizar.
              </p>
            </div>
          </Reveal>

          <div>
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={(index % 4) * 45}
                className="group"
              >
                <article
                  id={service.slug}
                  className="scroll-mt-28 border-b border-white/[0.07]"
                >
                  <div className="grid gap-x-4 gap-y-4 py-7 sm:grid-cols-[52px_1fr] sm:py-8 lg:grid-cols-[72px_0.9fr_1.25fr_auto] lg:items-center lg:gap-8 lg:px-3 lg:py-10">
                    <span className="font-display text-xs font-extrabold text-foreground/18 transition-colors duration-300 group-hover:text-magenta sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-[1.75rem] sm:text-3xl lg:text-[2.2rem]">
                      {service.title}
                    </h2>

                    <p className="col-start-1 max-w-xl text-sm leading-6 text-foreground/54 sm:col-start-2 lg:col-start-auto">
                      {service.text}
                    </p>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="col-start-1 mt-1 w-fit sm:col-start-2 lg:col-start-auto lg:mt-0"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-charcoal/20 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <span className="eyebrow">
                  O trabalho em contexto
                </span>

                <h2 className="mt-5 max-w-[700px] text-[2.5rem] leading-[0.94] sm:text-5xl">
                  Da produção
                  <br />

                  <span className="text-gradient-brand">
                    à aplicação final.
                  </span>
                </h2>
              </div>

              <Link
                to="/portfolio"
                className="group flex w-fit items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground/52 transition-colors hover:text-cyan"
              >
                Ver portefólio

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {visualServices.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 80}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-6"
                    : "lg:col-span-3"
                }
              >
                <MediaSlot
                  label={service.image}
                  ratio={
                    index === 0
                      ? "16 / 10"
                      : "4 / 5"
                  }
                  tone={service.tone}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
