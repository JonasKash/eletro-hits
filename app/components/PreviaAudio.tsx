"use client";

import { useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons";
import { PREVIAS } from "@/lib/produto";

export function PreviaAudio() {
  const [tocando, setTocando] = useState<number | null>(null);
  const [progresso, setProgresso] = useState<Record<number, number>>({});
  const refs = useRef<Array<HTMLAudioElement | null>>([]);

  function alternar(i: number) {
    const atual = refs.current[i];
    if (!atual) return;

    if (tocando === i) {
      atual.pause();
      setTocando(null);
      return;
    }

    if (tocando !== null && refs.current[tocando]) {
      refs.current[tocando]!.pause();
    }

    atual.play();
    setTocando(i);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <h2 className="text-center text-2xl font-extrabold text-[var(--text-1)] sm:text-3xl">
        Antes de comprar, ouça uma amostra
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--text-2)]">
        Você não precisa comprar no escuro. As prévias mostram o estilo das transições que você
        encontra no pacote, para você ouvir e sentir o clima antes de decidir.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {PREVIAS.map((previa, i) => (
          <div
            key={previa.arquivo}
            className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <button
              onClick={() => alternar(i)}
              aria-label={tocando === i ? `Pausar ${previa.titulo}` : `Tocar ${previa.titulo}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] text-white transition hover:opacity-90"
            >
              {tocando === i ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
            </button>
            <div className="flex-1">
              <p className="font-bold text-[var(--text-1)]">{previa.titulo}</p>
              <p className="text-sm text-[var(--text-2)]">{previa.descricao}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] transition-[width]"
                  style={{ width: `${progresso[i] ?? 0}%` }}
                />
              </div>
            </div>
            <audio
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={previa.arquivo}
              preload="none"
              onTimeUpdate={(e) => {
                const el = e.currentTarget;
                if (el.duration) {
                  setProgresso((p) => ({ ...p, [i]: (el.currentTime / el.duration) * 100 }));
                }
              }}
              onEnded={() => {
                setTocando(null);
                setProgresso((p) => ({ ...p, [i]: 0 }));
              }}
            />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[var(--text-3)]">
        As prévias mostram apenas o estilo das transições. O conteúdo completo é entregue por
        WhatsApp após a confirmação do pagamento.
      </p>
    </section>
  );
}
