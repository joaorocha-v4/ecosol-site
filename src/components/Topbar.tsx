import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Topbar() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-ecosol.png"
            alt="EcoSol — Comércio e Serviços Fotovoltaico"
            width={197}
            height={96}
            priority
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </a>
        <a
          className="btn btn-wa"
          href={whatsappLink("Olá! Quero falar sobre energia solar")}
          data-evento="click_whatsapp"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
