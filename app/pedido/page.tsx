import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import CheckoutForm from "./CheckoutForm";

export const metadata: Metadata = {
  title: "Fazer pedido | Hits 2010",
};

export default function PedidoPage() {
  return (
    <>
      <header className="border-b border-[var(--border)] bg-[var(--bg)]/85 px-4 py-3 backdrop-blur sm:px-6">
        <Link href="/" className="text-sm font-extrabold tracking-tight text-[var(--text-1)]">
          Hits 2010
        </Link>
      </header>
      <main>
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
}
