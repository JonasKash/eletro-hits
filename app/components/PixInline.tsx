"use client";

import { useMemo, useState } from "react";
import { generatePixOrder, type GeneratePixResult } from "../pedido/actions";
import { sanitizeText, sanitizePhone } from "@/lib/security";
import { maskPhone } from "@/lib/masks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PRODUTO } from "@/lib/produto";

export function PixInline() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pix, setPix] = useState<GeneratePixResult | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [confirmado, setConfirmado] = useState(false);

  const pendencias = useMemo(() => {
    const faltando: string[] = [];
    if (nome.trim().length <= 1) faltando.push("nome completo");
    if (!sanitizePhone(telefone)) faltando.push("WhatsApp com DDD");
    return faltando;
  }, [nome, telefone]);

  async function gerarPix() {
    if (pendencias.length > 0) return;
    setCarregando(true);
    const resultado = await generatePixOrder();
    setPix(resultado);
    setCarregando(false);
  }

  const mensagemWhatsApp = useMemo(() => {
    if (!pix) return "";
    return [
      `Pedido ${pix.orderId}: ${PRODUTO.nomeCompleto}`,
      `Valor: R$ ${pix.amount.toFixed(2).replace(".", ",")}`,
      `Nome: ${sanitizeText(nome)}`,
      `WhatsApp: ${sanitizePhone(telefone) ?? ""}`,
      "",
      "Já fiz o pagamento via Pix. Segue meu pedido para envio do link de acesso.",
    ].join("\n");
  }, [pix, nome, telefone]);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #999",
    padding: "6px 8px",
    fontSize: 12,
    fontFamily: "Verdana, Geneva, Arial, sans-serif",
    boxSizing: "border-box",
  };

  if (!pix) {
    return (
      <div style={{ marginTop: 10, textAlign: "left" }}>
        <label style={{ display: "block", fontSize: 10, color: "#555", marginBottom: 3 }}>
          Nome completo
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            style={{ ...inputStyle, marginTop: 2 }}
          />
        </label>
        <label style={{ display: "block", fontSize: 10, color: "#555", margin: "8px 0 3px" }}>
          WhatsApp (com DDD)
          <input
            value={telefone}
            onChange={(e) => setTelefone(maskPhone(e.target.value))}
            placeholder="(34) 99999-9999"
            inputMode="numeric"
            style={{ ...inputStyle, marginTop: 2 }}
          />
        </label>
        <button
          onClick={gerarPix}
          disabled={pendencias.length > 0 || carregando}
          style={{
            marginTop: 10,
            width: "100%",
            background: pendencias.length > 0 || carregando ? "#e08a8a" : "#cc0000",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            padding: "10px 20px",
            borderRadius: 3,
            border: "none",
            cursor: pendencias.length > 0 || carregando ? "default" : "pointer",
          }}
        >
          {carregando ? "Gerando Pix..." : "Gerar Pix e acessar a playlist"}
        </button>
        {pendencias.length > 0 && (
          <p style={{ marginTop: 6, fontSize: 10, color: "#999" }}>Falta preencher: {pendencias.join(", ")}</p>
        )}
      </div>
    );
  }

  return (
    <div style={{ marginTop: 10, textAlign: "center" }}>
      <img src={pix.qrDataUrl} alt="QR Code Pix para pagamento" width={200} height={200} style={{ margin: "0 auto" }} />
      <p style={{ fontSize: 10, color: "#777", margin: "6px 0" }}>
        Escaneie com o app do seu banco ou copie o código abaixo
      </p>
      <div style={{ display: "flex", gap: 4, textAlign: "left" }}>
        <input
          readOnly
          value={pix.payload}
          style={{ ...inputStyle, flex: 1, fontSize: 10, color: "#555" }}
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(pix.payload);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
          }}
          style={{
            border: "1px solid #999",
            background: "#f0f0f0",
            padding: "0 10px",
            fontSize: 11,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {copiado ? "Copiado!" : "Copiar"}
        </button>
      </div>

      {!confirmado ? (
        <a
          href={buildWhatsAppUrl(mensagemWhatsApp)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setConfirmado(true)}
          style={{
            display: "block",
            marginTop: 10,
            background: "#cc0000",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            padding: "10px 20px",
            borderRadius: 3,
            textDecoration: "none",
          }}
        >
          Já paguei, enviar confirmação
        </a>
      ) : (
        <p style={{ marginTop: 10, fontSize: 11, color: "#2a7a2a" }}>
          Confirmação enviada. Assim que o pagamento cair, seu pedido {pix.orderId} recebe o link de acesso por
          WhatsApp.
        </p>
      )}
    </div>
  );
}
