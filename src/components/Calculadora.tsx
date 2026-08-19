"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const MIN = 200;
const MAX = 3000;
const PADRAO = 950;

/**
 * Calculadora [E] v3 — recalibrada na call S03 (07/08) com o número da Izabel:
 *   Ceará, conta R$ 500/mês → projeto R$ 10–11 mil ⇒ fator 20–22× a conta.
 *   Parcela: financiamento mais longo possível (até 96 meses; média 60–84) —
 *   ex. do João na call: projeto 10–11k em ~8 anos ⇒ R$ 260–300/mês. Fator 2,65% bate com isso.
 *
 * TODO produção: substituir pela tabela REAL da simulação de 96x que a Izabel vai enviar.
 */
export function estimar(conta: number) {
  const projetoMin = Math.round((conta * 20) / 500) * 500;
  const projetoMax = Math.round((conta * 22) / 500) * 500;
  const parcela = Math.round((((projetoMin + projetoMax) / 2) * 0.0265) / 10) * 10;
  return {
    projetoMin,
    projetoMax,
    parcela,
    contaEm25Anos: conta * 12 * 25,
  };
}

const fmt = (n: number) => n.toLocaleString("pt-BR");

export function Calculadora() {
  const [conta, setConta] = useState(PADRAO);
  const { projetoMin, projetoMax, parcela, contaEm25Anos } = useMemo(() => estimar(conta), [conta]);
  const pct = ((conta - MIN) / (MAX - MIN)) * 100;

  const mensagem = `Olá! Fiz a simulação no site: minha conta é de uns R$ ${fmt(
    conta,
  )}/mês. Quero receber a simulação exata do meu projeto.`;

  return (
    <div className="calc" id="simular">
      <h3>⚡ Simule seu projeto</h3>
      <p className="passo">Arraste e veja na hora — leva 1 minuto</p>

      <div className="campo-conta">
        <label htmlFor="slider">Minha conta de luz por mês</label>
        <div className="valor-conta">
          <small>R$</small> <span>{fmt(conta)}</span>
        </div>
        <input
          type="range"
          id="slider"
          min={MIN}
          max={MAX}
          step={50}
          value={conta}
          onChange={(e) => setConta(Number(e.target.value))}
          aria-label="Valor da conta de luz mensal"
          style={{ ["--pct" as string]: `${pct}%` }}
        />
        <div className="faixa">
          <span>R$ 200</span>
          <span>R$ 3.000+</span>
        </div>
      </div>

      <div className="resultados">
        <div className="res destaque">
          <div className="l">Parcela estimada*</div>
          <div className="v">R$ {fmt(parcela)}/mês</div>
          <div className="s">cabe no lugar da conta</div>
        </div>
        <div className="res">
          <div className="l">Projeto estimado*</div>
          <div className="v">
            R$ {fmt(Math.round(projetoMin / 1000))}–{fmt(Math.round(projetoMax / 1000))} mil
          </div>
          <div className="s">instalado e homologado</div>
        </div>
        <div className="res total">
          <div className="l">Se nada mudar, em 25 anos você paga</div>
          <div className="v">R$ {fmt(contaEm25Anos)} de conta de luz</div>
        </div>
      </div>

      {/* TODO produção: nº comercial oficial + evento generate_lead no GA4/Pixel */}
      <a className="btn btn-wa" href={whatsappLink(mensagem)} data-evento="generate_lead">
        <WhatsAppIcon />
        Receber simulação exata no WhatsApp
      </a>
      <p className="aviso">
        *Estimativa com base em projetos EcoSol na região, com financiamento em até 96 meses. Valor exato sai na
        proposta, após visita técnica gratuita — sem compromisso.
      </p>
    </div>
  );
}
