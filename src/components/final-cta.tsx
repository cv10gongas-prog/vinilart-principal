import { BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="surface-grain relative overflow-hidden bg-ink py-24 lg:py-32">
      <BrushGlow tone="magenta" className="left-[10%] top-[-30%] h-[420px] w-[420px]" />
      <BrushGlow tone="yellow" className="bottom-[-35%] right-[5%] h-[340px] w-[340px] opacity-70" />
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
