import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { BrandBar, BrushGlow } from "@/components/brand";
import { CtaLink } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      {
        title: "Serviços — Soluções de Comunicação Visual | VinilArt",
      },
      {
        name: "description",
        content:
          "Soluções visuais para dar forma às tuas ideias. Logotipos 3D, design, impressão, montras, interiores, viaturas, brindes e estampagem. Oeiras.",
      },
      {
        property: "og:title",
        content: "Serviços VinilArt — Soluções de Comunicação Visual",
      },
      {
        property: "og:description",
        content:
          "Da comunicação de marca à aplicação final, soluções para espaços, viaturas, montras e suportes personalizados.",
      },
    ],
  }),

  component: ServicosPage,
});

const serviceLinks = [
  { slug: "logotipos-3d", num: "01", name: "Logotipos 3D" },
  { slug: "design", num: "02", name: "Design" },
  { slug: "impressao", num: "03", name: "Impressão" },
  { slug: "decoracao-de-montras", num: "04", name: "Montras" },
  { slug: "decoracao-de-interiores", num: "05", name: "Interiores" },
  { slug: "decoracao-de-viaturas", num: "06", name: "Viaturas" },
  { slug: "brindes", num: "07", name: "Brindes" },
  { slug: "estampagem", num: "08", name: "Estampagem" },
];

const contextWorks = [
  {
    image: "/portfolio/mellert-kitchen-montra.jpg",
    alt: "Comunicação exterior e decoração de montra Mellert Kitchen",
    category: "Montras",
    title: "Comunicação exterior de montra",
    client: "Mellert Kitchen",
    aspect: "aspect-[16/10]",
    dotTone: "bg-cyan",
  },
  {
    image: "/portfolio/carrinha-jardins-de-oeiras.jpg",
    alt: "Personalização de viatura comercial Jardins de Oeiras",
    category: "Viaturas",
    title: "Personalização de viatura",
    client: "Jardins de Oeiras",
    aspect: "aspect-[4/3]",
    dotTone: "bg-yellow",
  },
  {
    image: "/portfolio/espaco-gaming-mural-parede.jpg",
    alt: "Decoração gráfica de parede interior Espaço Gaming",
    category: "Interiores",
    title: "Decoração gráfica de parede",
    client: "Espaço Gaming",
    aspect: "aspect-[4/3]",
    dotTone: "bg-magenta",
  },
  {
    image: "/portfolio/newway-lanyard-badge.png",
    alt: "Lanyards e fitas personalizadas Newway",
    category: "Brindes",
    title: "Lanyards e identificação",
    client: "Newway",
    aspect: "aspect-[16/10]",
    dotTone: "bg-cyan",
  },
];

function ServicosPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="surface-grain relative overflow-hidden bg-ink pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
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
              <span className="eyebrow">Serviços</span>
            </div>
          </Reveal>

          <div className="mt-7 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal delay={60}>
                <h1 className="text-[2.75rem] leading-[0.93] min-[400px]:text-[3.2rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.1rem]">
                  Soluções visuais para dar forma às{" "}
                  <span className="text-gradient-brand">tuas ideias.</span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-[640px] text-[0.98rem] leading-7 text-foreground/60 sm:mt-8 sm:text-lg sm:leading-8">
                  Da comunicação de marca à aplicação final, desenvolvemos soluções para espaços,
                  viaturas, montras, produtos e suportes personalizados.
                </p>
              </Reveal>
            </div>

            <Reveal delay={180} className="hidden lg:block lg:justify-self-end">
              <div className="border-l-2 border-white/[0.12] pl-6 text-sm leading-relaxed text-foreground/45">
                <span className="block font-mono text-xs uppercase tracking-widest text-foreground/30">
                  Capacidade de Execução
                </span>
                <p className="mt-2 max-w-[300px] italic text-foreground/70">
                  “Respostas gráficas à medida para diferentes suportes, escalas e objetivos de
                  comunicação.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* Fotografia real hero: Explicandum (Comunicação exterior e montra) */}
          <Reveal delay={200} className="mt-12 sm:mt-16">
            <div className="group overflow-hidden border border-white/[0.1] bg-ink/70 shadow-2xl">
              <div className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden bg-black">
                <img
                  src="/portfolio/explicandum-fachada-montra.jpg"
                  alt="Comunicação exterior e decoração de montra comercial Explicandum"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/[0.08] px-5 py-4 bg-ink/95 gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                  <span className="eyebrow text-xs">Produção e aplicação em contexto real</span>
                </div>

                <span className="font-mono text-xs text-foreground/40 uppercase tracking-wider">
                  Comunicação exterior & montras — Explicandum
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ÍNDICE RÁPIDO DE ÁREAS */}
      <section className="border-y border-white/[0.08] bg-charcoal/30">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex items-center gap-6 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-foreground/30">
              Áreas
            </span>

            <span className="h-4 w-px shrink-0 bg-white/[0.1]" />

            {serviceLinks.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="group flex shrink-0 items-center gap-2 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-foreground/50 transition-colors hover:text-foreground"
              >
                <span className="font-mono text-[0.65rem] text-foreground/25 transition-colors group-hover:text-magenta">
                  {item.num}
                </span>
                {item.name}
              </a>
            ))}

            <ArrowDown className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-foreground/25 lg:block" />
          </div>
        </div>
      </section>

      {/* 2. ESTRUTURA DOS SERVIÇOS — COMPOSIÇÃO EDITORIAL VARIADA */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 space-y-16 sm:space-y-24 lg:space-y-28">
          {/* 01. LOGOTIPOS 3D — Bloco horizontal destacado (Imagem Esquerda / Texto Direita) */}
          <article
            id="logotipos-3d"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="group overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/urban-obras-letras-3d.png"
                      alt="Logótipo e letras em relevo Urban Obras"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Identidade em relevo
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      Urban Obras
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">01</span>
                    <span className="h-px w-6 bg-white/[0.15]" />
                    <span className="eyebrow">Identidade e Presença</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Logotipos 3D
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Elementos tridimensionais e letras em relevo para dar presença e destaque visual
                    à identidade de uma marca ou espaço comercial.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink to="/portfolio" variant="outline" className="text-xs">
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* 02. DESIGN & 03. IMPRESSÃO — Duo editorial compacto em 2 colunas */}
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12 border-b border-white/[0.08] pb-16 sm:pb-20">
            {/* 02. DESIGN */}
            <article id="design" className="scroll-mt-28 flex flex-col justify-between group">
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/chateaubiz-placa-acrilico.png"
                      alt="Placa de identificação corporativa ChâteauBIZ"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Identificação corporativa
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      ChâteauBIZ
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">02</span>
                    <span className="h-px w-5 bg-white/[0.15]" />
                    <span className="eyebrow">Conceito e Suportes</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Design
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Desenvolvimento e adaptação gráfica para suportes físicos, placas de
                    identificação corporativa e peças de comunicação de marca.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink to="/portfolio" variant="outline" className="text-xs">
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>

            {/* 03. IMPRESSÃO */}
            <article id="impressao" className="scroll-mt-28 flex flex-col justify-between group">
              <Reveal delay={60}>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/strix-birdtrack-equipamento.png"
                      alt="Aplicação gráfica em equipamento técnico STRIX Birdtrack"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Aplicação em equipamento
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      STRIX Birdtrack
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-yellow">03</span>
                    <span className="h-px w-5 bg-white/[0.15]" />
                    <span className="eyebrow">Produção Visual</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Impressão
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Soluções de impressão e aplicação gráfica adaptadas a diferentes suportes,
                    escalas, equipamentos técnicos e materiais de comunicação.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink to="/portfolio" variant="outline" className="text-xs">
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>
          </div>

          {/* 04. DECORAÇÃO DE MONTRAS — Bloco horizontal (Texto Esquerda / Imagem Direita) */}
          <article
            id="decoracao-de-montras"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">04</span>
                    <span className="h-px w-6 bg-white/[0.15]" />
                    <span className="eyebrow">Comunicação Exterior</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração de Montras
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Comunicação visual e personalização de fachadas comerciais para valorizar a
                    presença exterior e criar impacto imediato no ponto de venda.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Montras"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60} className="order-1 lg:order-2">
                <div className="group overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/clinica-veterinaria-queijas.jpg"
                      alt="Comunicação exterior e montra Clínica Veterinária de Queijas"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Fachada comercial
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      Clínica Veterinária de Queijas
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* 05. DECORAÇÃO DE INTERIORES — Bloco horizontal (Imagem Esquerda / Texto Direita) */}
          <article
            id="decoracao-de-interiores"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="group overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/simply-fit-mural-ginasio.jpg"
                      alt="Decoração gráfica de parede interior Simply Fit"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Mural gráfico de parede
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      Simply Fit
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">05</span>
                    <span className="h-px w-6 bg-white/[0.15]" />
                    <span className="eyebrow">Espaços e Ambientes</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração de Interiores
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Aplicações visuais e murais gráficos para transformar paredes e valorizar
                    espaços comerciais, profissionais, desportivos e institucionais.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Interiores"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* 06. DECORAÇÃO DE VIATURAS — Bloco horizontal (Texto Esquerda / Imagem Direita) */}
          <article
            id="decoracao-de-viaturas"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-yellow">06</span>
                    <span className="h-px w-6 bg-white/[0.15]" />
                    <span className="eyebrow">Comunicação em Movimento</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração de Viaturas
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Personalização gráfica de veículos comerciais e frotas de empresas,
                    transformando cada deslocação numa oportunidade contínua de comunicação.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Viaturas"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60} className="order-1 lg:order-2">
                <div className="group overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/carrinha-resenha-lateral.png"
                      alt="Personalização gráfica de viatura comercial Resenha WP89"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Viatura comercial
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      Resenha WP89 F.C.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* 07. BRINDES & 08. ESTAMPAGEM — Duo editorial compacto em 2 colunas */}
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
            {/* 07. BRINDES */}
            <article id="brindes" className="scroll-mt-28 flex flex-col justify-between group">
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/newway-kit-brindes.png"
                      alt="Kit de artigos promocionais personalizados Newway"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Artigos promocionais
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      Newway
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">07</span>
                    <span className="h-px w-5 bg-white/[0.15]" />
                    <span className="eyebrow">Promoção e Fidelização</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Brindes
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Artigos personalizados para marcas, empresas, eventos e equipas, fortalecendo o
                    reconhecimento corporativo em qualquer suporte.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Brindes"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>

            {/* 08. ESTAMPAGEM */}
            <article id="estampagem" className="scroll-mt-28 flex flex-col justify-between group">
              <Reveal delay={60}>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/house-shine-tshirts.jpg"
                      alt="Personalização de vestuário House Shine"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-foreground/75 font-semibold">
                        Vestuário personalizado
                      </span>
                    </div>
                    <span className="font-mono text-[0.65rem] text-foreground/35 uppercase tracking-wider">
                      House Shine
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">08</span>
                    <span className="h-px w-5 bg-white/[0.15]" />
                    <span className="eyebrow">Têxteis e Equipas</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Estampagem
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Personalização de vestuário profissional, fardas e têxteis para equipas,
                    empresas e projetos que exigem rigor de imagem.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Estampagem"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>
                    <CtaLink to="/contactos" hash="pedido" variant="ghost" className="text-xs">
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* 3. BLOCO O TRABALHO EM CONTEXTO (VARIEDADE DE SUPORTES REAIS) */}
      <section className="border-y border-white/[0.08] bg-charcoal/25 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <BrandBar className="h-[2px] w-9" />
                  <span className="eyebrow">O trabalho em contexto</span>
                </div>

                <h2 className="mt-4 max-w-[750px] text-[2.4rem] leading-[0.94] sm:text-5xl lg:text-6xl">
                  Da produção à <span className="text-gradient-brand">aplicação final.</span>
                </h2>
              </div>

              <Link
                to="/portfolio"
                className="group flex w-fit items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-foreground/55 transition-colors hover:text-cyan"
              >
                Ver portefólio completo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* 4 fotografias reais em formatos diferenciados */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contextWorks.map((work, index) => (
              <Reveal key={work.client} delay={index * 50}>
                <div className="group overflow-hidden border border-white/[0.08] bg-ink transition-colors hover:border-white/[0.18]">
                  <div className={`relative ${work.aspect} overflow-hidden bg-black`}>
                    <img
                      src={work.image}
                      alt={work.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 border-t border-white/[0.08] bg-ink/90">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${work.dotTone}`} />
                      <span className="eyebrow text-xs">{work.category}</span>
                    </div>

                    <p className="mt-1.5 font-display text-sm font-bold uppercase tracking-wide text-foreground/90">
                      {work.title}
                    </p>

                    <p className="mt-1 font-mono text-[0.65rem] text-foreground/40 uppercase tracking-wider">
                      {work.client}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOCO FINAL (CTA) */}
      <section className="surface-grain relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
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
                Que ideia queres pôr <span className="text-gradient-brand">em prática?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
                Conta-nos o que precisas e falamos sobre o teu projeto.
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
                  Ver portefólio
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
