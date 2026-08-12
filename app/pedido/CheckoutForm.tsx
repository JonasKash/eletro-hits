"use client";

import { useEffect, useMemo, useState } from "react";
import { PRODUTO, formatarPreco, PRECO } from "@/lib/produto";
import { sanitizeText, sanitizePhone } from "@/lib/security";
import { maskPhone } from "@/lib/masks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CheckIcon } from "../components/Icons";
import { generatePixOrder, type GeneratePixResult } from "./actions";

type Step = "dados" | "pagamento";

type Dados = {
  nome: string;
  telefone: string;
};

const EMPTY_DADOS: Dados = { nome: "", telefone: "" };

export default function CheckoutForm() {
  const [step, setStep] = useState<Step>("dados");
  const [dados, setDados] = useState<Dados>(EMPTY_DADOS);
  const [pix, setPix] = useState<GeneratePixResult | null>(null);
  const [pixLoading, setPixLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [confirmado, setConfirmado] = useState(false);

  const pendencias = useMemo(() => {
    const faltando: string[] = [];
    if (dados.nome.trim().length <= 1) faltando.push("nome completo");
    if (!sanitizePhone(dados.telefone)) faltando.push("WhatsApp com DDD");
    return faltando;
  }, [dados]);

  const podeAvancar = pendencias.length === 0;

  useEffect(() => {
    if (step !== "pagamento" || pix) return;
    setPixLoading(true);
    generatePixOrder()
      .then(setPix)
      .finally(() => setPixLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const whatsappMessage = useMemo(() => {
    if (!pix) return "";
    const linha = (label: string, value: string) => `${label}: ${value}`;
    return [
      `Pedido ${pix.orderId}: ${PRODUTO.nomeCompleto}`,
      linha("Valor", `R$ ${pix.amount.toFixed(2).replace(".", ",")}`),
      linha("Nome", sanitizeText(dados.nome)),
      linha("WhatsApp para entrega", sanitizePhone(dados.telefone) ?? ""),
      "",
      "Já fiz o pagamento via Pix. Segue meu pedido para envio do link de acesso.",
    ].join("\n");
  }, [pix, dados]);

  return (
    <div className="mx-auto max-w-[720px] px-5 py-10 sm:px-8">
      <ol className="mb-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-3)]">
        {(["dados", "pagamento"] as Step[]).map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] ${
                step === s ? "bg-[var(--brand)] text-white" : "bg-[var(--surface)] text-[var(--text-3)]"
              }`}
            >
              {i + 1}
            </span>
            <span className={step === s ? "text-[var(--text-1)]" : ""}>
              {s === "dados" ? "Seus dados" : "Pagamento"}
            </span>
            {i < 1 && <span className="mx-1 text-[var(--border-strong)]">·</span>}
          </li>
        ))}
      </ol>

      {step === "dados" && (
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-1)]">Seus dados</h1>
          <p className="mt-1 text-sm text-[var(--text-2)]">
            Para onde enviamos o acesso ao {PRODUTO.nome}?
          </p>

          <div className="mt-6 flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--border)] p-4">
            <span className="flex-1 text-sm font-medium text-[var(--text-1)]">{PRODUTO.nomeCompleto}</span>
            <span className="text-sm font-bold text-[var(--text-1)]">{formatarPreco(PRECO)}</span>
          </div>

          <div className="mt-6 grid gap-4">
            <Field label="Nome completo" value={dados.nome} onChange={(v) => setDados({ ...dados, nome: v })} />
            <Field
              label="WhatsApp (com DDD)"
              value={dados.telefone}
              onChange={(v) => setDados({ ...dados, telefone: maskPhone(v) })}
              placeholder="(34) 99999-9999"
              inputMode="numeric"
            />
          </div>

          <div className="mt-8">
            <button
              onClick={() => setStep("pagamento")}
              disabled={!podeAvancar}
              className="w-full rounded-[var(--radius-pill)] bg-[var(--brand)] py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brand-hover)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continuar para pagamento
            </button>
            {!podeAvancar && (
              <p className="mt-2 text-xs text-[var(--text-3)]">Falta preencher: {pendencias.join(", ")}</p>
            )}
          </div>
        </div>
      )}

      {step === "pagamento" && (
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-1)]">Pagamento via Pix</h1>

          <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--border)] p-5">
            <p className="text-sm text-[var(--text-2)]">Resumo do pedido</p>
            <p className="mt-1 text-sm font-medium text-[var(--text-1)]">{PRODUTO.nomeCompleto}</p>
            <p className="mt-1 text-sm text-[var(--text-2)]">
              Entrega por WhatsApp para {sanitizeText(dados.nome)}
            </p>
            <p className="mt-3 flex justify-between text-2xl font-semibold tabular-nums text-[var(--text-1)]">
              <span className="text-sm font-normal text-[var(--text-2)]">Total</span>
              {pix ? `R$ ${pix.amount.toFixed(2).replace(".", ",")}` : "—"}
            </p>
          </div>

          {pixLoading && <p className="mt-6 text-sm text-[var(--text-2)]">Gerando QR Code Pix...</p>}

          {pix && !pixLoading && (
            <>
              <div className="mt-6 flex flex-col items-center rounded-[var(--radius-md)] border border-[var(--border)] p-6">
                <img src={pix.qrDataUrl} alt="QR Code Pix para pagamento" width={220} height={220} />
                <p className="mt-3 text-center text-xs text-[var(--text-3)]">
                  Escaneie com o app do seu banco ou copie o código abaixo
                </p>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wide text-[var(--text-3)]">
                  Pix Copia e Cola
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    readOnly
                    value={pix.payload}
                    className="flex-1 truncate rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2.5 text-xs text-[var(--text-2)]"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(pix.payload);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="rounded-[var(--radius-sm)] bg-[var(--brand)] px-4 text-xs font-bold uppercase tracking-wide text-white"
                  >
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {["Abra o app do seu banco", "Escolha pagar com Pix", "Cole o código ou escaneie o QR", "Confirme o pagamento"].map(
                  (t, i) => (
                    <p key={t} className="flex items-center gap-2.5 text-sm text-[var(--text-2)]">
                      <CheckIcon className="h-4 w-4 text-[var(--success)]" />
                      {i + 1}. {t}
                    </p>
                  )
                )}
              </div>

              {!confirmado ? (
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setConfirmado(true)}
                  className="mt-8 block rounded-[var(--radius-pill)] bg-[var(--brand)] py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brand-hover)]"
                >
                  Já paguei, enviar confirmação
                </a>
              ) : (
                <p className="mt-8 rounded-[var(--radius-md)] bg-[var(--success-muted)] p-4 text-center text-sm font-medium text-[var(--success)]">
                  Confirmação enviada. Assim que o pagamento cair, seu pedido {pix.orderId} recebe o link de
                  acesso por WhatsApp.
                </p>
              )}
            </>
          )}

          <button
            onClick={() => setStep("dados")}
            className="mt-4 w-full rounded-[var(--radius-pill)] border border-[var(--border-strong)] py-3 text-sm font-bold uppercase tracking-wide text-[var(--text-1)]"
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-3)]">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-transparent px-3 py-2.5 text-sm text-[var(--text-1)] outline-none focus:border-[var(--brand)]"
      />
    </label>
  );
}
