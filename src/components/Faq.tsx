import type { ReactNode } from "react";

const perguntas: { pergunta: string; resposta: ReactNode; aberta?: boolean }[] = [
  {
    pergunta: "E se a empresa sumir, como tanta por aí?",
    aberta: true,
    resposta: (
      <>
        CNPJ desde 2020, escritórios no CE e no MA, ~300 obras — e 10 anos de pós-venda <b>em cláusula</b>. Quem
        pretende sumir não assina compromisso de década.
      </>
    ),
  },
  {
    pergunta: "Achei mais barato. Por quê?",
    resposta: (
      <>
        Compare o que está <b>escrito</b>. O mais barato costuma ser o kit instalado — sem reserva, sem seguro, sem
        ninguém depois. A diferença é ter responsável por 10 anos.
      </>
    ),
  },
  {
    pergunta: "Vale esperar mais um pouco?",
    resposta: (
      <>
        Esperar custa: a taxação de quem instala depois <b>sobe em 2027 e 2028</b>, e a tarifa subiu ~18% num ano.
        Simule e decida com número na mão.
      </>
    ),
  },
  {
    pergunta: "Meu nome está restrito. Ainda dá pra fazer?",
    resposta: (
      <>
        Muitas vezes, sim. Além do banco, trabalhamos com <b>financeiras parceiras com análise própria</b> — inclusive
        modelo de assinatura do sistema. Chama no WhatsApp que a gente verifica o seu caso, sem compromisso.
      </>
    ),
  },
  {
    pergunta: "Decido junto com minha esposa/sócio. E aí?",
    resposta: (
      <>
        Melhor! A visita é gratuita e marcamos num horário em que todos estejam — cada um pergunta direto ao nosso
        técnico.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="secao">
      <div className="wrap center">
        <span className="eyebrow">Sem letra miúda</span>
        <h2 className="titulo">As perguntas de quem está decidindo</h2>
        <div className="faq-list">
          {perguntas.map((p) => (
            <details key={p.pergunta} open={p.aberta}>
              <summary>{p.pergunta}</summary>
              <p className="resp">{p.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
