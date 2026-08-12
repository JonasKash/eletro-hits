import Link from "next/link";
import { ARTISTAS_DESTAQUE, PACOTE_ITENS, TRACKLIST, formatarPreco, PRECO } from "@/lib/produto";
import { CheckIcon } from "./Icons";

export function ClimaMix() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
      <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
        O clima dos Hits 2010, já pronto para tocar
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--text-2)]">
        Você recebe uma sequência com mais de 2 horas reunindo músicas que marcaram a época.
      </p>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[var(--text-2)]">
        Entre os artistas presentes no mix:
      </p>
      <p className="mx-auto mt-2 max-w-2xl text-center text-base font-semibold text-[var(--text-1)]">
        {ARTISTAS_DESTAQUE.join(" · ")} e muitos outros.
      </p>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[var(--text-2)]">
        São {TRACKLIST.length} faixas em sequência, sem precisar ficar procurando a próxima
        música.
      </p>

      <h3 className="mt-10 text-center text-lg font-bold text-[var(--text-1)]">
        O que vem no pacote
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {PACOTE_ITENS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text-1)]"
          >
            <CheckIcon className="h-4 w-4 shrink-0 text-[var(--accent)]" />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/pedido"
          className="inline-block rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-7 py-3.5 text-center text-base font-bold text-white shadow-[var(--shadow-lg)] transition hover:opacity-90"
        >
          Quero por {formatarPreco(PRECO)}
        </Link>
      </div>
    </section>
  );
}
