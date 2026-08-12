import { TRACKLIST } from "@/lib/produto";
import { MusicIcon } from "./Icons";

export function Tracklist() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          {TRACKLIST.length} faixas em uma única sequência
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--text-2)]">
          Não é simplesmente uma lista de músicas. É uma sequência completa, faixa a faixa, com o
          horário em que cada música entra.
        </p>
        <div className="mt-8 max-h-[520px] overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)]">
          <ol>
            {TRACKLIST.map((faixa, i) => (
              <li
                key={`${faixa.tempo}-${faixa.musica}`}
                className={`flex items-center gap-4 px-5 py-3.5 text-sm ${
                  i !== TRACKLIST.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="w-16 shrink-0 font-mono text-xs text-[var(--accent)]">{faixa.tempo}</span>
                <MusicIcon className="h-4 w-4 shrink-0 text-[var(--text-3)]" />
                <span className="text-[var(--text-1)]">
                  <span className="font-semibold">{faixa.artista}</span>
                  <span className="text-[var(--text-2)]"> · {faixa.musica}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
