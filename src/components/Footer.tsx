import Image from "next/image";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMERO, empresa } from "@/lib/site";

export function Footer() {
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="f-grid">
          <div>
            <a href="#" className="f-logo">
              <Image
                src="/logo-ecosol-selo.png"
                alt="EcoSol — Comércio e Serviços Fotovoltaicos"
                width={524}
                height={556}
                style={{ height: 88, width: "auto", display: "block" }}
              />
            </a>
            <p className="f-tag">A gente assina o que promete.</p>
          </div>

          <div className="f-col">
            <h4>Onde estamos</h4>
            {/* TODO produção: lista oficial de endereços por estado (CE·MA·PI·RN) — Izabel */}
            {empresa.enderecos.map((e) => (
              <p key={e}>{e}</p>
            ))}
            <p style={{ color: "rgba(255,255,255,.55)" }}>{empresa.atendimento}</p>
          </div>

          <div className="f-col">
            <h4>Fale com a gente</h4>
            <a href={`https://wa.me/${WHATSAPP_NUMERO}`}>WhatsApp {WHATSAPP_DISPLAY}</a>
            {/* TODO produção: confirmar e-mail oficial com a Izabel */}
            <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
            <a href={empresa.linkGoogle}>Avaliações no Google · Política de privacidade</a>
          </div>
        </div>

        <div className="f-cnpj">
          <span>
            {empresa.razaoSocial} · CNPJ {empresa.cnpj}
          </span>
          <span>© {new Date().getFullYear()} EcoSol</span>
        </div>
      </div>
    </footer>
  );
}
