import { empresa } from "@/lib/site";
import { Calculadora } from "./Calculadora";
import { CheckIcon, SunRays } from "./icons";

export function Hero() {
  return (
    <section className="hero">
      <SunRays />
      <div className="wrap">
        <div>
          <span className="tag-regiao">
            <i />
            {empresa.regioes}
          </span>
          <h1>
            A solar que <em>não te deixa na mão.</em>
          </h1>
          <p className="sub">
            Projeto, instalação e <b>10 anos de pós-venda no contrato</b> — com inversor reserva e seguro inclusos.
          </p>
          <div className="selo-contrato">
            <CheckIcon />
            Escrito em contrato. Não em conversa.
          </div>
        </div>

        <Calculadora />
      </div>
    </section>
  );
}
