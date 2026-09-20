import { Sparkles, HeartHandshake, LifeBuoy, Building2 } from "lucide-react";
import corretor from "../assets/corretor.jpg";

interface Advantage {
  icon: typeof Sparkles;
  title: string;
}

const advantages: Advantage[] = [
  { icon: Sparkles, title: "Acesso aos melhores lançamentos" },
  { icon: HeartHandshake, title: "Atendimento personalizado" },
  { icon: LifeBuoy, title: "Suporte em todas as etapas" },
  { icon: Building2, title: "Especialista em imóveis na planta" },
];

export default function WhyBuy() {
  return (
    <section id="vantagens" className="bg-cream px-8 py-20 text-navy">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-[13px] font-semibold tracking-[3px] text-gold-dark">
            POR QUE COMPRAR COMIGO?
          </p>
          <h2 className="font-sora text-3xl font-bold leading-tight md:text-[2.4rem]">
            Mais do que um corretor, um parceiro no seu sonho.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
            Acompanho cada cliente de perto, do primeiro contato às chaves na
            mão, garantindo clareza, segurança e as melhores condições em
            cada negociação.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e9dfc9]">
                  <advantage.icon size={20} className="text-gold-dark" />
                </span>
                <p className="pt-2.5 text-sm font-semibold leading-snug">
                  {advantage.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-xl shadow-black/10">
          <img
            src={corretor}
            alt="Phelipe Assis com clientes na entrega das chaves"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent p-6">
            <p className="font-sora text-lg font-semibold text-white">
              Lançamentos com alto potencial de valorização
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
