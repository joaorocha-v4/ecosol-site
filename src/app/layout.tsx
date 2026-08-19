import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// TODO produção: trocar pelo domínio definitivo antes de publicar.
// Ordem: variável explícita → domínio de produção da Vercel → fallback.
// `||` (e não `??`) de propósito: na Vercel a variável pode chegar como string vazia.
const FALLBACK_URL = "https://ecosolcomercioeservicos.com.br";

function resolveSiteUrl(): string {
  const candidatos = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    FALLBACK_URL,
  ];

  for (const candidato of candidatos) {
    const valor = candidato?.trim();
    if (!valor) continue;
    try {
      return new URL(valor).toString();
    } catch {
      // valor inválido (ex.: domínio sem protocolo) — tenta o próximo
    }
  }
  return FALLBACK_URL;
}

const SITE_URL = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EcoSol | Energia solar com 10 anos de pós-venda no contrato",
  description:
    "Simule seu projeto de energia solar em 1 minuto. 10 anos de pós-venda no contrato: inversor reserva e seguro. ★ 5,0 no Google. CE · MA · PI · RN.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "EcoSol",
    title: "EcoSol | A solar que não te deixa na mão",
    description:
      "Simule seu projeto em 1 minuto. 10 anos de pós-venda no contrato. ★ 5,0 no Google (44 avaliações).",
    // TODO produção: og:image com foto real de obra 1200×630
  },
};

export const viewport: Viewport = {
  themeColor: "#07351F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
