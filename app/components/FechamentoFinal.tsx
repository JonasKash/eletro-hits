import Link from "next/link";
import { formatarPreco, PRECO, TRACKLIST } from "@/lib/produto";

export function FechamentoFinal() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">Hits 2010</p>
        <h2 className="mt-3 text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          {TRACKLIST.length} faixas. Mais de 2 horas. Transições prontas.
        </h2>
        <p className="mt-3 text-base font-semibold text-[var(--text-1)]">
          Você não precisa montar nada. É só apertar o play.
        </p>
        <p className="mt-6 text-4xl font-extrabold text-[var(--text-1)]">{formatarPreco(PRECO)}</p>
        <Link
          href="/pedido"
          className="mt-6 inline-block rounded-[var(--radius-pill)] bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] px-7 py-3.5 text-center text-base font-bold text-white shadow-[var(--shadow-lg)] transition hover:opacity-90"
        >
          Quero o meu Hits 2010
        </Link>
        <div className="mt-6 flex flex-col items-center gap-1 text-xs text-[var(--text-3)]">
          <span>Pagamento seguro via Pix</span>
          <span>Entrega imediata por WhatsApp</span>
          <span>Acesso vitalício · Sem mensalidade</span>
          <span>7 dias de garantia</span>
        </div>
      </div>
    </section>
  );
}
