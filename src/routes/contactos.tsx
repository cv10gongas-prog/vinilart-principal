import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { contact, mapEmbedUrl } from "@/data/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — VinilArt, Oeiras" },
      {
        name: "description",
        content:
          "Fala com a VinilArt sobre o teu projeto de design, impressão ou personalização. Rua São Luís 7A, Oeiras.",
      },
      { property: "og:title", content: "Contactos VinilArt — Oeiras" },
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
        title="O próximo projeto pode começar aqui."
        text="Vamos falar sobre o teu projeto. Preenche o pedido e diz-nos o que tens em mente."
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Vamos falar sobre o teu projeto.</h2>

            <div className="mt-10 flex flex-col gap-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                <div className="min-w-0">
                  <span className="eyebrow">Morada</span>
                  <address className="mt-2 text-base not-italic leading-relaxed text-foreground/75">
                    {contact.street}
                    <br />
                    {contact.city}
                    <br />
                    {contact.zip}
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="mt-1 h-5 w-5 shrink-0 text-magenta" />
                <div className="min-w-0">
                  <span className="eyebrow">Instagram</span>
                  <div className="mt-2 flex flex-col gap-1">
                    <a
                      href={contact.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline w-fit text-base text-foreground/80 hover:text-foreground"
                    >
                      {contact.instagram}
                    </a>
                    <a
                      href={contact.instagramSportUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline w-fit text-base text-foreground/80 hover:text-foreground"
                    >
                      VinilArt Sport — {contact.instagramSport}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border border-border">
              <iframe
                title="Localização da VinilArt em Oeiras"
                src={mapEmbedUrl}
                loading="lazy"
                className="h-72 w-full grayscale-[35%]"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="scroll-mt-28">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
