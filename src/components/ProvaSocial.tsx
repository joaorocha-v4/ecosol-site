import { depoimentos, empresa } from "@/lib/site";

export function ProvaSocial() {
  return (
    <section className="secao">
      <div className="wrap center">
        <span className="eyebrow">Quem já instalou</span>
        <h2 className="titulo">Nota máxima de quem viu a promessa virar prática</h2>

        <div className="prova-grid">
          <div className="g-nota">
            <div className="n">5,0</div>
            <div className="stars">★★★★★</div>
            <p>44 avaliações no Google — quase todas com comentário.</p>
            {/* TODO produção: link real da ficha GMN */}
            <a className="btn" href={empresa.linkGoogle} data-evento="click_gmn">
              Ler no Google →
            </a>
          </div>

          <div className="dep-col">
            {depoimentos.map((d) => (
              <div className="dep" key={d.quem}>
                <span className="aspas">“</span>
                <p>{d.texto}</p>
                <div className="quem">{d.quem}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
