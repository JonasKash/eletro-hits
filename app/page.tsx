import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SemTrabalho } from "./components/SemTrabalho";
import { ClimaMix } from "./components/ClimaMix";
import { PreviaAudio } from "./components/PreviaAudio";
import { OQueEstaIncluso } from "./components/OQueEstaIncluso";
import { Tracklist } from "./components/Tracklist";
import { Preco } from "./components/Preco";
import { ComoFunciona } from "./components/ComoFunciona";
import { Garantia } from "./components/Garantia";
import { FAQ } from "./components/FAQ";
import { Avaliacoes } from "./components/Avaliacoes";
import { FechamentoFinal } from "./components/FechamentoFinal";
import { Footer } from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SemTrabalho />
        <ClimaMix />
        <PreviaAudio />
        <OQueEstaIncluso />
        <Tracklist />
        <Preco />
        <ComoFunciona />
        <Garantia />
        <FAQ />
        <Avaliacoes />
        <FechamentoFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
