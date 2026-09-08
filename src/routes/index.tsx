import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { MediaSlot } from "@/components/media-slot";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SportBlock } from "@/components/sport-block";
import { processSteps, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VinilArt — Design, Impressão e Personalização em Oeiras" },
      {
        name: "description",
        content:
          "Soluções de design, impressão, decoração, estampagem e personalização para empresas, marcas e projetos. VinilArt, Oeiras.",
      },
      {
        property: "og:title",
        content: "VinilArt — Design, Impressão e Personalização em Oeiras",
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
    <section className="surface-grain relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
      <BrushGlow tone="magenta" className="left-[-12%] top-[-6%] h-[520px] w-[520px]" />
      <BrushGlow tone="cyan" className="right-[-10%] top-[18%] h-[560px] w-[560px]" />
      <BrushGlow tone="yellow" className="bottom-[-18%] left-[35%] h-[280px] w-[280px] opacity-60" />

      <div className="relative mx-auto grid max-w-[1400px] items-end gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="bar-brand h-[2px] w-10" />
              <span className="eyebrow">Comunicação visual · Oeiras</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-[2.7rem] leading-[0.92] sm:text-7xl lg:text-[5.6rem]">
              Damos forma
              <br />
              às tuas <span className="text-gradient-brand">ideias.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-7 max-w-xl font-display text-lg font-semibold uppercase tracking-tight text-foreground/85 sm:text-xl">
              Design, impressão e personalização para marcas que querem destacar-se.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg">
              Da ideia à aplicação final, criamos soluções visuais pensadas para dar
              presença, identidade e impacto a cada projeto.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/contactos" hash="pedido">
                Pedir orçamento
              </CtaLink>
              <CtaLink to="/portfolio" variant="outline">
                Ver trabalhos
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="grid grid-cols-2 gap-3">
            <MediaSlot
              label="Aplicação de vinil em viatura"
              ratio="3 / 4"
              tone="cyan"
              showLabel={false}
              className="translate-y-6"
            />
            <MediaSlot
              label="Impressão de grande formato em produção"
              ratio="3 / 4"
              tone="magenta"
              showLabel={false}
            />
            <MediaSlot
              label="Montra decorada"
              ratio="4 / 3"
              tone="yellow"
              showLabel={false}
              className="col-span-2"
            />
          </div>
          <BrandBar className="mt-3" />
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[1400px] items-center gap-3 px-5 text-muted-foreground sm:px-8">
        <ChevronDown className="h-4 w-4 animate-bounce" />
        <span className="text-[0.68rem] uppercase tracking-[0.24em]">Scroll</span>
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
                <span className="text-gradient-brand">como deve ser.</span>
              </>
            }
            subtitle="Na VinilArt transformamos ideias em soluções de comunicação visual e personalização. Do conceito à aplicação final, trabalhamos cada projeto com atenção ao detalhe e foco no resultado."
          />
          <Reveal delay={120}>
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {["Criatividade", "Atenção ao detalhe", "Soluções adaptadas", "Impacto visual"].map(
                (v) => (
                  <div key={v} className="bg-ink px-5 py-5">
                    <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground/85">
                      {v}
                    </span>
                  </div>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  const [logos3d, design, impressao, montras, interiores, viaturas, brindes, estampagem] =
    services;

  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Soluções que dão <span className="text-gradient-brand">vida</span> às ideias.
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <FeatureCard service={viaturas} className="lg:col-span-7" tall />
          <div className="grid gap-4 lg:col-span-5">
            <FeatureCard service={montras} />
            <FeatureCard service={logos3d} />
          </div>

          <FeatureCard service={impressao} className="lg:col-span-5" />
          <FeatureCard service={interiores} className="lg:col-span-4" />
          <FeatureCard service={design} className="lg:col-span-3" compact />

          <FeatureCard service={estampagem} className="lg:col-span-4" />
          <FeatureCard service={brindes} className="lg:col-span-4" compact />
          <Reveal
            delay={100}
            className="flex flex-col justify-between border border-border bg-charcoal/40 p-6 lg:col-span-4"
          >
            <p className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">
              Cada suporte
              <br />
              <span className="text-gradient-brand">é uma oportunidade.</span>
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
  className?: string;
  tall?: boolean;
  compact?: boolean;
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
          <h3 className="text-2xl">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">{service.text}</p>
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
              Da ideia ao <span className="text-gradient-brand">resultado.</span>
            </>
          }
        />
        <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="bg-ink p-7">
              <span className="font-display text-4xl font-extrabold tracking-tight text-foreground/15">
                {step.n}
              </span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{step.text}</p>
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
              O nosso trabalho <span className="text-gradient-brand">fala por nós.</span>
            </>
          }
          subtitle="Cada projeto é uma oportunidade de transformar uma ideia em algo visível, marcante e único."
        />
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
    <section className="border-y border-border bg-charcoal/30 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre nós"
            title={
              <>
                Criatividade que <span className="text-gradient-brand">ganha forma.</span>
              </>
            }
            subtitle="Na VinilArt desenvolvemos soluções de comunicação visual e personalização adaptadas a diferentes projetos. Trabalhamos desde a fase de conceito até à aplicação final, procurando sempre criar soluções com impacto visual e identidade própria."
          />
          <Reveal delay={120}>
            <CtaLink to="/sobre" variant="outline" className="mt-10">
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

export function FinalCta() {
  return (
    <section className="surface-grain relative overflow-hidden bg-ink py-24 lg:py-32">
      <BrushGlow tone="magenta" className="left-[10%] top-[-30%] h-[420px] w-[420px]" />
      <BrushGlow tone="yellow" className="right-[5%] bottom-[-35%] h-[340px] w-[340px] opacity-70" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl">
            Tens uma ideia?
            <br />
            <span className="text-gradient-brand">Vamos dar-lhe forma.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Conta-nos o que tens em mente e falamos sobre a melhor forma de transformar a tua
            ideia num projeto real.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink to="/contactos" hash="pedido">
              Pedir orçamento
            </CtaLink>
            <CtaLink to="/contactos" variant="outline">
              Falar connosco
            </CtaLink>
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
      <Servicos />
      <Processo />
      <PortfolioSection />
      <SportBlock />
      <Sobre />
      <FinalCta />
    </>
  );
}
