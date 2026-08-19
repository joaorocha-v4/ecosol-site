import { diferenciais } from "@/lib/site";
import { iconesDiferencial } from "./icons";

export function PorQue() {
  return (
    <section className="secao">
      <div className="wrap center">
        <span className="eyebrow">Por que a EcoSol</span>
        <h2 className="titulo">O barato dos outros sai caro quando o inversor para.</h2>
        <div className="pq-grid">
          {diferenciais.map((d) => (
            <div className="pq" key={d.titulo}>
              <div className="ico">{iconesDiferencial[d.icone]}</div>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
