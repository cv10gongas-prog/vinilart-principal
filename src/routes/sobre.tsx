import { createFileRoute } from "@tanstack/react-router";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      {
        title: "Sobre a VinilArt — Soluções de Comunicação Visual",
      },
      {
        name: "description",
        content:
          "Saber fazer... como deve ser. Da ideia à aplicação final, a VinilArt desenvolve soluções de comunicação visual para marcas, espaços e viaturas. Oeiras, Portugal.",
      },
      {
        property: "og:title",
        content: "Sobre a VinilArt — Saber fazer... como deve ser.",
      },
      {
        property: "og:description",
        content:
          "Soluções de comunicação visual e personalização para marcas, empresas, espaços e projetos personalizados.",
      },
    ],
  }),

  component: SobrePage,
});

const heroShowcase = [
  {
    image: "/portfolio/carrinha-jardins-de-oeiras.jpg",
    alt: "Personalização gráfica de viatura comercial Jardins de Oeiras",
    category: "Decoração de viaturas",
    title: "Viatura comercial",
    dotTone: "bg-yellow",
  },
  {
    image: "/portfolio/urban-obras-letras-3d.png",
    alt: "Aplicação de logótipo e letras em relevo Urban Obras",
    category: "Logotipos 3D",
    title: "Identidade em relevo",
    dotTone: "bg-magenta",
  },
  {
    image: "/portfolio/clinica-veterinaria-queijas.jpg",
    alt: "Comunicação exterior e montra Clínica Veterinária de Queijas",
    category: "Decoração de montras",
    title: "Fachada comercial",
    dotTone: "bg-cyan",
  },
];

const areas = [
  {
    num: "01",
    title: "Design",
    desc: "Criação e adaptação gráfica pensada para suportes físicos e diferentes dimensões.",
  },
  {
    num: "02",
    title: "Impressão",
    desc: "Produção gráfica rigorosa para pequenas e grandes escalas de aplicação.",
  },
  {
    num: "03",
    title: "Logotipos 3D",
    desc: "Elementos corpóreos em relevo para identificação e destaque visual de espaços.",
  },
  {
    num: "04",
    title: "Decoração de montras",
    desc: "Comunicação exterior, personalização de fachadas e visibilidade comercial.",
  },
  {
    num: "05",
    title: "Decoração de interiores",
    desc: "Murais gráficos, paredes personalizadas e ambientação visual de espaços.",
  },
  {
    num: "06",
    title: "Decoração de viaturas",
    desc: "Personalização gráfica comercial para viaturas e frotas de empresas.",
  },
  {
    num: "07",
    title: "Brindes",
    desc: "Artigos e suportes promocionais com identificação personalizada de marca.",
  },
  {
    num: "08",
    title: "Estampagem",
    desc: "Personalização de vestuário e têxteis para marcas, equipas e empresas.",
  },
];

const steps = [
  {
    num: "01",
    title: "Ideia",
    text: "Perceber o objetivo e a imagem pretendida.",
  },
  {
    num: "02",
    title: "Preparação",
    text: "Adaptar a solução gráfica ao suporte e ao projeto.",
  },
  {
    num: "03",
    title: "Produção",
    text: "Preparar os elementos necessários para o trabalho.",
  },
  {
    num: "04",
    title: "Aplicação / Resultado",
    text: "Dar forma final ao projeto.",
  },
];

function SobrePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="surface-grain relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <div aria-hidden="true" className="surface-diagonal absolute inset-0 opacity-20" />

        <div
          aria-hidden="true"
          className="surface-grid absolute inset-y-0 right-0 hidden w-[44%] opacity-15 lg:block"
        />

        <BrushGlow
          tone="magenta"
          className="right-[-30%] top-[-20%] h-[440px] w-[440px] opacity-30 sm:right-[-10%]"
        />

        <BrushGlow
          tone="cyan"
          className="bottom-[-40%] left-[-28%] h-[420px] w-[420px] opacity-25 sm:left-[-10%]"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <BrandBar className="h-[2px] w-9 sm:w-10" />
              <span className="eyebrow">Sobre a VinilArt</span>
            </div>
          </Reveal>

          <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Reveal delay={60}>
                <h1 className="text-[2.9rem] leading-[0.93] min-[400px]:text-[3.4rem] sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
                  Saber fazer…
                  <br />
                  <span className="text-gradient-brand">como deve ser.</span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-[640px] text-[0.98rem] leading-7 text-foreground/60 sm:mt-8 sm:text-lg sm:leading-8">
                  Da ideia à aplicação final, a VinilArt desenvolve soluções de comunicação visual
                  para marcas, empresas, espaços e projetos personalizados.
                </p>
              </Reveal>
            </div>

            <Reveal delay={180} className="hidden lg:block lg:justify-self-end">
              <div className="border-l-2 border-white/[0.12] pl-6 text-sm leading-relaxed text-foreground/45">
                <span className="block font-mono text-xs uppercase tracking-widest text-foreground/30">
                  Identidade VinilArt
                </span>
                <p className="mt-2 max-w-[300px] italic text-foreground/70">
                  “Foco na execução, fidelidade aos suportes e acabamento rigoroso em cada
                  trabalho.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* Composição editorial de 3 trabalhos reais diferentes */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {heroShowcase.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="group overflow-hidden border border-white/[0.08] bg-ink/60 transition-colors hover:border-white/[0.16]">
                  <div className="overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={idx === 0 ? "eager" : "lazy"}
                      className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-64 lg:h-72"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${item.dotTone}`} />
                      <span className="font-display text-[0.78rem] uppercase tracking-wider text-foreground/80 font-bold">
                        {item.category}
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BLOCO O QUE FAZEMOS */}
      <section className="border-t border-white/[0.08] bg-charcoal/30 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <BrandBar className="h-[2px] w-9" />
                  <span className="eyebrow">Áreas de atuação</span>
                </div>

                <h2 className="mt-5 text-[2.5rem] leading-[0.94] min-[400px]:text-[2.8rem] sm:text-5xl lg:text-6xl">
                  O que fazemos.
                  <br />
                  <span className="text-gradient-brand">Soluções reais.</span>
                </h2>
              </div>

              <p className="text-base leading-7 text-foreground/58 sm:text-lg sm:leading-8">
                Das necessidades gráficas do dia a dia a projetos integrados de comunicação visual,
                desenvolvemos soluções adaptadas a cada suporte e escala de intervenção.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 lg:mt-20 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
            {/* 8 áreas em grelha editorial */}
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {areas.map((area, idx) => (
                <Reveal
                  key={area.num}
                  delay={idx * 35}
                  className="group py-5 sm:py-6 transition-colors hover:bg-white/[0.015]"
                >
                  <div className="grid gap-2 sm:grid-cols-[60px_1fr_1.4fr] sm:items-baseline sm:gap-6">
                    <span className="font-mono text-xs font-bold text-foreground/30 transition-colors group-hover:text-magenta">
                      {area.num}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground group-hover:text-white">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-foreground/50">{area.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Destaque fotográfico de apoio: Estampagem / Vestuário */}
            <Reveal delay={150} className="sticky top-28 hidden lg:block">
              <div className="overflow-hidden border border-white/[0.1] bg-ink">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src="/portfolio/house-shine-tshirts.jpg"
                    alt="Personalização de vestuário House Shine"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>

                <div className="p-5 border-t border-white/[0.08] bg-ink/90">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                    <span className="eyebrow text-xs">Produção e personalização</span>
                  </div>

                  <p className="mt-2 font-display text-sm font-bold uppercase tracking-wider text-foreground/90">
                    Personalização de vestuário
                  </p>

                  <p className="mt-1 text-xs text-foreground/45">
                    Aplicação gráfica em vestuário profissional para equipas e empresas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. BLOCO DA IDEIA AO RESULTADO */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="surface-grid absolute inset-y-0 right-0 hidden w-[45%] opacity-15 lg:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <BrandBar className="h-[2px] w-9" />
              <span className="eyebrow">Método de trabalho</span>
            </div>

            <h2 className="mt-5 max-w-[800px] text-[2.35rem] leading-[0.94] min-[400px]:text-[2.8rem] sm:text-5xl lg:text-6xl">
              Da ideia ao <span className="text-gradient-brand">resultado.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/55 sm:text-lg">
              Um percurso direto e sem intermediários, assegurando que o projeto pensado se traduz
              na aplicação certa.
            </p>
          </Reveal>

          <div className="mt-12 lg:mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            {/* Processo editorial vertical com linha conectora */}
            <ol className="relative space-y-8 sm:space-y-10">
              <div
                aria-hidden="true"
                className="absolute bottom-4 left-[19px] top-4 w-px bg-white/[0.12]"
              />

              {steps.map((step, idx) => (
                <Reveal
                  as="li"
                  key={step.num}
                  delay={idx * 60}
                  className="relative flex items-start gap-6 sm:gap-8"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.16] bg-ink font-mono text-xs font-bold text-foreground/75 shadow-lg">
                    {step.num}
                  </span>

                  <div className="pt-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/55">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Fotografia de apoio: Mural Simply Fit */}
            <Reveal delay={120}>
              <div className="group overflow-hidden border border-white/[0.1] bg-ink shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/portfolio/simply-fit-mural-ginasio.jpg"
                    alt="Mural gráfico de parede interior Simply Fit"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="border-t border-white/[0.08] p-5 sm:p-6 bg-ink/95">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="eyebrow text-xs">Aplicação em contexto real</span>
                      <p className="mt-1 font-display text-base font-bold uppercase tracking-wider text-foreground">
                        Decoração gráfica de parede interior
                      </p>
                    </div>

                    <span className="font-mono text-xs text-foreground/35 uppercase tracking-wider shrink-0">
                      Simply Fit
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. BLOCO FINAL (CTA) */}
      <section className="surface-grain relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32 border-t border-white/[0.08]">
        <BrushGlow
          tone="magenta"
          className="left-[-35%] top-[-35%] h-[520px] w-[520px] opacity-40 sm:left-[-5%] sm:h-[620px] sm:w-[620px]"
        />

        <BrushGlow
          tone="yellow"
          className="bottom-[-60%] right-[-40%] h-[460px] w-[460px] opacity-25 sm:right-[-5%]"
        />

        <div
          aria-hidden="true"
          className="surface-grid absolute inset-y-0 right-0 hidden w-1/2 opacity-18 md:block"
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <BrandBar className="mb-6 h-[2px] w-16 sm:mb-10 sm:w-24" />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <Reveal>
              <span className="eyebrow">Vamos conversar</span>

              <h2 className="mt-4 max-w-[850px] text-[2.35rem] leading-[0.93] min-[400px]:text-[2.75rem] sm:mt-6 sm:text-6xl lg:text-[4.6rem]">
                Tens uma ideia <span className="text-gradient-brand">em mente?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
                Conta-nos o que precisas e falamos sobre a melhor forma de dar vida ao projeto.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 lg:items-start lg:justify-self-end">
                <CtaLink
                  to="/contactos"
                  hash="pedido"
                  variant="primary"
                  className="w-full sm:w-auto sm:min-w-[210px]"
                >
                  Pedir orçamento
                </CtaLink>

                <CtaLink
                  to="/portfolio"
                  variant="outline"
                  className="w-full sm:w-auto sm:min-w-[210px]"
                >
                  Ver trabalhos
                </CtaLink>

                <div className="mt-3 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-foreground/28 sm:text-xs">
                  <span>VinilArt</span>
                  <span className="h-1 w-1 rounded-full bg-magenta" />
                  <span>Oeiras</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
