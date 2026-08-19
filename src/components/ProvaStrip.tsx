import { provas } from "@/lib/site";

export function ProvaStrip() {
  return (
    <div className="prova-strip wrap">
      <div className="card">
        {provas.map((p) => (
          <div className="pi" key={p.destaque}>
            {"estrelas" in p && p.estrelas ? <span className="stars">★★★★★</span> : null}
            <b>{p.destaque}</b>
            <span>{p.legenda}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
