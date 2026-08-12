import { ChevronDownIcon } from "./Icons";
import { TRACKLIST } from "@/lib/produto";

const PERGUNTAS = [
  {
    pergunta: "Funciona em qualquer celular?",
    resposta:
      "O material pode ser acessado pelos formatos disponibilizados no pacote. Você pode ouvir pelo celular, computador ou caixa de som compatível.",
  },
  {
    pergunta: "Preciso de internet toda vez que for ouvir?",
    resposta: "Não necessariamente. Os arquivos em .mp3 podem ser baixados para ouvir offline.",
  },
  {
    pergunta: "Como recebo o material depois de comprar?",
    resposta: "Após a confirmação do pagamento, o link de acesso é enviado pelo WhatsApp.",
  },
  {
    pergunta: "Posso pedir reembolso?",
    resposta:
      "Sim. Você tem 7 dias de garantia. Se não quiser ficar com o pacote, solicite o reembolso pelo WhatsApp dentro desse período.",
  },
  {
    pergunta: "Quantas faixas tem o mix?",
    resposta: `São ${TRACKLIST.length} faixas encadeadas em uma única sequência de mais de 2 horas.`,
  },
];

export function FAQ() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {PERGUNTAS.map(({ pergunta, resposta }) => (
            <details
              key={pergunta}
              className="group rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--text-1)]">
                {pergunta}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-[var(--text-3)] transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-[var(--text-2)]">{resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
