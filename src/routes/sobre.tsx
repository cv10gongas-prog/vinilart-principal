import { createFileRoute } from "@tanstack/react-router";

import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/site";

const values = [
  { title: "Criatividade", text: "Procuramos soluções visuais com identidade própria." },
  { title: "Atenção ao detalhe", text: "Cada acabamento conta para o resultado final." },
  { title: "Soluções adaptadas", text: "Trabalhamos a resposta certa para cada projeto." },
  { title: "Impacto visual", text: "Comunicação que se vê, reconhece e permanece." },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a VinilArt — Comunicação visual e personalização" },
      {
        name: "description",
        content:
          "A VinilArt desenvolve soluções de comunicação visual e personalização, do conceito à aplicação final. Oeiras, Portugal.",
      },
      { property: "og:title", content: "Sobre a VinilArt — Criamos impacto visual" },
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
        eyebrow="Sobre nós"
        title="Mais do que produzir. Criamos impacto visual."
        text="Na VinilArt desenvolvemos soluções de comunicação visual e personalização adaptadas a diferentes projetos. Trabalhamos desde a fase de conceito até à aplicação final, procurando sempre criar soluções com impacto visual e identidade própria."
      />

      <section className="border-b border-border bg-ink py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <MediaSlot
              label="Fotografia da equipa, oficina ou produção VinilArt"
              ratio="4 / 5"
              tone="magenta"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="O que nos move"
              title={
                <>
                  Criatividade que <span className="text-gradient-brand">ganha forma.</span>
                </>
              }
            />
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="bg-charcoal/40 p-6">
                  <h3 className="text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-charcoal/30 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Como trabalhamos"
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

      <FinalCta />
    </>
  );
}
