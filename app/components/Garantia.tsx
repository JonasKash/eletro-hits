import { ShieldIcon } from "./Icons";

export function Garantia() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
      <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
        E se eu comprar e não gostar?
      </h2>
      <div className="mt-8 flex flex-col items-center gap-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:flex-row sm:text-left">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--brand-muted)] text-[var(--brand)]">
          <ShieldIcon className="h-8 w-8" />
        </span>
        <div>
          <h3 className="text-xl font-extrabold text-[var(--text-1)]">
            7 dias de garantia incondicional
          </h3>
          <p className="mt-2 text-sm text-[var(--text-2)]">
            Se você não curtir o pacote, é só chamar pelo WhatsApp dentro do prazo e solicitar o
            reembolso. Você recebe 100% do valor pago, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
