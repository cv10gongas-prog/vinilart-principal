import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { PortfolioGrid } from "@/components/portfolio-grid";
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
        content:
          "VinilArt — Damos forma às tuas ideias",
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
    <section className="surface-grain relative min-h-[100svh] overflow-hidden bg-ink pb-16 pt-32 sm:pt-40 lg:flex lg:min-h-[880px] lg:items-center lg:pt-32">
      <BrushGlow
        tone="magenta"
        className="left-[-18%] top-[-10%] h-[680px] w-[680px] opacity-65"
      />

      <BrushGlow
        tone="cyan"
        className="right-[-14%] top-[12%] h-[700px] w-[700px] opacity-55"
      />

      <div
        className="surface-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] opacity-35 lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 lg:px-10">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="bar-brand h-[2px] w-10" />
              <span className="eyebrow">
                Comunicação visual · Oeiras
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[760px] text-[3.15rem] leading-[0.9] tracking-[-0.06em] sm:text-[4.7rem] lg:text-[5.35rem] xl:text-[5.9rem]">
              Damos forma
              <br />
              às tuas
              <br />
              <span className="text-gradient-brand">
                ideias.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 max-w-[620px] font-display text-base font-semibold uppercase leading-[1.45] text-foreground/88 sm:text-lg">
              Design, impressão e personalização para marcas
              que querem destacar-se.
            </p>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-foreground/55">
              Da ideia à aplicação final, transformamos
              conceitos em soluções visuais com presença,
              identidade e impacto.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/contactos" hash="pedido">
                Pedir orçamento
              </CtaLink>

              <CtaLink
                to="/portfolio"
                variant="outline"
              >
                Ver trabalhos
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12 grid max-w-[570px] grid-cols-3 border-y border-white/[0.07]">
              {[
                ["01", "Design"],
                ["02", "Impressão"],
                ["03", "Personalização"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={
                    index === 1
                      ? "border-x border-white/[0.07] px-4 py-4"
                      : index === 0
                        ? "py-4 pr-4"
                        : "py-4 pl-4"
                  }
                >
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/30">
                    {number}
                  </p>

                  <p className="mt-1.5 font-display text-sm font-bold uppercase text-foreground/85">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={140}
          className="relative mx-auto w-full max-w-[680px] lg:justify-self-end"
        >
          <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[670px]">
            <div className="absolute left-[3%] top-[9%] z-10 w-[67%]">
              <MediaSlot
                label="Aplicação de vinil em viatura"
                ratio="4 / 5"
                tone="cyan"
                showLabel={false}
                className="shadow-[0_35px_100px_rgba(0,0,0,0.42)]"
              />
            </div>

            <div className="float-soft absolute right-[2%] top-[1%] z-20 w-[39%]">
              <MediaSlot
                label="Impressão de grande formato"
                ratio="1 / 1"
                tone="magenta"
                showLabel={false}
                className="shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="absolute bottom-[7%] right-[4%] z-30 w-[49%]">
              <MediaSlot
                label="Montra decorada"
                ratio="4 / 3"
                tone="yellow"
                showLabel={false}
                className="shadow-[0_35px_90px_rgba(0,0,0,0.46)]"
              />
            </div>

            <div className="absolute bottom-[10%] left-[8%] z-40 hidden bg-ink/92 px-5 py-4 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-[0.58rem] uppercase tracking-[0.2em] text-foreground/35">
                VinilArt
              </p>

              <p className="mt-2 font-display text-sm font-extrabold uppercase leading-5">
                Saber fazer...
                <br />
                como deve ser.
              </p>

              <BrandBar className="mt-4 w-16" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-6 flex max-w-[1440px] items-center gap-3 px-5 text-foreground/35 sm:px-8 lg:absolute lg:bottom-7 lg:left-1/2 lg:w-full lg:-translate-x-1/2 lg:px-10">
        <ChevronDown className="h-4 w-4 animate-bounce" />

        <span className="text-[0.6rem] uppercase tracking-[0.22em]">
          Descobrir
        </span>
      </div>
    </section>
  );
}

function Intro() {
  const values = [
    {
      n: "01",
      title: "Criatividade",
      text:
        "Cada projeto começa com uma ideia e uma solução visual pensada para lhe dar identidade.",
    },
    {
      n: "02",
      title: "Atenção ao detalhe",
      text:
        "Do conceito à aplicação, cada elemento contribui para o resultado final.",
    },
    {
      n: "03",
      title: "Soluções adaptadas",
      text:
        "Cada espaço, marca ou suporte pede uma abordagem própria.",
    },
    {
      n: "04",
      title: "Impacto visual",
      text:
        "Comunicação criada para ser vista, reconhecida e lembrada.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-charcoal/20 py-24 lg:py-36">
      <BrushGlow
        tone="magenta"
        className="bottom-[-50%] left-[-20%] h-[520px] w-[520px] opacity-20"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal>
          <div className="relative">
            <MediaSlot
              label="Trabalho de produção na oficina VinilArt"
              ratio="4 / 5"
              tone="magenta"
            />

            <div className="absolute -bottom-5 -right-4 hidden max-w-[270px] bg-ink/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.5)] backdrop-blur-xl sm:block">
              <span className="eyebrow">
                Da ideia à aplicação
              </span>

              <p className="mt-3 font-display text-lg font-extrabold uppercase leading-tight">
                Soluções pensadas
                <br />
                para cada projeto.
              </p>

              <BrandBar className="mt-5 w-20" />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="VinilArt"
            title={
              <>
                Saber fazer…
                <br />
                <span className="text-gradient-brand">
                  como deve ser.
                </span>
              </>
            }
            subtitle="Na VinilArt transformamos ideias em soluções de comunicação visual e personalização. Do conceito à aplicação final, trabalhamos cada projeto com atenção ao detalhe e foco no resultado."
          />

          <div className="mt-12">
            {values.map((value, index) => (
              <Reveal
                key={value.n}
                delay={80 + index * 70}
                className="group"
              >
                <div className="grid gap-3 border-t border-white/[0.07] py-6 last:border-b sm:grid-cols-[48px_180px_1fr] sm:items-start sm:gap-6">
                  <span className="font-display text-xs font-bold text-foreground/22 transition-colors group-hover:text-magenta">
                    {value.n}
                  </span>

                  <h3 className="text-lg font-extrabold uppercase">
                    {value.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-foreground/58">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <CtaLink
              to="/sobre"
              variant="outline"
              className="mt-9"
            >
              Conhecer a VinilArt
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="surface-grid pointer-events-none absolute inset-y-0 right-0 w-[44%] opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
            <p className="max-w-xl text-base leading-7 text-foreground/55 lg:ml-auto">
              Da identidade de uma marca ao espaço físico onde
              ela vive. Criamos, produzimos e aplicamos soluções
              visuais para diferentes suportes e necessidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={(index % 4) * 50}
              className="group"
            >
              <Link
                to="/servicos"
                hash={service.slug}
                className="grid items-center gap-5 border-t border-white/[0.07] py-7 transition-colors last:border-b hover:bg-white/[0.018] sm:grid-cols-[70px_1.05fr_1.4fr_40px] sm:px-3"
              >
                <span className="font-display text-sm font-extrabold text-foreground/20 transition-colors group-hover:text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl sm:text-3xl">
                  {service.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-foreground/50">
                  {service.text}
                </p>

                <ArrowUpRight className="h-5 w-5 text-foreground/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-end">
            <CtaLink to="/servicos" variant="outline">
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
    <section className="relative overflow-hidden bg-charcoal/20 py-24 lg:py-36">
      <BrushGlow
        tone="cyan"
        className="right-[-15%] top-[-30%] h-[520px] w-[520px] opacity-18"
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

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
          <div
            aria-hidden="true"
            className="bar-brand absolute left-0 right-0 top-[22px] hidden h-px opacity-45 md:block"
          />

          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.n}
              delay={index * 80}
              className="relative md:pr-10"
            >
              <span className="relative z-10 flex h-11 w-11 items-center justify-center bg-ink font-display text-xs font-extrabold">
                {step.n}
              </span>

              <h3 className="mt-7 text-2xl">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[260px] text-sm leading-6 text-foreground/55">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading
            eyebrow="Portefólio"
            title={
              <>
                O nosso trabalho
                <br />
                <span className="text-gradient-brand">
                  fala por nós.
                </span>
              </>
            }
          />

          <Reveal>
            <p className="max-w-lg text-base leading-7 text-foreground/55 lg:ml-auto">
              Viaturas, espaços, impressão, estampagem e
              personalização. Cada projeto é diferente porque
              cada ideia também é.
            </p>
          </Reveal>
        </div>

        <PortfolioGrid limit={6} />

        <Reveal className="mt-12">
          <CtaLink to="/portfolio" variant="outline">
            Ver portefólio completo
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section className="relative overflow-hidden bg-charcoal/20 py-24 lg:py-36">
      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Sobre nós"
            title={
              <>
                Criatividade
                <br />
                <span className="text-gradient-brand">
                  que ganha forma.
                </span>
              </>
            }
            subtitle="Na VinilArt desenvolvemos soluções de comunicação visual e personalização adaptadas a cada projeto, acompanhando a ideia desde o conceito até à aplicação final."
          />

          <Reveal>
            <CtaLink
              to="/sobre"
              variant="outline"
              className="mt-9"
            >
              Conhecer a VinilArt
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative">
            <MediaSlot
              label="Fotografia da equipa, oficina ou produção VinilArt"
              ratio="4 / 3"
              tone="cyan"
            />

            <div className="absolute -bottom-5 left-6 right-6 hidden bg-ink/94 px-6 py-5 backdrop-blur sm:block">
              <p className="font-display text-lg font-extrabold uppercase">
                Saber fazer…
                <span className="text-gradient-brand">
                  {" "}
                  como deve ser.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesSection />
      <Processo />
      <PortfolioSection />
      <SportBlock />
      <Sobre />
      <FinalCta />
    </>
  );
}
