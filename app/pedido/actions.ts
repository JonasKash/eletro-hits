"use server";

import QRCode from "qrcode";
import { buildPixPayload } from "@/lib/pix";
import { PRECO } from "@/lib/produto";

export type GeneratePixResult = {
  amount: number;
  payload: string;
  qrDataUrl: string;
  orderId: string;
};

export async function generatePixOrder(): Promise<GeneratePixResult> {
  // Preço fixo do catálogo — nunca aceito vindo do cliente.
  const amount = PRECO;

  const orderId = `HITS2010${Date.now().toString(36).toUpperCase()}`;
  const payload = buildPixPayload({ amount, txid: orderId });
  const qrDataUrl = await QRCode.toDataURL(payload, { margin: 1, width: 320 });

  return { amount, payload, qrDataUrl, orderId };
}
