import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hits 2010 | Pacote de Mixes com Transições dos Maiores Hits da Década",
  description:
    "Sequências prontas com transições entre os maiores hits dos anos 2010, organizadas por fase da década. Pagamento seguro via Pix, entrega imediata.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
