# EcoSol — Site institucional

Site da **EcoSol Comércio e Serviços Fotovoltaicos** (CE · MA · PI · RN), reconstruído em **Next.js 15**
a partir da LP estática `lp-nova-design-v3.html` (v3, 13/08/2026) do Builders Hub.

## Stack

- **Next.js 15** (App Router, React 19, Server Components)
- **TypeScript** em modo estrito
- **Tailwind CSS v4** — tokens de marca em `@theme`, estilos de componente em `@layer components`
- **next/font** — Sora + Inter self-hosted (sem chamada ao Google Fonts, sem CLS)
- **next/image** para o logo

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # serve o build
npm run lint     # eslint
npm run typecheck
```

## Estrutura

```
src/
  app/
    layout.tsx      fontes, metadata/OG, viewport
    page.tsx        composição das seções
    globals.css     tokens de marca + estilos de componente
  components/
    Topbar.tsx        Hero.tsx          Calculadora.tsx ("use client")
    ProvaStrip.tsx    PorQue.tsx        Clausula.tsx
    Passos.tsx        ProvaSocial.tsx   Financiamento.tsx
    Faq.tsx           CtaFinal.tsx      Footer.tsx
    CtaFlutuante.tsx  icons.tsx
  lib/
    site.ts         conteúdo e dados da empresa (fonte única de verdade)
public/
  logo-ecosol.png             logo oficial (usado no topo e no rodapé)
  logo-ecosol-transparente.png
```

Textos, endereços, financeiras, provas e depoimentos vivem em **`src/lib/site.ts`**.
Alterar lá reflete em todas as seções — não duplicar copy nos componentes.
O FAQ fica em `src/components/Faq.tsx` porque as respostas têm marcação.

## Design tokens

Definidos em `src/app/globals.css`, dentro de `@theme` — então funcionam como utilitários
Tailwind (`bg-v900`, `text-sol`, …) **e** como variáveis CSS (`var(--v900)`).

| Token | Hex | Uso |
|---|---|---|
| `v900` | `#07351F` | fundo escuro, títulos |
| `v800` | `#0B4A2C` | gradientes, botão escuro |
| `v700` | `#0F5E38` | selos, labels |
| `v500` | `#1FA662` | eyebrow, destaques |
| `v100` | `#E3F3E9` | fundo da seção de passos |
| `sol` | `#FFB520` | destaque / CTA principal |
| `sol-100` | `#FFF3D6` | chips e fundos suaves |
| `areia` | `#FBF7EE` | fundo do site |
| `wa` | `#1FB65A` | WhatsApp |

## Calculadora

`src/components/Calculadora.tsx` — única parte client-side.
Fórmula **[E] v3**, recalibrada na call S03 (07/08) com o número da Izabel:

- projeto = conta × 20 a 22 (Ceará: conta R$ 500 → R$ 10–11 mil ✓)
- parcela = média do projeto × 2,65% (financiamento em até 96 meses)
- custo em 25 anos = conta × 12 × 25

A função `estimar()` é exportada isolada, então dá pra testar sem montar o componente.

> **TODO produção:** substituir pela tabela real da simulação de 96x que a Izabel vai enviar.

## Pendências antes de publicar

Marcadas no código como `TODO produção`:

- [ ] `og:image` com foto real de obra (1200×630) e favicon
- [ ] `NEXT_PUBLIC_SITE_URL` com o domínio definitivo (usado em canonical e OG)
- [ ] Lista oficial de endereços por estado (CE·MA·PI·RN) — pendente com a Izabel
- [ ] Confirmar e-mail comercial oficial e o número de WhatsApp definitivo
- [ ] Link real da ficha do Google Meu Negócio (`empresa.linkGoogle`)
- [ ] Tabela real de financiamento 96x
- [ ] GTM/GA4/Pixel + Consent Mode v2 — só depois do Sinal Verde
      (os CTAs já carregam `data-evento="click_whatsapp" | "generate_lead" | "click_gmn"`)

## Deploy

Projeto padrão da Vercel — `npm run build` já passa. Basta apontar o repositório
e definir `NEXT_PUBLIC_SITE_URL`.
