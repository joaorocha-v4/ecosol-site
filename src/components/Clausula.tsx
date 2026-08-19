import { SunRays } from "./icons";

export function Clausula() {
  return (
    <section className="secao clausula-sec center">
      <SunRays />
      <div className="wrap">
        <span className="eyebrow">O que nenhum orçamento mostra</span>
        <h2>
          Não é promessa de vendedor.
          <br />É cláusula de contrato.
        </h2>

        <div className="contrato">
          <div className="cab">CONTRATO DE PRESTAÇÃO DE SERVIÇOS — ECOSOL</div>
          <div className="linha" />
          <div className="linha curta" />
          <div className="marca">
            <span className="selo">NO CONTRATO</span>
            <p>
              «…acompanhamento pelo período de <u>10 (dez) anos</u>, incluindo inversor reserva em caso de falha, seguro
              contra sinistro e monitoramento remoto.»
            </p>
          </div>
          <div className="linha" />
          <div className="linha curta" />
        </div>

        <div className="caso">
          <div className="bola">✓</div>
          <p>
            <b>Já aconteceu de verdade:</b> inversor de cliente queimou no Maranhão. O reserva entrou enquanto a
            garantia corria — e a casa não ficou sem gerar.
          </p>
        </div>
      </div>
    </section>
  );
}
