"use client";

import { useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons";
import { PixInline } from "./PixInline";
import { formatarPreco, PRECO } from "@/lib/produto";

type Video = {
  titulo: string;
  duracao: string;
  likes: number;
  dislikes: number;
  canal: string;
  novo?: boolean;
  visualizacoes: string;
  categoria: string;
  cor: string;
  previa: string;
};

const VIDEOS: Video[] = [
  {
    titulo: "Pitbull ft. Ne-Yo, Afrojack, Nayer - Give Me Everything",
    duracao: "3:05",
    likes: 231,
    dislikes: 10,
    canal: "Hits2010Mix",
    novo: true,
    visualizacoes: "13,003",
    categoria: "Dance Classics",
    cor: "linear-gradient(135deg,#F59E0B,#EF4444)",
    previa: "/audio/previa-02.mp3",
  },
  {
    titulo: "Alexandra Stan - Mr. Saxobeat",
    duracao: "2:09",
    likes: 408,
    dislikes: 53,
    canal: "Hits2010Mix",
    visualizacoes: "47,967",
    categoria: "Eletro Hits",
    cor: "linear-gradient(135deg,#8B5CF6,#22D3EE)",
    previa: "/audio/previa-01.mp3",
  },
  {
    titulo: "LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem",
    duracao: "2:36",
    likes: 3826,
    dislikes: 241,
    canal: "Hits2010Mix",
    visualizacoes: "333,117",
    categoria: "Party Mix",
    cor: "linear-gradient(135deg,#EC4899,#F59E0B)",
    previa: "/audio/previa-04.mp3",
  },
  {
    titulo: "Bob Sinclar - Love Generation",
    duracao: "3:59",
    likes: 512,
    dislikes: 34,
    canal: "Hits2010Mix",
    visualizacoes: "62,340",
    categoria: "Pop Clássicos",
    cor: "linear-gradient(135deg,#14B8A6,#22C55E)",
    previa: "/audio/previa-05.mp3",
  },
  {
    titulo: "Swedish House Mafia - One (Your Name)",
    duracao: "3:25",
    likes: 8341,
    dislikes: 210,
    canal: "Hits2010Mix",
    visualizacoes: "512,880",
    categoria: "Club Mix",
    cor: "linear-gradient(135deg,#6366F1,#D946EF)",
    previa: "/audio/previa-06.mp3",
  },
  {
    titulo: "Daft Punk - One More Time",
    duracao: "1:45",
    likes: 15234,
    dislikes: 302,
    canal: "Hits2010Mix",
    visualizacoes: "980,455",
    categoria: "Flashback Hits",
    cor: "linear-gradient(135deg,#F59E0B,#A855F7)",
    previa: "/audio/previa-07.mp3",
  },
  {
    titulo: "Global Deejays - California Dreamin'",
    duracao: "3:40",
    likes: 674,
    dislikes: 41,
    canal: "Hits2010Mix",
    visualizacoes: "58,120",
    categoria: "Dance Anthems",
    cor: "linear-gradient(135deg,#FB7185,#3B82F6)",
    previa: "/audio/previa-08.mp3",
  },
  {
    titulo: "Sean Kingston - Beautiful Girls",
    duracao: "1:55",
    likes: 903,
    dislikes: 47,
    canal: "Hits2010Mix",
    visualizacoes: "89,760",
    categoria: "Balada 2010",
    cor: "linear-gradient(135deg,#FB923C,#F43F5E)",
    previa: "/audio/previa-11.mp3",
  },
  {
    titulo: "Eiffel 65 - Blue (Da Ba Dee)",
    duracao: "2:32",
    likes: 4521,
    dislikes: 176,
    canal: "Hits2010Mix",
    visualizacoes: "398,210",
    categoria: "Sequência VIP",
    cor: "linear-gradient(135deg,#8B5CF6,#14B8A6)",
    previa: "/audio/previa-12.mp3",
  },
  {
    titulo: "R.I.O. - Shine On",
    duracao: "3:45",
    likes: 1142,
    dislikes: 63,
    canal: "Hits2010Mix",
    visualizacoes: "97,530",
    categoria: "Trance Anthems",
    cor: "linear-gradient(135deg,#06B6D4,#6366F1)",
    previa: "/audio/previa-13.mp3",
  },
];

const FAQ = [
  {
    pergunta: "Como recebo a playlist?",
    resposta:
      "Você recebe em arquivos .mp3 pra baixar e ouvir offline, mais o link da playlist pronta nos principais apps (Spotify, Deezer, SoundCloud). Escolhe como preferir ouvir.",
  },
  {
    pergunta: "Funciona no meu celular?",
    resposta:
      "Sim. Os arquivos .mp3 tocam em qualquer player comum e as playlists abrem direto no app que você já usa.",
  },
  {
    pergunta: "Preciso de internet pra ouvir depois?",
    resposta: "Não. Baixando o .mp3 você ouve offline quando quiser, sem gastar internet.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "Pix, gerado direto aqui na página. Depois de pagar, o link de acesso chega no seu WhatsApp na hora.",
  },
  {
    pergunta: "E se eu não gostar?",
    resposta: "Tem 7 dias de garantia. Se não curtir, devolvemos 100% do valor, sem perguntas.",
  },
];

function YouTubeLogo() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/youtube-logo.webp" alt="YouTube" style={{ height: 22, width: "auto" }} />;
}

export function RetroYouTubeMobile() {
  const [tocando, setTocando] = useState<number | null>(null);
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
    <div style={{ background: "#e6e6e6", minHeight: "100dvh" }}>
      <div
        style={{
          maxWidth: 380,
          margin: "0 auto",
          background: "#ffffff",
          minHeight: "100dvh",
          fontFamily: "Verdana, Geneva, Arial, sans-serif",
          fontSize: 12,
          color: "#000000",
        }}
      >
        {/* Barra superior estilo YouTube Mobile 2011 */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderBottom: "1px solid #ccc" }}>
          <YouTubeLogo />
          <a href="#" style={{ color: "#1a4fba", fontSize: 11 }}>
            Sign In
          </a>
        </div>

        {/* Busca (decorativa) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", gap: 4, padding: "8px 10px", borderBottom: "1px solid #ccc" }}
        >
          <input
            type="text"
            placeholder=""
            style={{ flex: 1, border: "1px solid #999", padding: "3px 5px", fontSize: 12 }}
          />
          <button
            type="submit"
            style={{ border: "1px solid #999", background: "#f0f0f0", padding: "3px 10px", fontSize: 12 }}
          >
            Search
          </button>
        </form>

        <p style={{ padding: "6px 10px", fontSize: 10, color: "#777", margin: 0, borderBottom: "1px solid #ccc" }}>
          Toque na capa de qualquer faixa para ouvir uma prévia do mix.
        </p>

        {/* Lista de faixas, estilo lista de vídeos */}
        <div>
          {VIDEOS.map((v, i) => (
            <div key={v.titulo} style={{ display: "flex", gap: 8, padding: "10px", borderBottom: "1px solid #ccc" }}>
              <button
                onClick={() => alternar(i)}
                aria-label={tocando === i ? `Pausar prévia de ${v.titulo}` : `Tocar prévia de ${v.titulo}`}
                style={{
                  width: 64,
                  height: 48,
                  flexShrink: 0,
                  background: v.cor,
                  borderRadius: 2,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tocando === i ? (
                  <PauseIcon className="h-4 w-4 text-white" />
                ) : (
                  <PlayIcon className="h-4 w-4 text-white" />
                )}
              </button>
              <div style={{ minWidth: 0 }}>
                <a href="#" style={{ color: "#1a4fba", fontWeight: 700, fontSize: 12, lineHeight: 1.3 }}>
                  {v.titulo}
                </a>
                <div style={{ color: "#333", fontSize: 11, marginTop: 2 }}>
                  {v.duracao} &nbsp; {v.likes.toLocaleString("pt-BR")} likes, {v.dislikes.toLocaleString("pt-BR")} dislikes
                </div>
                <div style={{ color: "#333", fontSize: 11 }}>
                  by <a href="#" style={{ color: "#1a4fba" }}>{v.canal}</a>{" "}
                  {v.novo && <span style={{ color: "#cc0000", fontWeight: 700 }}>NEW</span>}
                </div>
                <div style={{ color: "#333", fontSize: 11 }}>{v.visualizacoes} views</div>
                <div style={{ color: "#777", fontSize: 10, marginTop: 2 }}>In {v.categoria}</div>
              </div>
              <audio
                ref={(el) => {
                  refs.current[i] = el;
                }}
                src={v.previa}
                preload="none"
                onEnded={() => setTocando(null)}
              />
            </div>
          ))}
        </div>

        {/* FAQ estilizado como os links de navegação da página antiga */}
        <div style={{ borderBottom: "1px solid #ccc" }}>
          {FAQ.map(({ pergunta, resposta }) => (
            <details key={pergunta} style={{ borderTop: "1px solid #eee", padding: "8px 10px" }}>
              <summary style={{ color: "#1a4fba", fontSize: 12, cursor: "pointer" }}>{pergunta}</summary>
              <p style={{ marginTop: 6, marginBottom: 0, fontSize: 11, color: "#444", lineHeight: 1.5 }}>
                {resposta}
              </p>
            </details>
          ))}
        </div>

        <div style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #ccc" }}>
          <a href="#" style={{ color: "#1a4fba", fontSize: 12 }}>
            Feedback
          </a>
        </div>

        {/* Oferta real */}
        <div id="oferta" style={{ padding: "16px 14px", textAlign: "center", background: "#fafafa", borderBottom: "1px solid #ccc" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#111", margin: 0 }}>
            Acesso à playlist completa dessas pedradas
          </p>
          <p style={{ fontSize: 12, color: "#444", margin: "4px 0 10px" }}>
            Mais de 5 horas de música, entrega imediata por WhatsApp
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: "#111", margin: "0 0 10px" }}>{formatarPreco(PRECO)}</p>
          <PixInline />
        </div>

        {/* Rodapé estilo YouTube antigo */}
        <div style={{ background: "#f0f0f0", padding: "12px 10px", textAlign: "center", color: "#555", fontSize: 10, lineHeight: 1.8 }}>
          <div>Location: Worldwide - Language: Portuguese</div>
          <div>
            <a href="#" style={{ color: "#1a4fba" }}>Sign In</a>
          </div>
          <div>Help - Terms &amp; Privacy</div>
          <div>Mobile | Desktop</div>
          <div>© 2011 YouTube, LLC</div>
        </div>

        {/* Identificação legal do negócio real por trás da oferta */}
        <div style={{ textAlign: "center", color: "#999", fontSize: 9, padding: "8px 10px" }}>
          Avestra Tag NFC LTDA · CNPJ 66.309.977/0001-01
        </div>
      </div>
    </div>
  );
}
