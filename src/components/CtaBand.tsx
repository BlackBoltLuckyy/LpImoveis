import { MessageCircle } from "lucide-react";
import skyline from "../assets/skyline.svg";

const WHATSAPP_URL = "https://wa.me/5511999999999";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden px-8 py-24">
      <div className="absolute inset-0 -z-20">
        <img src={skyline} alt="Skyline noturno da cidade" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-navy/80" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[13px] font-semibold tracking-[3px] text-gold">
          NÃO PERCA ESSA OPORTUNIDADE
        </p>
        <h2 className="font-sora text-3xl font-bold leading-tight md:text-[2.6rem]">
          Vamos encontrar o lançamento ideal para você?
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-gradient-to-b from-gold-light to-gold-dark px-8 py-3.5 text-sm font-bold tracking-wide text-[#2a1c07] transition-transform hover:scale-[1.02]"
          >
            Agendar visita agora
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3fce6c] transition-colors hover:text-[#5be085]"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
