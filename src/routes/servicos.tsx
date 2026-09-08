import { createFileRoute } from "@tanstack/react-router";

import { CtaLink } from "@/components/cta-button";
import { FinalCta } from "@/components/final-cta";
import { MediaSlot } from "@/components/media-slot";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Design, Impressão e Personalização | VinilArt" },
      {
        name: "description",
        content:
          "Logotipos 3D, design, impressão, decoração de montras, interiores e viaturas, brindes e estampagem. Soluções VinilArt em Oeiras.",
      },
      { property: "og:title", content: "Serviços VinilArt — Soluções de comunicação visual" },
      {
        property: "og:description",
        content: "Soluções pensadas para dar visibilidade às ideias. Conhece os serviços VinilArt.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções pensadas para dar visibilidade às ideias."
        text="Cada projeto tem um contexto próprio. Trabalhamos o serviço certo para o suporte, o espaço e o resultado pretendido."
      />

      <div className="bg-ink">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={cn(
              "scroll-mt-24 border-b border-border py-20 lg:py-28",
              i % 2 === 1 && "bg-charcoal/30",
            )}
          >
            <div
              className={cn(
                "mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20",
              )}
            >
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <MediaSlot label={service.image} ratio="4 / 3" tone={service.tone} />
              </Reveal>
              <Reveal delay={100} className={cn(i % 2 === 1 && "lg:order-1")}>
                <div className="flex items-center gap-3">
                  <span className="bar-brand h-[2px] w-8" />
                  <span className="eyebrow">
                    {String(i + 1).padStart(2, "0")} · Serviço
                  </span>
                </div>
                <h2 className="mt-5 text-4xl sm:text-5xl">{service.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
                  {service.text}
                </p>
                <CtaLink to="/contactos" hash="pedido" variant="outline" className="mt-8">
                  Pedir orçamento
                </CtaLink>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <FinalCta />
    </>
  );
}
