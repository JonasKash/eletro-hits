import { BoltIcon, LockIcon, MusicIcon } from "./Icons";

const PASSOS = [
  {
    icon: LockIcon,
    titulo: "1. Pague com Pix",
    texto: "Confirme seu pedido e finalize o pagamento no checkout seguro.",
  },
  {
    icon: BoltIcon,
    titulo: "2. Receba no WhatsApp",
    texto: "Assim que o pagamento for confirmado, o link de acesso chega no seu WhatsApp.",
  },
  {
    icon: MusicIcon,
    titulo: "3. Aperte o play",
    texto: "Baixe os arquivos ou acesse sua playlist e coloque o mix para tocar.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          Receba na hora
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--text-2)]">
          Funciona em 3 passos.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PASSOS.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-muted)] text-[var(--brand)]">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-bold text-[var(--text-1)]">{titulo}</h3>
              <p className="mt-2 text-sm text-[var(--text-2)]">{texto}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-semibold text-[var(--text-1)]">
          Sem montagem. Sem espera.
        </p>
      </div>
    </section>
  );
}
