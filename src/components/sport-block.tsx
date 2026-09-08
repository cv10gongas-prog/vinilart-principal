import { BrushGlow, Wordmark } from "@/components/brand";
import { CtaAnchor, CtaLink } from "@/components/cta-button";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SPORT_STORE_URL, sportServices } from "@/data/site";

export function SportBlock() {
  return (
    <section
      id="vinilart-sport"
      className="surface-grain relative scroll-mt-24 overflow-hidden border-y border-border bg-ink py-24 lg:py-32"
    >
      <div className="surface-diagonal absolute inset-0 opacity-70" aria-hidden="true" />
      <BrushGlow tone="magenta" className="left-[-10%] top-[-10%] h-[420px] w-[420px]" />
      <BrushGlow tone="cyan" className="bottom-[-15%] right-[-8%] h-[460px] w-[460px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="bar-brand h-[2px] w-8" />
            <span className="eyebrow text-yellow">VinilArt Sport</span>
          </div>
          <Wordmark sport className="mt-6 text-3xl sm:text-4xl" />
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Personalizamos a tua <span className="text-gradient-brand">paixão.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Uma vertente da VinilArt dedicada ao universo desportivo, criada para atletas,
            equipas, clubes e adeptos.
          </p>

          <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
            {sportServices.map((s) => (
              <li
                key={s}
                className="bg-charcoal/70 px-5 py-4 text-sm font-medium text-foreground/85 transition-colors hover:bg-charcoal"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaAnchor href={SPORT_STORE_URL}>Conhecer VinilArt Sport</CtaAnchor>
            <CtaLink to="/contactos" hash="pedido" variant="outline">
              Pedir orçamento
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <MediaSlot
            label="Equipamento, caneleiras ou bandeiras personalizadas VinilArt Sport"
            ratio="4 / 5"
            tone="yellow"
          />
          <div className="bar-brand absolute -bottom-3 left-8 right-8 h-[3px]" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
