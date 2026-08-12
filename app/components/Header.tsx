import Link from "next/link";
import { LockIcon, MusicIcon } from "./Icons";
import { formatarPreco, PRECO } from "@/lib/produto";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 font-extrabold tracking-tight text-[var(--text-1)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] text-white">
            <MusicIcon className="h-4 w-4" />
          </span>
          Hits 2010
        </div>
        <div className="hidden items-center gap-1.5 text-xs font-medium text-[var(--text-2)] sm:flex">
          <LockIcon className="h-4 w-4 text-[var(--success)]" />
          Pagamento seguro via Pix
        </div>
        <Link
          href="/pedido"
          className="rounded-[var(--radius-pill)] bg-[var(--brand)] px-4 py-2 text-sm font-bold text-white shadow-[var(--shadow-md)] transition hover:bg-[var(--brand-hover)]"
        >
          Quero por {formatarPreco(PRECO)}
        </Link>
      </div>
    </header>
  );
}
