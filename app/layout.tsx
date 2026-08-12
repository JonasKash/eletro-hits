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
  title: "Hits 2010 | Mix Completo · 50 faixas em uma única sequência",
  description:
    "Mais de 2 horas de hits, 50 faixas encadeadas em uma única sequência. Playlist no Spotify, Deezer e SoundCloud, ou arquivos em .mp3. Pagamento seguro via Pix, entrega imediata.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
