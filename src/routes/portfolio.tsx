import { createFileRoute } from "@tanstack/react-router";

import { BrandBar } from "@/components/brand";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title:
          "Portefólio — Trabalhos de comunicação visual | VinilArt",
      },
      {
        name: "description",
        content:
          "Galeria de trabalhos VinilArt: viaturas, montras, interiores, estampagem, logotipos 3D, impressão e brindes.",
      },
      {
        property: "og:title",
        content:
          "Portefólio VinilArt — Ideias que ganham forma",
      },
      {
        property: "og:description",
        content:
          "Vê os trabalhos de personalização, impressão e decoração da VinilArt.",
      },
    ],
  }),

  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portefólio"
        title={
          <>
            Ideias que
            <br />

            <span className="text-gradient-brand">
              ganham forma.
            </span>
          </>
        }
        text="Explora diferentes áreas do trabalho VinilArt e descobre como cada ideia pode ganhar uma presença própria."
      />

      <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="surface-grid pointer-events-none absolute right-0 top-0 hidden h-[600px] w-[42%] opacity-14 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-7 border-b border-white/[0.07] pb-8 sm:grid-cols-[1fr_auto] sm:items-end lg:pb-10">
              <div>
                <span className="eyebrow">
                  Trabalhos
                </span>

                <h2 className="mt-5 text-[2.4rem] leading-[0.94] sm:text-5xl">
                  Cada projeto
                  <br />

                  <span className="text-gradient-brand">
                    tem a sua forma.
                  </span>
                </h2>
              </div>

              <div className="max-w-sm">
                <BrandBar className="mb-4 h-[2px] w-12" />

                <p className="text-sm leading-6 text-foreground/50">
                  Filtra a galeria por área para
                  encontrares o tipo de trabalho
                  que procuras.
                </p>
              </div>
            </div>
          </Reveal>

          <PortfolioGrid />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
