import { createFileRoute } from "@tanstack/react-router";

import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portefólio — Trabalhos de comunicação visual | VinilArt" },
      {
        name: "description",
        content:
          "Galeria de trabalhos VinilArt: viaturas, montras, interiores, estampagem, logotipos 3D, impressão e brindes.",
      },
      { property: "og:title", content: "Portefólio VinilArt — Ideias que ganham forma" },
      {
        property: "og:description",
        content: "Vê os trabalhos de personalização, impressão e decoração da VinilArt.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Ideias que ganham forma."
        text="Cada projeto é uma oportunidade de transformar uma ideia em algo visível, marcante e único."
      />
      <section className="bg-ink py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <PortfolioGrid />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
