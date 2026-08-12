export const WHATSAPP_PHONE = "553491615988";

export function buildWhatsAppUrl(message?: string, phone: string = WHATSAPP_PHONE): string {
  const base = `https://wa.me/${phone.replace(/\D/g, "")}`;
  const text = message ?? "Olá! Quero fazer um pedido do Hits 2010.";
  return `${base}?text=${encodeURIComponent(text)}`;
}
