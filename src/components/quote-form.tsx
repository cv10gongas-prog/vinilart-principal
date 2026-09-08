import { useState } from "react";

import { services } from "@/data/site";

const fieldClass =
  "w-full border border-input bg-charcoal/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-cyan";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="pedido"
      className="surface-grain relative border border-border bg-charcoal/40 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.62rem]">Nome</span>
          <input required name="nome" className={fieldClass} placeholder="O teu nome" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.62rem]">Email</span>
          <input required type="email" name="email" className={fieldClass} placeholder="nome@email.com" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.62rem]">Telefone</span>
          <input name="telefone" inputMode="tel" className={fieldClass} placeholder="Contacto telefónico" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[0.62rem]">Empresa</span>
          <input name="empresa" className={fieldClass} placeholder="Empresa ou projeto" />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.62rem]">Serviço pretendido</span>
          <select name="servico" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Seleciona um serviço
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="VinilArt Sport">VinilArt Sport</option>
            <option value="Outro">Outro</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="eyebrow text-[0.62rem]">Mensagem</span>
          <textarea
            required
            name="mensagem"
            rows={5}
            className={fieldClass}
            placeholder="Conta-nos o que tens em mente."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full border border-transparent bg-foreground px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-magenta hover:text-foreground sm:w-auto"
      >
        Enviar pedido
      </button>

      {sent ? (
        <p
          role="status"
          className="mt-5 border-l-2 border-cyan bg-cyan/5 px-4 py-3 text-sm text-foreground/80"
        >
          Pedido preparado. Para o envio ficar ativo falta apenas indicares o email de
          destino da VinilArt.
        </p>
      ) : null}
    </form>
  );
}
