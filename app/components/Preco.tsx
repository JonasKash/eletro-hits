import Link from "next/link";
import { CheckIcon, LockIcon } from "./Icons";
import { formatarPreco, PRECO, TRACKLIST } from "@/lib/produto";

const ITENS = [
  `Mix completo com ${TRACKLIST.length} faixas`,
  "Mais de 2 horas de sequência",
  "Playlist no Spotify, Deezer e SoundCloud",
  "Arquivos em .mp3",
  "Acesso vitalício",
  "Entrega imediata por WhatsApp",
];

export function Preco() {
  return (
    <section id="comprar" className="bg-[var(--surface)]">
      <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          Um pagamento. E pronto.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-[var(--text-2)]">
          Você não precisa assinar nada.
        </p>

        <div className="relative mt-8 rounded-[var(--radius-md)] border border-[var(--brand)] bg-[var(--surface-2)] p-8 shadow-[var(--shadow-lg)]">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-4 py-1 text-xs font-bold text-white">
            Pacote único
          </span>
          <p className="text-sm font-semibold text-[var(--text-1)]">Você recebe:</p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {ITENS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-1)]">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <span className="text-4xl font-extrabold text-[var(--text-1)]">{formatarPreco(PRECO)}</span>
          </div>
          <p className="mt-2 text-center text-xs text-[var(--text-3)]">
            Pagamento único. Sem mensalidade.
          </p>
          <Link
            href="/pedido"
            className="mt-6 block rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Quero garantir o meu por {formatarPreco(PRECO)}
          </Link>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[var(--text-3)]">
            <LockIcon className="h-4 w-4 text-[var(--success)]" />
            Pagamento processado com segurança via Pix
          </p>
        </div>
      </div>
    </section>
  );
}
