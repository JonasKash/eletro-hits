"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons";
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
};

const VIDEOS: Video[] = [
  {
    titulo: "Alexandra Stan - Mr. Saxobeat",
    duracao: "2:09",
    likes: 408,
    dislikes: 53,
    canal: "Hits2010Mix",
    novo: true,
    visualizacoes: "47,967",
    categoria: "Eletro Hits",
    cor: "linear-gradient(135deg,#8B5CF6,#22D3EE)",
  },
  {
    titulo: "Pitbull ft. Ne-Yo, Afrojack, Nayer - Give Me Everything",
    duracao: "3:05",
    likes: 231,
    dislikes: 10,
    canal: "Hits2010Mix",
    visualizacoes: "13,003",
    categoria: "Dance Classics",
    cor: "linear-gradient(135deg,#F59E0B,#EF4444)",
  },
  {
    titulo: "David Guetta feat. Kid Cudi - Memories",
    duracao: "2:51",
    likes: 36872,
    dislikes: 641,
    canal: "Hits2010Mix",
    visualizacoes: "789,140",
    categoria: "Festival Anthems",
    cor: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
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
  },
];

export function RetroYouTubeMobile() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);
  const [precisaTocarManual, setPrecisaTocarManual] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setTocando(true))
      .catch(() => setPrecisaTocarManual(true));
  }, []);

  function alternarPlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (tocando) {
      audio.pause();
      setTocando(false);
    } else {
      audio.play().then(() => setTocando(true));
      setPrecisaTocarManual(false);
    }
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
          <span style={{ color: "#cc0000", fontSize: 20, fontWeight: 700, fontFamily: "Georgia, 'Times New Roman', serif" }}>
            You<span style={{ color: "#333" }}>Tube</span>
            <sup style={{ fontSize: 9 }}>™</sup>
          </span>
          <a href="#" style={{ color: "#1a4fba", fontSize: 11 }}>
            Sign In
          </a>
        </div>

        {/* Now playing */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderBottom: "1px solid #ccc", background: "#f5f5f5" }}>
          <button
            onClick={alternarPlay}
            aria-label={tocando ? "Pausar" : "Tocar"}
            style={{
              width: 22,
              height: 22,
              flexShrink: 0,
              borderRadius: 999,
              border: "1px solid #999",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#cc0000",
            }}
          >
            {tocando ? <PauseIcon className="h-2.5 w-2.5" /> : <PlayIcon className="h-2.5 w-2.5" />}
          </button>
          <span style={{ fontSize: 10, color: "#555" }}>
            {precisaTocarManual ? "Toque para tocar uma amostra do mix" : "Tocando agora: amostra do mix"}
          </span>
          <audio ref={audioRef} src="/audio/previa-01.mp3" loop preload="auto" />
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

        {/* Lista de faixas, estilo lista de vídeos */}
        <div>
          {VIDEOS.map((v, i) => (
            <div key={v.titulo} style={{ display: "flex", gap: 8, padding: "10px", borderBottom: "1px solid #ccc" }}>
              <div
                style={{
                  width: 64,
                  height: 48,
                  flexShrink: 0,
                  background: v.cor,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayIcon className="h-4 w-4 text-white" />
              </div>
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
            </div>
          ))}
        </div>

        <div style={{ padding: "8px 10px", borderBottom: "1px solid #ccc" }}>
          <a href="#oferta" style={{ color: "#1a4fba", fontSize: 12 }}>
            Next page »
          </a>
        </div>

        {/* Nav decorativo */}
        <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: 6, borderBottom: "1px solid #ccc" }}>
          {["YouTube Home", "Browse Videos", "My Account", "Upload"].map((item) => (
            <a key={item} href="#" style={{ color: "#1a4fba", fontSize: 12 }}>
              {item}
            </a>
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
          <a
            href="/pedido"
            style={{
              display: "inline-block",
              background: "#cc0000",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 3,
              textDecoration: "none",
            }}
          >
            Quero acessar a playlist
          </a>
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
