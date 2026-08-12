import Link from "next/link";
import { formatarPreco, PRECO, TRACKLIST } from "@/lib/produto";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-block rounded-[var(--radius-pill)] bg-[var(--brand-muted)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--brand)]">
            Hits 2010 · Mix Completo
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--text-1)] sm:text-4xl lg:text-5xl">
            Mais de 2 horas de hits. {TRACKLIST.length} faixas. Tudo já encadeado pra você
            simplesmente apertar o play.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-2)] sm:text-lg">
            Esqueça o trabalho de montar playlist, organizar músicas e pensar em transições. Você
            recebe o Mix Hits 2010 já pronto para tocar, com {TRACKLIST.length} faixas encadeadas
            em uma única sequência e mais de 2 horas de música.
          </p>
          <p className="mt-3 text-base font-semibold text-[var(--text-1)] sm:text-lg">
            É só receber, apertar o play e curtir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/pedido"
              className="rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-7 py-3.5 text-center text-base font-bold text-white shadow-[var(--shadow-lg)] transition hover:opacity-90"
            >
              Quero o Mix Hits 2010 por {formatarPreco(PRECO)}
            </Link>
            <span className="text-xs text-[var(--text-3)] sm:text-sm">
              Pagamento seguro via Pix · Entrega imediata por WhatsApp · Acesso vitalício
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-md justify-self-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-lg)] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">Pacote</p>
            <p className="mt-1 text-2xl font-extrabold text-[var(--text-1)]">Hits 2010 · Mix Completo</p>
            <div className="mt-8 flex flex-col gap-3">
              {TRACKLIST.slice(0, 5).map((faixa) => (
                <div
                  key={faixa.tempo}
                  className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm font-medium text-[var(--text-1)]"
                >
                  <span className="truncate">{faixa.artista}</span>
                  <span className="shrink-0 font-mono text-xs text-[var(--text-3)]">{faixa.tempo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
