import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SportBlock } from "@/components/sport-block";
import { processSteps, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "VinilArt — Design, Impressão e Personalização em Oeiras",
      },
      {
        name: "description",
        content:
          "Design, impressão, decoração, estampagem e personalização para empresas, marcas e projetos. VinilArt, Oeiras.",
      },
      {
        property: "og:title",
        content: "VinilArt — Damos forma às tuas ideias",
      },
      {
        property: "og:description",
        content:
          "Comunicação visual, impressão e personalização em Oeiras.",
      },
    ],
  }),

  component: Index,
});

function Hero() {
  return (
    <section className="surface-grain relative min-h-[100svh] overflow-hidden bg-ink pb-16 pt-28 sm:pb-20 sm:pt-36 lg:flex lg:min-h-[880px] lg:items-center lg:pb-24 lg:pt-32">
      <BrushGlow
        tone="magenta"
        className="left-[-30%] top-[-8%] h-[520px] w-[520px] opacity-55 sm:left-[-20%] sm:h-[650px] sm:w-[650px]"
      />

      <BrushGlow
        tone="cyan"
        className="right-[-35%] top-[28%] h-[520px] w-[520px] opacity-45 sm:right-[-18%] sm:top-[14%] sm:h-[680px] sm:w-[680px]"
      />

      <div
        aria-hidden="true"
        className="surface-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] opacity-30 md:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 sm:px-8 md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-10 xl:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="bar-brand h-[2px] w-9 sm:w-10" />

              <span className="eyebrow text-foreground/[0.65]">
                Comunicação visual · Oeiras
              </span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 max-w-[760px] text-[3.05rem] leading-[0.9] tracking-[-0.06em] min-[390px]:text-[3.45rem] sm:mt-7 sm:text-[4.55rem] md:text-[5rem] lg:text-[5.25rem] xl:text-[5.9rem]">
              Damos forma
              <br />
              às tuas
              <br />

              <span className="text-gradient-brand">
                ideias.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-7 max-w-[580px] text-[1.05rem] font-medium leading-[1.7] text-foreground/85 sm:mt-8 sm:text-[1.12rem]">
              Design, impressão e personalização para marcas que
              querem destacar-se.
            </p>

            <p className="mt-4 max-w-[540px] text-sm leading-[1.8] text-foreground/60 sm:mt-5 sm:text-base">
              Da ideia à aplicação final, transformamos conceitos
              em soluções visuais com presença, identidade e
              impacto.
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-9 flex flex-col gap-4 min-[440px]:flex-row min-[440px]:flex-wrap">
              <CtaLink
                to="/contactos"
                hash="pedido"
                className="w-full min-[440px]:w-auto"
              >
                Pedir orçamento
              </CtaLink>

              <CtaLink
                to="/portfolio"
                variant="outline"
                className="w-full min-[440px]:w-auto"
              >
                Ver trabalhos
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 grid max-w-[520px] grid-cols-3 border-y border-white/[0.08] sm:mt-12">
              {[
                ["01", "Design"],
                ["02", "Impressão"],
                ["03", "Personalização"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={
                    index === 1
                      ? "border-x border-white/[0.08] px-3 py-4 sm:px-5"
                      : index === 0
                        ? "py-4 pr-3 sm:pr-5"
                        : "py-4 pl-3 sm:pl-5"
                  }
                >
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-foreground/45 sm:text-[0.6rem]">
                    {number}
                  </p>

                  <p className="mt-1.5 font-display text-[0.7rem] font-bold uppercase text-foreground/90 sm:text-[0.78rem]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="md:hidden">
            <div className="relative">
              <MediaSlot
                label="Aplicação VinilArt"
                ratio="16 / 10"
                tone="cyan"
                showLabel={false}
                className="shadow-[0_30px_80px_rgba(0,0,0,.5)]"
              />

              <div className="absolute bottom-4 left-4 bg-ink/90 px-4 py-3.5 backdrop-blur-xl">
                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-foreground/38">
                  VinilArt
                </p>

                <p className="mt-1.5 font-display text-xs font-extrabold uppercase leading-[1.3]">
                  Saber fazer…
                  <br />
                  como deve ser.
                </p>

                <BrandBar className="mt-3 w-10" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[680px] md:block lg:justify-self-end">
            <div className="relative min-h-[610px] lg:min-h-[670px]">
              <div className="absolute left-[3%] top-[9%] z-10 w-[67%]">
                <MediaSlot
                  label="Aplicação de vinil em viatura"
                  ratio="4 / 5"
                  tone="cyan"
                  showLabel={false}
                  className="shadow-[0_35px_100px_rgba(0,0,0,0.48)]"
                />
              </div>

              <div className="float-soft absolute right-[2%] top-[1%] z-20 w-[39%]">
                <MediaSlot
                  label="Impressão de grande formato"
                  ratio="1 / 1"
                  tone="magenta"
                  showLabel={false}
                  className="shadow-[0_28px_80px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="absolute bottom-[7%] right-[4%] z-30 w-[49%]">
                <MediaSlot
                  label="Montra decorada"
                  ratio="4 / 3"
                  tone="yellow"
                  showLabel={false}
                  className="shadow-[0_35px_90px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="absolute bottom-[10%] left-[8%] z-40 border border-white/[0.06] bg-ink/94 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <p className="text-[0.55rem] uppercase tracking-[0.22em] text-foreground/38">
                  VinilArt
                </p>

                <p className="mt-2 font-display text-sm font-extrabold uppercase leading-[1.2]">
                  Saber fazer…
                  <br />
                  como deve ser.
                </p>

                <BrandBar className="mt-4 w-14" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-[1440px] items-center gap-3 px-5 text-foreground/40 sm:px-8 lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:w-full lg:-translate-x-1/2 lg:px-10">
        <ChevronDown className="h-4 w-4 animate-bounce" />

        <span className="text-[0.6rem] uppercase tracking-[0.2em]">
          Descobrir
        </span>
      </div>
    </section>
  );
}

function BrandManifesto() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-charcoal/20 py-20 sm:py-24 lg:py-28">
      <BrushGlow
        tone="magenta"
        className="bottom-[-70%] left-[-20%] h-[500px] w-[500px] opacity-18"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <BrandBar className="h-[2px] w-9" />

              <span className="eyebrow text-foreground/[0.65]">
                A forma de trabalhar
              </span>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[2.7rem] leading-[0.94] sm:text-5xl lg:text-[4.1rem]">
              Saber fazer…
              <br />

              <span className="text-gradient-brand">
                como deve ser.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <p className="max-w-xl text-base leading-7 text-foreground/68 sm:text-lg sm:leading-8">
              Na VinilArt cada projeto passa por diferentes fases,
              mas o objetivo mantém-se: transformar uma ideia
              numa solução visual que funcione no mundo real.
            </p>

            <div className="mt-8 grid grid-cols-3 border-y border-white/[0.07]">
              {[
                ["Criar", "Ideia"],
                ["Produzir", "Forma"],
                ["Aplicar", "Resultado"],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className={
                    index === 1
                      ? "border-x border-white/[0.07] px-3 py-5 sm:px-5"
                      : index === 0
                        ? "py-5 pr-3 sm:pr-5"
                        : "py-5 pl-3 sm:pl-5"
                  }
                >
                  <span className="font-display text-sm font-extrabold uppercase sm:text-base">
                    {title}
                  </span>

                  <span className="mt-1 block text-[0.64rem] uppercase tracking-[0.14em] text-foreground/42">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/sobre"
              className="group mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-cyan"
            >
              Conhecer a VinilArt

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="surface-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] opacity-18 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Fazemos ideias
                <br />

                <span className="text-gradient-brand">
                  ganhar presença.
                </span>
              </>
            }
          />

          <Reveal>
            <p className="max-w-xl text-base leading-7 text-foreground/65">
              Da identidade de uma marca ao espaço físico onde
              ela vive. Criamos, produzimos e aplicamos soluções
              visuais para diferentes suportes e necessidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={(index % 4) * 45}
              className="group"
            >
              <Link
                to="/servicos"
                hash={service.slug}
                className="grid grid-cols-[38px_1fr] gap-x-4 gap-y-3 border-t border-white/[0.07] py-6 transition-colors last:border-b hover:bg-white/[0.018] sm:grid-cols-[48px_1fr] sm:px-2 lg:grid-cols-[70px_1.05fr_1.4fr_40px] lg:items-center lg:gap-5 lg:px-3 lg:py-7"
              >
                <span className="font-display text-xs font-extrabold text-foreground/32 transition-colors group-hover:text-magenta sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl">
                  {service.title}
                </h3>

                <p className="col-start-2 max-w-xl text-sm leading-6 text-foreground/60 lg:col-start-auto">
                  {service.text}
                </p>

                <ArrowUpRight className="hidden h-5 w-5 text-foreground/22 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan lg:block" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-9 flex sm:justify-end lg:mt-12">
            <CtaLink
              to="/servicos"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Explorar serviços
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Processo() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-charcoal/20 py-20 sm:py-24 lg:py-32">
      <BrushGlow
        tone="cyan"
        className="right-[-30%] top-[-35%] h-[500px] w-[500px] opacity-16 sm:right-[-15%]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Da ideia ao{" "}

              <span className="text-gradient-brand">
                resultado.
              </span>
            </>
          }
          subtitle="Um processo simples para transformar uma ideia numa solução visual pronta para ganhar forma."
        />

        <ol className="relative mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          <div
            aria-hidden="true"
            className="bar-brand absolute left-0 right-0 top-[21px] hidden h-px opacity-55 lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.n}
              delay={index * 70}
              className="relative border-t border-white/[0.07] pt-5 md:border-t-0 md:pt-0 lg:pr-10"
            >
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-charcoal font-display text-xs font-extrabold text-foreground/72 ring-1 ring-white/[0.08]">
                {step.n}
              </span>

              <h3 className="mt-6 text-2xl">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-foreground/65">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <BrandManifesto />

      <ServicesSection />

      <Processo />

      <SportBlock />

      <FinalCta />
    </>
  );
}
