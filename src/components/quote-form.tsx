import { useEffect, useRef, useState } from "react";

import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

import { BrandBar } from "@/components/brand";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border border-white/[0.08] bg-ink/65 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-cyan focus:bg-ink";

const serviceOptions = [...services.map((service) => service.title), "VinilArt Sport", "Outro"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const serviceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setServiceOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServiceOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);

      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <form
      id="pedido"
      className="relative scroll-mt-28 border border-white/[0.08] bg-charcoal/35 p-5 sm:p-7 lg:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <BrandBar className="absolute inset-x-0 top-0 h-[2px]" />

      <div className="mb-8 border-b border-white/[0.07] pb-7">
        <span className="eyebrow">Pedido de orçamento</span>

        <h2 className="mt-4 text-2xl sm:text-3xl">
          Conta-nos o que
          <br />
          <span className="text-gradient-brand">tens em mente.</span>
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/45">
          Partilha o essencial sobre o projeto. Depois a VinilArt pode analisar o pedido e entrar em
          contacto contigo.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.58rem]">Nome</span>

          <input
            required
            name="nome"
            autoComplete="name"
            className={fieldClass}
            placeholder="O teu nome"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.58rem]">Email</span>

          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="nome@email.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <span className="eyebrow text-[0.58rem]">Telefone</span>

            <span className="text-[0.55rem] uppercase tracking-[0.12em] text-foreground/25">
              Opcional
            </span>
          </span>

          <input
            name="telefone"
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="Contacto telefónico"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <span className="eyebrow text-[0.58rem]">Empresa</span>

            <span className="text-[0.55rem] uppercase tracking-[0.12em] text-foreground/25">
              Opcional
            </span>
          </span>

          <input
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Empresa ou projeto"
          />
        </label>

        <div ref={serviceRef} className="relative flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.58rem]">Serviço pretendido</span>

          <input type="hidden" name="servico" value={selectedService} />

          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={serviceOpen}
            onClick={() => {
              setServiceOpen((value) => !value);
            }}
            className={cn(
              fieldClass,
              "flex min-h-[50px] items-center justify-between gap-4 text-left",
              serviceOpen && "border-cyan bg-ink",
              selectedService ? "text-foreground" : "text-foreground/42",
            )}
          >
            <span className="truncate">{selectedService || "Seleciona um serviço"}</span>

            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-300",
                serviceOpen && "rotate-180 text-cyan",
              )}
            />
          </button>

          {serviceOpen ? (
            <div
              role="listbox"
              aria-label="Serviço pretendido"
              className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[320px] overflow-y-auto border border-white/[0.1] bg-[#101214] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,.65)] backdrop-blur-xl"
            >
              {serviceOptions.map((option, index) => {
                const active = selectedService === option;

                return (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedService(option);

                      setServiceOpen(false);
                      setSent(false);
                    }}
                    className={cn(
                      "group flex w-full items-center justify-between gap-4 px-3.5 py-3 text-left text-sm transition-colors",

                      active
                        ? "bg-white/[0.075] text-foreground"
                        : "text-foreground/62 hover:bg-white/[0.045] hover:text-foreground",
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="w-5 shrink-0 font-display text-[0.6rem] font-bold text-foreground/18 transition-colors group-hover:text-magenta">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate">{option}</span>
                    </span>

                    {active ? <Check className="h-4 w-4 shrink-0 text-cyan" /> : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.58rem]">Mensagem</span>

          <textarea
            required
            name="mensagem"
            rows={6}
            className={fieldClass}
            placeholder="Conta-nos o que tens em mente."
          />
        </label>
      </div>

      <button
        type="submit"
        className="group relative mt-7 flex min-h-13 w-full items-center justify-center gap-2 overflow-hidden bg-foreground px-6 py-4 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-ink transition-all hover:bg-white sm:w-auto sm:min-w-[190px]"
      >
        <span>Enviar pedido</span>

        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

        <span className="bar-brand absolute inset-x-0 bottom-0 h-[3px]" />
      </button>

      {sent ? (
        <div role="status" className="mt-6 border-l-2 border-cyan bg-cyan/[0.04] px-4 py-4">
          <p className="text-sm leading-6 text-foreground/70">
            Pedido preparado. Para o envio ficar ativo falta apenas indicar o email de destino da
            VinilArt.
          </p>
        </div>
      ) : null}
    </form>
  );
}
