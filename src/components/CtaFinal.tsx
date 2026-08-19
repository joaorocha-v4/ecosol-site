import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function CtaFinal() {
  return (
    <div className="wrap final">
      <div className="card">
        <h2>
          Sua conta de luz <em>não precisa ser pra sempre.</em>
        </h2>
        <p>Simulação gratuita · resposta no mesmo dia · proposta por escrito</p>
        <div className="ctas">
          <a className="btn btn-sol" href="#simular">
            ⚡ Simular meu projeto
          </a>
          <a
            className="btn btn-wa"
            href={whatsappLink("Olá! Quero uma simulação de energia solar")}
            data-evento="click_whatsapp"
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
