import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

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
          "Soluções de design, impressão, decoração, estampagem e personalização para empresas, marcas e projetos. VinilArt, Oeiras.",
      },
      {
        property: "og:title",
        content:
          "VinilArt — Design, Impressão e Personalização em Oeiras",
      },
      {
        property: "og:description",
        content:
          "Damos forma às tuas ideias. Design, impressão e personalização para marcas que querem destacar-se.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="surface-grain relative min-h-[100svh] overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40 lg:flex lg:min-h-[920px] lg:items-center lg:pb-24 lg:pt-36">
      <BrushGlow
        tone="magenta"
        className="left-[-15%] top-[-8%] h-[620px] w-[620px] opacity-70"
      />

      <BrushGlow
        tone="cyan"
        className="right-[-12%] top-[10%] h-[680px] w-[680px] opacity-60"
      />

      <BrushGlow
        tone="yellow"
        className="bottom-[-20%] right-[24%] h-[300px] w-[300px] opacity-35"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, transparent 49.9%, rgba(255,255,255,.09) 50%, transparent 50.1%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-10">
        <div className="relative z-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="bar-brand h-[2px] w-10" />

              <span className="eyebrow">
                Comunicação visual · Oeiras
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[760px] text-[3rem] leading-[0.91] tracking-[-0.055em] sm:text-[4.6rem] lg:text-[5.7rem] xl:text-[6.25rem]">
              Damos forma
              <br />
              às tuas{" "}
              <span className="text-gradient-brand">
                ideias.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 max-w-[640px] font-display text-[1rem] font-semibold uppercase leading-[1.45] tracking-[-0.01em] text-foreground/88 sm:text-[1.15rem]">
              Design, impressão e personalização para marcas
              que querem destacar-se.
            </p>

            <p className="mt-5 max-w-[590px] text-[0.98rem] leading-7 text-foreground/54 sm:text-base">
              Da ideia à aplicação final, criamos soluções
              visuais pensadas para dar presença, identidade e
              impacto a cada projeto.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/contactos" hash="pedido">
                Pedir orçamento
              </CtaLink>

              <CtaLink to="/portfolio" variant="outline">
                Ver trabalhos
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12 grid max-w-[570px] grid-cols-3 border-y border-white/[0.07]">
              <div className="py-4 pr-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                  01
                </p>

                <p className="mt-1.5 font-display text-sm font-bold uppercase text-foreground/82">
                  Design
                </p>
              </div>

              <div className="border-x border-white/[0.07] px-4 py-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                  02
                </p>

                <p className="mt-1.5 font-display text-sm font-bold uppercase text-foreground/82">
                  Impressão
                </p>
              </div>

              <div className="py-4 pl-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                  03
                </p>

                <p className="mt-1.5 font-display text-sm font-bold uppercase text-foreground/82">
                  Personalização
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={150}
          className="relative mx-auto w-full max-w-[720px] lg:mx-0"
        >
          <div className="relative min-h-[560px] sm:min-h-[660px] lg:min-h-[720px]">
            <div className="absolute left-0 top-[7%] z-10 w-[72%]">
              <MediaSlot
                label="Aplicação de vinil em viatura"
                ratio="4 / 5"
                tone="cyan"
                showLabel={false}
                className="shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
              />
            </div>

            <div className="absolute right-0 top-0 z-20 w-[43%]">
              <MediaSlot
                label="Impressão de grande formato"
                ratio="1 / 1"
                tone="magenta"
                showLabel={false}
                className="shadow-[0_25px_70px_rgba(0,0,0,0.4)]"
              />
            </div>

            <div className="absolute bottom-[5%] right-[2%] z-30 w-[53%]">
              <MediaSlot
                label="Montra decorada"
                ratio="4 / 3"
                tone="yellow"
                showLabel={false}
                className="shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="absolute bottom-[8%] left-[5%] z-40 hidden border border-white/[0.08] bg-ink/90 px-5 py-4 backdrop-blur-md sm:block">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-foreground/35">
                VinilArt
              </p>

              <p className="mt-2 max-w-[180px] font-display text-sm font-bold uppercase leading-5 text-foreground/90">
                Saber fazer...
                <br />
                como deve ser.
              </p>

              <BrandBar className="mt-4 w-16" />
            </div>

            <div
              aria-hidden="true"
              className="absolute right-[10%] top-[17%] -z-10 h-[55%] w-[52%] border border-white/[0.06]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[14%] left-[8%] -z-10 h-[42%] w-[48%] border border-white/[0.04]"
            />
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1440px] items-center gap-3 px-5 text-muted-foreground sm:px-8 lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:w-full lg:-translate-x-1/2 lg:px-10">
        <ChevronDown className="h-4 w-4 animate-bounce" />

        <span className="text-[0.62rem] uppercase tracking-[0.22em]">
          Descobrir
        </span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-y border-border bg-charcoal/30 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <MediaSlot
            label="Trabalho de produção na oficina VinilArt"
            ratio="4 / 5"
            tone="magenta"
          />
        </Reveal>

        <div className="lg:pt-10">
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

          <Reveal delay={120}>
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                "Criatividade",
                "Atenção ao detalhe",
                "Soluções adaptadas",
                "Impacto visual",
              ].map((v) => (
                <div
                  key={v}
                  className="bg-ink px-5 py-5"
                >
                  <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground/85">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  const svc = (slug: string) =>
    services.find((s) => s.slug === slug)!;

  const logos3d = svc("logotipos-3d");
  const design = svc("design");
  const impressao = svc("impressao");
  const montras = svc("decoracao-de-montras");
  const interiores = svc("decoracao-de-interiores");
  const viaturas = svc("decoracao-de-viaturas");
  const brindes = svc("brindes");
  const estampagem = svc("estampagem");

  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Soluções que dão{" "}
              <span className="text-gradient-brand">
                vida
              </span>{" "}
              às ideias.
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <FeatureCard
            service={viaturas}
            className="lg:col-span-7"
            tall
          />

          <div className="grid gap-4 lg:col-span-5">
            <FeatureCard service={montras} />

            <FeatureCard service={logos3d} />
          </div>

          <FeatureCard
            service={impressao}
            className="lg:col-span-5"
          />

          <FeatureCard
            service={interiores}
            className="lg:col-span-4"
          />

          <FeatureCard
            service={design}
            className="lg:col-span-3"
            compact
          />

          <FeatureCard
            service={estampagem}
            className="lg:col-span-4"
          />

          <FeatureCard
            service={brindes}
            className="lg:col-span-4"
            compact
          />

          <Reveal
            delay={100}
            className="flex flex-col justify-between border border-border bg-charcoal/40 p-6 lg:col-span-4"
          >
            <p className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">
              Cada suporte
              <br />
              <span className="text-gradient-brand">
                é uma oportunidade.
              </span>
            </p>

            <Link
              to="/servicos"
              className="mt-8 flex w-fit items-center gap-2 border border-border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-cyan hover:text-cyan"
            >
              Todos os serviços
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  service,
  className,
  tall = false,
  compact = false,
}: {
  service: (typeof services)[number];
  className?: string | undefined;
  tall?: boolean | undefined;
  compact?: boolean | undefined;
}) {
  return (
    <Reveal className={className}>
      <article className="group relative h-full overflow-hidden border border-border bg-charcoal/30 transition-colors hover:border-foreground/25">
        {!compact ? (
          <MediaSlot
            label={service.image}
            ratio={tall ? "16 / 11" : "16 / 9"}
            tone={service.tone}
            showLabel={false}
          />
        ) : null}

        <div className="p-6">
          <h3 className="text-2xl">
            {service.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-foreground/60">
            {service.text}
          </p>
        </div>

        <div className="bar-brand absolute inset-x-0 bottom-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full" />
      </article>
    </Reveal>
  );
}

function Processo() {
  return (
    <section className="surface-grain relative border-y border-border bg-charcoal/30 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Processo"
          title={
            <>
              Da ideia ao{" "}
              <span className="text-gradient-brand">
                resultado.
              </span>
            </>
          }
        />

        <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 90}
              className="bg-ink p-7"
            >
              <span className="font-display text-4xl font-extrabold tracking-tight text-foreground/15">
                {step.n}
              </span>

              <h3 className="mt-4 text-xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {step.text}
              </p>

              <span className="bar-brand mt-6 block h-[2px] w-10" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              O nosso trabalho{" "}
              <span className="text-gradient-brand">
                fala por nós.
              </span>
            </>
          }
          subtitle="Cada projeto é uma oportunidade de transformar uma ideia em algo visível, marcante e único."
        />

        <PortfolioGrid limit={6} />

        <Reveal className="mt-12">
          <CtaLink
            to="/portfolio"
            variant="outline"
          >
            Ver portefólio completo
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section className="border-y border-border bg-charcoal/30 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre nós"
            title={
              <>
                Criatividade que{" "}
                <span className="text-gradient-brand">
                  ganha forma.
                </span>
              </>
            }
            subtitle="Na VinilArt desenvolvemos soluções de comunicação visual e personalização adaptadas a diferentes projetos. Trabalhamos desde a fase de conceito até à aplicação final, procurando sempre criar soluções com impacto visual e identidade própria."
          />

          <Reveal delay={120}>
            <CtaLink
              to="/sobre"
              variant="outline"
              className="mt-10"
            >
              Conhecer a VinilArt
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <MediaSlot
            label="Fotografia da equipa, oficina ou produção VinilArt"
            ratio="4 / 3"
            tone="cyan"
          />
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
      <Servicos />
      <Processo />
      <PortfolioSection />
      <SportBlock />
      <Sobre />
      <FinalCta />
    </>
  );
}
