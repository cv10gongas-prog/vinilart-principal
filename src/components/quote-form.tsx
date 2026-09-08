import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { BrandBar } from "@/components/brand";
import { services } from "@/data/site";

const fieldClass =
  "w-full border border-white/[0.08] bg-ink/65 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-cyan focus:bg-ink";

export function QuoteForm() {
  const [sent, setSent] =
    useState(false);

  return (
    <form
      id="pedido"
      className="relative scroll-mt-28 overflow-hidden border border-white/[0.08] bg-charcoal/35 p-5 sm:p-7 lg:p-8"
      onSubmit={(event) => {
        event.preventDefault();

        setSent(true);
      }}
    >
      <BrandBar className="absolute inset-x-0 top-0 h-[2px]" />

      <div className="mb-8 border-b border-white/[0.07] pb-7">
        <span className="eyebrow">
          Pedido de orçamento
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl">
          Conta-nos o que
          <br />

          <span className="text-gradient-brand">
            tens em mente.
          </span>
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/45">
          Partilha o essencial sobre o projeto.
          Depois a VinilArt pode analisar o pedido
          e entrar em contacto contigo.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.58rem]">
            Nome
          </span>

          <input
            required
            name="nome"
            autoComplete="name"
            className={fieldClass}
            placeholder="O teu nome"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.58rem]">
            Email
          </span>

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
          <span className="eyebrow text-[0.58rem]">
            Telefone
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
          <span className="eyebrow text-[0.58rem]">
            Empresa
          </span>

          <input
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Empresa ou projeto"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.58rem]">
            Serviço pretendido
          </span>

          <select
            name="servico"
            className={fieldClass}
            defaultValue=""
          >
            <option
              value=""
              disabled
            >
              Seleciona um serviço
            </option>

            {services.map((service) => (
              <option
                key={service.slug}
                value={service.title}
              >
                {service.title}
              </option>
            ))}

            <option value="VinilArt Sport">
              VinilArt Sport
            </option>

            <option value="Outro">
              Outro
            </option>
          </select>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.58rem]">
            Mensagem
          </span>

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
        <span>
          Enviar pedido
        </span>

        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

        <span className="bar-brand absolute inset-x-0 bottom-0 h-[3px]" />
      </button>

      {sent ? (
        <div
          role="status"
          className="mt-6 border-l-2 border-cyan bg-cyan/[0.04] px-4 py-4"
        >
          <p className="text-sm leading-6 text-foreground/70">
            Pedido preparado. Para o envio ficar
            ativo falta apenas indicar o email de
            destino da VinilArt.
          </p>
        </div>
      ) : null}
    </form>
  );
}
