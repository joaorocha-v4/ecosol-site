/**
 * Fonte única de verdade do conteúdo do site.
 * Alterar aqui reflete em todas as seções — não duplicar texto nos componentes.
 *
 * Base: LP v3 (13/08/2026), com os ajustes da call S03 de 07/08 já aplicados.
 */

export const WHATSAPP_NUMERO = "5585988627319";
export const WHATSAPP_DISPLAY = "(85) 9 8862-7319";

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const empresa = {
  nome: "EcoSol",
  razaoSocial: "ECOSOL COMÉRCIO E SERVIÇOS FOTOVOLTAICOS LTDA",
  cnpj: "39.478.327/0001-09",
  email: "ecosolcomercioeservicos@gmail.com",
  regioes: "CEARÁ · MARANHÃO · PIAUÍ · RN",
  atendimento: "Atendimento em CE · MA · PI · RN",
  // TODO produção: substituir pela LISTA OFICIAL de endereços por estado (pedido da call de 07/08 — Izabel)
  enderecos: ["Rua José Franco, 1959 · Pindoretama-CE", "Centro · Cururupu-MA"],
  // TODO produção: link real da ficha do Google Meu Negócio
  linkGoogle: "#",
} as const;

export const provas = [
  { destaque: "5,0 no Google", legenda: "44 avaliações", estrelas: true },
  { destaque: "~300 obras", legenda: "instaladas e homologadas" },
  { destaque: "10 anos", legenda: "de pós-venda em contrato" },
  { destaque: "Desde 2020", legenda: "escritórios no CE e no MA" },
] as const;

export const diferenciais = [
  {
    icone: "reserva",
    titulo: "Inversor reserva",
    texto: "Se o seu falhar, instalamos outro. Sua energia não para.",
  },
  {
    icone: "escudo",
    titulo: "Tudo por escrito",
    texto: "Pós-venda de 10 anos, seguro e monitoramento em cláusula.",
  },
  {
    icone: "pin",
    titulo: "Perto de você",
    texto: "Equipe própria e escritórios no CE e no MA. Obra na sua cidade.",
  },
] as const;

export const passos = [
  { n: 1, titulo: "Simulação", prazo: "1 minuto" },
  { n: 2, titulo: "Visita + proposta", prazo: "até 72h" },
  { n: 3, titulo: "Instalação", prazo: "1 a 3 dias" },
  { n: 4, titulo: "10 anos com a gente", prazo: "no contrato" },
] as const;

export const depoimentos = [
  {
    texto:
      "Cliente há mais de 2 anos acionou a garantia, recebeu o inversor reserva — e agora está trocando o sistema por um híbrido com bateria. De novo com a EcoSol.",
    quem: "Pós-venda na prática · Maranhão",
  },
  {
    texto:
      "Na entrega, mostramos o QR das avaliações na frente do cliente. Quem tem pós-venda de verdade não tem medo de avaliação.",
    quem: "Prática da equipe · toda instalação",
  },
] as const;

/** Lista oficial recebida em 13/08. OMNI não é parceira. */
export const financeiras = [
  "🏦 Banco do Nordeste · FNE",
  "BV",
  "Santander",
  "Solfácil",
  "Sol Agora",
  "Connect Pag",
  "✓ A maioria dos nossos clientes financia",
] as const;
