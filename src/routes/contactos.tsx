import { createFileRoute } from "@tanstack/react-router";

import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

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
          "Fala com a VinilArt sobre o teu projeto de design, impressão ou personalização. Contacto direto: +351 913 447 705 ou geral@vinilart.pt.",
      },
      {
        property: "og:title",
        content: "Contactos VinilArt — Oeiras",
      },
      {
        property: "og:description",
        content:
          "O próximo projeto pode começar aqui. Contacta-nos diretamente por telefone, email ou formulário.",
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

        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
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
                  Contacta-nos diretamente por telefone ou e-mail, preenche o formulário para um
                  pedido detalhado ou visita o nosso espaço em Oeiras.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 border-y border-white/[0.07]">
              {/* Telefone direto */}
              <Reveal>
                <div className="flex gap-4 py-5 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan/25 bg-cyan/10 text-cyan">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="eyebrow text-[0.58rem]">Telefone direto</span>

                    <a
                      href={contact.phoneUrl}
                      className="mt-2 block font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-cyan sm:text-2xl"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* E-mails oficiais */}
              <Reveal delay={40}>
                <div className="flex gap-4 border-t border-white/[0.07] py-5 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan/25 bg-cyan/10 text-cyan">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="eyebrow text-[0.58rem]">E-mails oficiais</span>

                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="text-xs uppercase tracking-wider text-foreground/45">
                          Geral:
                        </span>
                        <a
                          href={contact.emailGeneralUrl}
                          className="font-medium text-foreground transition-colors hover:text-cyan"
                        >
                          {contact.emailGeneral}
                        </a>
                      </div>

                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="text-xs uppercase tracking-wider text-foreground/45">
                          Suporte:
                        </span>
                        <a
                          href={contact.emailSupportUrl}
                          className="font-medium text-foreground/80 transition-colors hover:text-cyan"
                        >
                          {contact.emailSupport}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Morada */}
              <Reveal delay={70}>
                <div className="flex gap-4 border-t border-white/[0.07] py-5 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-foreground/60">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="eyebrow text-[0.58rem]">Morada</span>

                    <address className="mt-2 text-sm not-italic leading-6 text-foreground/70 sm:text-base">
                      {contact.street}
                      <br />
                      {contact.zip}
                    </address>
                  </div>
                </div>
              </Reveal>

              {/* Instagram */}
              <Reveal delay={100}>
                <div className="flex gap-4 border-t border-white/[0.07] py-5 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-magenta/25 bg-magenta/10 text-magenta">
                    <Instagram className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="eyebrow text-[0.58rem]">Redes Sociais</span>

                    <div className="mt-2 flex flex-col divide-y divide-white/[0.05]">
                      <a
                        href={contact.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground sm:text-base"
                      >
                        <span>{contact.instagram}</span>

                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>

                      <a
                        href={contact.instagramSportUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground sm:text-base"
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
