import { createFileRoute } from "@tanstack/react-router";

import { ArrowUpRight, Instagram, MapPin } from "lucide-react";

import { BrandBar } from "@/components/brand";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";

import { contact, mapEmbedUrl } from "@/data/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      {
        title: "Contactos — VinilArt, Oeiras",
      },
      {
        name: "description",
        content:
          "Fala com a VinilArt sobre o teu projeto de design, impressão ou personalização. Rua São Luís 7A, Oeiras.",
      },
      {
        property: "og:title",
        content: "Contactos VinilArt — Oeiras",
      },
      {
        property: "og:description",
        content: "O próximo projeto pode começar aqui. Envia o teu pedido à VinilArt.",
      },
    ],
  }),

  component: ContactosPage,
});

function ContactosPage() {
  return (
    <>
      <PageHero
        eyebrow="Contactos"
        title={
          <>
            O próximo projeto
            <br />
            <span className="text-gradient-brand">pode começar aqui.</span>
          </>
        }
        text="Conta-nos o que tens em mente e partilha connosco o ponto de partida do teu próximo projeto."
      />

      <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="surface-grid pointer-events-none absolute bottom-0 left-0 hidden h-[55%] w-[44%] opacity-14 lg:block"
        />

        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <div>
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <BrandBar className="h-[2px] w-9" />

                  <span className="eyebrow">Vamos falar</span>
                </div>

                <h2 className="mt-6 text-[2.5rem] leading-[0.95] sm:text-5xl">
                  Tens um projeto
                  <br />
                  <span className="text-gradient-brand">em mente?</span>
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-foreground/54">
                  Envia-nos os detalhes essenciais através do formulário ou encontra a VinilArt
                  através dos contactos abaixo.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 border-y border-white/[0.07]">
              <Reveal>
                <div className="flex gap-4 py-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />

                  <div className="min-w-0">
                    <span className="eyebrow text-[0.58rem]">Morada</span>

                    <address className="mt-3 text-base not-italic leading-7 text-foreground/70">
                      {contact.street}
                      <br />

                      {contact.city}
                      <br />

                      {contact.zip}
                    </address>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={70}>
                <div className="flex gap-4 border-t border-white/[0.07] py-6">
                  <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-magenta" />

                  <div className="min-w-0 flex-1">
                    <span className="eyebrow text-[0.58rem]">Instagram</span>

                    <div className="mt-3 flex flex-col">
                      <a
                        href={contact.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-2 text-sm text-foreground/68 transition-colors hover:text-foreground sm:text-base"
                      >
                        <span>{contact.instagram}</span>

                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>

                      <a
                        href={contact.instagramSportUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 border-t border-white/[0.05] py-2 text-sm text-foreground/68 transition-colors hover:text-foreground sm:text-base"
                      >
                        <span>VinilArt Sport — {contact.instagramSport}</span>

                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-8 overflow-hidden border border-white/[0.08]">
                <div className="flex items-center justify-between border-b border-white/[0.07] bg-charcoal/25 px-4 py-3">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-foreground/32">
                    Oeiras
                  </span>

                  <MapPin className="h-3.5 w-3.5 text-cyan" />
                </div>

                <iframe
                  title="Localização da VinilArt em Oeiras"
                  src={mapEmbedUrl}
                  loading="lazy"
                  className="h-[260px] w-full grayscale-[35%] sm:h-[300px] lg:h-[320px]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:sticky lg:top-28">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
