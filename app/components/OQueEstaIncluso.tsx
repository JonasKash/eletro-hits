import { CANAIS_ENTREGA } from "@/lib/produto";
import { CheckIcon } from "./Icons";

export function OQueEstaIncluso() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          O que você recebe
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--text-2)]">
          O mesmo pacote chega em 4 formatos, para você escolher como prefere ouvir.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CANAIS_ENTREGA.map((canal) => (
            <div
              key={canal.nome}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--text-1)]">{canal.nome}</p>
                <p className="text-sm text-[var(--text-2)]">{canal.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-semibold text-[var(--text-1)]">
          Celular, computador ou caixa de som. Você escolhe.
        </p>
        <p className="mt-2 text-center text-sm text-[var(--text-2)]">
          E o acesso é vitalício. Sem mensalidade. Sem assinatura.
        </p>
      </div>
    </section>
  );
}
