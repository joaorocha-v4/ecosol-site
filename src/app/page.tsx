import { Clausula } from "@/components/Clausula";
import { CtaFinal } from "@/components/CtaFinal";
import { CtaFlutuante } from "@/components/CtaFlutuante";
import { Faq } from "@/components/Faq";
import { Financiamento } from "@/components/Financiamento";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Passos } from "@/components/Passos";
import { PorQue } from "@/components/PorQue";
import { ProvaSocial } from "@/components/ProvaSocial";
import { ProvaStrip } from "@/components/ProvaStrip";
import { Topbar } from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <ProvaStrip />
        <PorQue />
        <Clausula />
        <Passos />
        <ProvaSocial />
        <Financiamento />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <CtaFlutuante />
    </>
  );
}
