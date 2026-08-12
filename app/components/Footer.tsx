export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[var(--text-2)] sm:px-6">
        <p className="font-bold text-[var(--text-1)]">Hits 2010</p>
        <p className="mt-2">
          Avestra Tag NFC LTDA · CNPJ 66.309.977/0001-01 · Araxá/MG
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="hover:text-[var(--text-1)]">Termos de uso</a>
          <a href="#" className="hover:text-[var(--text-1)]">Política de reembolso</a>
          <a href="#" className="hover:text-[var(--text-1)]">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
}
