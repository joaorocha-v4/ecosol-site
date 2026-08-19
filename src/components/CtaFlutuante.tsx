import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function CtaFlutuante() {
  return (
    <>
      {/* TODO produção: confirmar nº comercial oficial (decisão pendente) */}
      <a className="wa-float" href={whatsappLink("Olá! Quero uma simulação de energia solar")} aria-label="WhatsApp">
        <WhatsAppIcon />
        Falar com a EcoSol
      </a>

      <div className="mob-bar">
        <a className="btn btn-sol" href="#simular">
          ⚡ Simular meu projeto
        </a>
        <a className="btn btn-wa" href={whatsappLink("Olá! Quero uma simulação")} aria-label="WhatsApp">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
}
