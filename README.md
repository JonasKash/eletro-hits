# Hits 2010 — Mix Completo

Página de vendas + checkout Pix para o Mix Hits 2010: 50 faixas encadeadas em uma única
sequência de mais de 2 horas, entregue via playlist (Spotify, Deezer, SoundCloud) e arquivos
.mp3.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Server Action gerando Pix Copia e Cola (`lib/pix.ts`) — mesma chave/CNPJ dos projetos
  avestra-tag-nfc e euacheiapromocao
- Confirmação de pedido via WhatsApp

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy

Feito pela skill `deploy` do projeto (GitHub + Vercel).
