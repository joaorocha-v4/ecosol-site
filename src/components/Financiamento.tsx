import { financeiras } from "@/lib/site";

export function Financiamento() {
  return (
    <div className="wrap">
      <div className="fin">
        <div className="wrap">
          <div>
            <span className="eyebrow">Financiamento</span>
            <h2>
              Sua conta não acaba nunca. <em>A parcela acaba.</em>
            </h2>
            <p className="txt">
              O sistema entra no lugar da conta, com parcelas em até <b>96 meses</b>. Trabalhamos com o{" "}
              <b>Banco do Nordeste (FNE)</b> — que pela linha premium traz módulos de série superior — e com uma rede de
              financeiras parceiras: a gente busca a linha que cabe no seu caso.
            </p>
            <div className="badges">
              {financeiras.map((f) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="comp">
            <div className="lin conta">
              <div className="lbl">
                <span>Conta de luz</span>
                <span className="val">para sempre</span>
              </div>
              <div className="bar">
                <i />
              </div>
            </div>
            <div className="lin parc">
              <div className="lbl">
                <span>Parcela do sistema</span>
                <span className="val">com data pra acabar</span>
              </div>
              <div className="bar">
                <i />
              </div>
            </div>
            <p className="nota">Simule acima e receba os números do seu caso por escrito.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
