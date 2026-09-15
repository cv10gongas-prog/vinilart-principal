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
    image: "/portfolio/aura-expositor-produtos-01.jpg",
    alt: "Expositor de produtos personalizado no espaço Aura",
    category: "Expositores",
    title: "Expositor integrado no espaço",
    client: "Aura",
    dotTone: "bg-cyan",
    position: "center 48%",
  },
  {
    image: "/portfolio/hasse-sinaletica-stand-01.jpg",
    alt: "Sinalética personalizada Hasse Healthcare",
    category: "Sinalética",
    title: "Identidade aplicada ao stand",
    client: "Hasse Healthcare",
    dotTone: "bg-yellow",
    position: "center 45%",
  },
  {
    image: "/portfolio/holy-moly-fachada.jpg",
    alt: "Comunicação exterior da fachada Holy Moly",
    category: "Fachadas",
    title: "Comunicação exterior",
    client: "Holy Moly",
    dotTone: "bg-magenta",
    position: "center 48%",
  },
  {
    image: "/portfolio/aura-sinaletica-mesa.jpg",
    alt: "Peça de sinalética e comunicação visual Aura",
    category: "Sinalética",
    title: "Detalhes de comunicação",
    client: "Aura",
    dotTone: "bg-cyan",
    position: "center 55%",
  },
];

function ServicosPage() {
  return (
    <>
      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}

      <section className="surface-grain relative overflow-hidden bg-ink pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <div
          aria-hidden="true"
          className="surface-diagonal absolute inset-0 opacity-20"
        />

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
                  Da comunicação de marca à aplicação final, desenvolvemos
                  soluções para espaços, montras, produtos, viaturas e suportes
                  personalizados.
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={180}
              className="hidden lg:block lg:justify-self-end"
            >
              <div className="border-l-2 border-white/[0.12] pl-6 text-sm leading-relaxed text-foreground/45">
                <span className="block font-mono text-xs uppercase tracking-widest text-foreground/30">
                  Capacidade de execução
                </span>

                <p className="mt-2 max-w-[300px] italic text-foreground/70">
                  “Respostas gráficas à medida para diferentes suportes, escalas
                  e objetivos de comunicação.”
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-12 sm:mt-16">
            <div className="overflow-hidden border border-white/[0.1] bg-ink shadow-2xl">
              <div className="relative aspect-[21/8] overflow-hidden bg-black">
                <img
                  src="/portfolio/aura-glow-bar.jpg"
                  alt="Personalização de espaço Aura Glow Bar"
                  loading="eager"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center 44%" }}
                />
              </div>

              <div className="flex flex-col justify-between gap-2 border-t border-white/[0.08] bg-ink/95 px-5 py-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-magenta" />

                  <span className="eyebrow text-xs">
                    Produção e aplicação em contexto real
                  </span>
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
                  Personalização de espaço — Aura
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ÍNDICE */}
      {/* ================================================================ */}

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

      {/* ================================================================ */}
      {/* SERVIÇOS */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1400px] space-y-16 px-5 sm:space-y-24 sm:px-8 lg:space-y-28">
          {/* ============================================================ */}
          {/* 01 LOGOTIPOS 3D */}
          {/* ============================================================ */}

          <article
            id="logotipos-3d"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/urban-obras-letras-3d.png"
                      alt="Letras e logotipo 3D Urban Obras aplicados em parede"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 50%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />

                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Letras e logotipo 3D
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Urban Obras
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">
                      01
                    </span>

                    <span className="h-px w-6 bg-white/[0.15]" />

                    <span className="eyebrow">Identidade e presença</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Logotipos 3D
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Elementos tridimensionais, letras, logotipos e aplicações de
                    identidade para reforçar a presença visual de uma marca num
                    espaço.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 02 DESIGN + 03 IMPRESSÃO */}
          {/* ============================================================ */}

          <div className="grid gap-10 border-b border-white/[0.08] pb-16 sm:pb-20 md:grid-cols-2 md:gap-8 lg:gap-12">
            <article
              id="design"
              className="flex scroll-mt-28 flex-col justify-between"
            >
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/aura-sinaletica-frase.jpg"
                      alt="Sinalética personalizada Aura Glow Bar"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 45%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />

                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Design aplicado
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Aura
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">
                      02
                    </span>

                    <span className="h-px w-5 bg-white/[0.15]" />

                    <span className="eyebrow">Conceito e suportes</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Design
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Desenvolvimento e adaptação gráfica para suportes físicos,
                    sinalética, comunicação visual, identidade corporativa e
                    peças personalizadas.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>

            <article
              id="impressao"
              className="flex scroll-mt-28 flex-col justify-between"
            >
              <Reveal delay={60}>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/hasse-sinaletica-stand-01.jpg"
                      alt="Aplicação gráfica e sinalética Hasse Healthcare"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 44%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />

                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Produção e aplicação
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Hasse Healthcare
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-yellow">
                      03
                    </span>

                    <span className="h-px w-5 bg-white/[0.15]" />

                    <span className="eyebrow">Produção visual</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Impressão
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Soluções de impressão e aplicação gráfica adaptadas a
                    diferentes suportes, escalas, materiais e necessidades de
                    comunicação.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>
          </div>

          {/* ============================================================ */}
          {/* 04 MONTRAS */}
          {/* ============================================================ */}

          <article
            id="decoracao-de-montras"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">
                      04
                    </span>

                    <span className="h-px w-6 bg-white/[0.15]" />

                    <span className="eyebrow">Comunicação exterior</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração
                    <br />
                    de Montras
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Aplicação de vinil, grafismos e elementos de marca em vidro,
                    montras e superfícies comerciais para comunicar diretamente
                    no ponto de venda.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Montras"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60} className="order-1 lg:order-2">
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/aura-vinil-vidro.jpg"
                      alt="Vinil aplicado em vidro no espaço Aura"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 48%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />

                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Vinil aplicado em vidro
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Aura
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 05 INTERIORES */}
          {/* ============================================================ */}

          <article
            id="decoracao-de-interiores"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/aura-espaco-interior.jpg"
                      alt="Personalização visual do espaço interior Aura"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 48%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />

                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Personalização do espaço
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Aura
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">
                      05
                    </span>

                    <span className="h-px w-6 bg-white/[0.15]" />

                    <span className="eyebrow">Espaços e ambientes</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração
                    <br />
                    de Interiores
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Personalização visual de interiores, paredes, expositores e
                    elementos de comunicação para criar espaços coerentes com a
                    identidade da marca.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Interiores"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 06 VIATURAS */}
          {/* ============================================================ */}

          <article
            id="decoracao-de-viaturas"
            className="scroll-mt-28 border-b border-white/[0.08] pb-16 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-yellow">
                      06
                    </span>

                    <span className="h-px w-6 bg-white/[0.15]" />

                    <span className="eyebrow">Comunicação em movimento</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1]">
                    Decoração
                    <br />
                    de Viaturas
                  </h2>

                  <p className="mt-5 text-base leading-7 text-foreground/60 sm:text-lg">
                    Personalização gráfica de automóveis, carrinhas e frotas
                    comerciais para transformar cada deslocação numa extensão
                    visível da marca.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Viaturas"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60} className="order-1 lg:order-2">
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/carrinha-resenha-lateral.png"
                      alt="Personalização gráfica de viatura comercial Resenha WP89 F.C."
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 50%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />

                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Viatura comercial
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Resenha WP89 F.C.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>

          {/* ============================================================ */}
          {/* 07 BRINDES + 08 ESTAMPAGEM */}
          {/* ============================================================ */}

          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
            <article
              id="brindes"
              className="flex scroll-mt-28 flex-col justify-between"
            >
              <Reveal>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/newway-kit-brindes.png"
                      alt="Artigos promocionais personalizados Newway"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 53%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />

                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Artigos promocionais
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      Newway
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-cyan">
                      07
                    </span>

                    <span className="h-px w-5 bg-white/[0.15]" />

                    <span className="eyebrow">Promoção e fidelização</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Brindes
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Artigos promocionais e brindes personalizados para empresas,
                    eventos, equipas e ações de comunicação.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Brindes"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>

            <article
              id="estampagem"
              className="flex scroll-mt-28 flex-col justify-between"
            >
              <Reveal delay={60}>
                <div className="overflow-hidden border border-white/[0.1] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src="/portfolio/house-shine-tshirts.jpg"
                      alt="Vestuário personalizado House Shine"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 45%" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] bg-ink/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-magenta" />

                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-foreground/75">
                        Vestuário personalizado
                      </span>
                    </div>

                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/35">
                      House Shine
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-magenta">
                      08
                    </span>

                    <span className="h-px w-5 bg-white/[0.15]" />

                    <span className="eyebrow">Têxteis e equipas</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Estampagem
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-base">
                    Personalização de vestuário, fardas e peças têxteis
                    adaptadas à identidade de marcas, empresas, equipas e
                    projetos.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <CtaLink
                      to="/portfolio?categoria=Estampagem"
                      variant="outline"
                      className="text-xs"
                    >
                      Ver trabalhos
                    </CtaLink>

                    <CtaLink
                      to="/contactos"
                      hash="pedido"
                      variant="ghost"
                      className="text-xs"
                    >
                      Pedir orçamento
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TRABALHO EM CONTEXTO */}
      {/* ================================================================ */}

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
                  Da produção à{" "}
                  <span className="text-gradient-brand">aplicação final.</span>
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contextWorks.map((work, index) => (
              <Reveal key={`${work.client}-${index}`} delay={index * 50}>
                <div className="overflow-hidden border border-white/[0.08] bg-ink transition-colors hover:border-white/[0.18]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={work.image}
                      alt={work.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: work.position,
                      }}
                    />
                  </div>

                  <div className="border-t border-white/[0.08] bg-ink/90 p-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${work.dotTone}`}
                      />

                      <span className="eyebrow text-xs">{work.category}</span>
                    </div>

                    <p className="mt-1.5 font-display text-sm font-bold uppercase tracking-wide text-foreground/90">
                      {work.title}
                    </p>

                    <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-foreground/40">
                      {work.client}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA FINAL */}
      {/* ================================================================ */}

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
                Que ideia queres pôr{" "}
                <span className="text-gradient-brand">em prática?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-foreground/60 sm:mt-7 sm:text-lg">
                Conta-nos o que precisas e falamos sobre o teu projeto.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-4 lg:flex-col lg:items-start lg:justify-self-end">
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
