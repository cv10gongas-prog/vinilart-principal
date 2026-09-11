import { createFileRoute } from "@tanstack/react-router";

import { BrandBar } from "@/components/brand";
import { FinalCta } from "@/components/final-cta";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portefólio — Trabalhos realizados | VinilArt",
      },
      {
        name: "description",
        content:
          "Galeria de trabalhos reais da VinilArt: viaturas, montras, interiores, estampagem, sinalética e brindes.",
      },
      {
        property: "og:title",
        content: "Portefólio VinilArt — Trabalhos realizados",
      },
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
      <section className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div
          aria-hidden="true"
          className="surface-grid pointer-events-none absolute right-0 top-0 hidden h-[450px] w-[40%] opacity-12 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between sm:pb-8">
              <div>
                <div className="flex items-center gap-3">
                  <BrandBar className="h-[2px] w-8" />
                  <span className="eyebrow">Portefólio</span>
                </div>

                <h1 className="mt-3 text-3xl font-display font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Trabalhos realizados
                </h1>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-foreground/60 sm:text-base">
                Projetos reais de personalização, decoração e comunicação visual desenvolvidos pela
                VinilArt.
              </p>
            </div>
          </Reveal>

          <PortfolioGrid />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
