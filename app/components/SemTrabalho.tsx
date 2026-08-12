import { TRACKLIST } from "@/lib/produto";

const TRABALHO = [
  "escolher a ordem;",
  "montar a playlist;",
  "organizar tudo;",
  "pensar nas transições;",
  "ficar pulando de uma faixa para outra?",
];

export function SemTrabalho() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          Você não precisa montar nada
        </h2>
        <p className="mt-6 text-center text-base text-[var(--text-2)]">
          Sabe quando você tem as músicas, mas ainda precisa
        </p>
        <ul className="mx-auto mt-4 flex max-w-md flex-col gap-2 text-center text-base text-[var(--text-2)]">
          {TRABALHO.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-center text-base text-[var(--text-2)]">
          Aqui, essa parte já está feita.
        </p>
        <p className="mt-2 text-center text-base text-[var(--text-2)]">
          São {TRACKLIST.length} faixas encadeadas em uma única sequência, com as transições
          preparadas para criar um fluxo contínuo.
        </p>
        <p className="mt-6 text-center text-lg font-bold text-[var(--text-1)]">
          Você não monta a experiência. Ela já chega pronta.
        </p>
      </div>
    </section>
  );
}
