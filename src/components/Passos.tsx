import { passos } from "@/lib/site";

export function Passos() {
  return (
    <section className="secao passos-sec center">
      <div className="wrap">
        <span className="eyebrow">Simples assim</span>
        <h2 className="titulo">Da simulação ao sol trabalhando por você</h2>
        <div className="passos">
          {passos.map((p) => (
            <div className="ps" key={p.n}>
              <div className="n">{p.n}</div>
              <h3>{p.titulo}</h3>
              <span className="prazo">{p.prazo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
