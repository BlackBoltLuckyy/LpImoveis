import { useState } from "react";
import { MapPin, BedDouble, Car, Sparkles, ArrowRight, MessageCircle, Eye } from "lucide-react";
import predio1 from "../assets/predio1.jpg";
import predio2 from "../assets/predio2.jpg";
import predio3 from "../assets/predio3.jpg";
import varanda from "../assets/varanda.svg";
import skyline from "../assets/skyline.svg";
import LaunchModal from "./LaunchModal";

export interface Launch {
  img: string;
  name: string;
  location: string;
  dorms: string;
  parking: string;
  leisure: string;
  area: string;
  desc: string;
  features: string[];
  gallery: string[];
}

const WHATSAPP = "5519983153649"; // número real do corretor

const waLink = (name: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Olá Phelipe! Tenho interesse no ${name}. Pode me passar mais informações?`
  )}`;

const launches: Launch[] = [
  {
    img: predio1,
    name: "Horizon Limeira",
    location: "Limeira/SP",
    dorms: "2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Lazer completo",
    area: "58 a 92 m²",
    desc: "Apartamentos plantejados para famílias que buscam conforto e praticidade, com plantas flexíveis e acabamentos de alto padrão em uma das regiões mais valorizadas de Limeira.",
    features: [
      "Piscina adulto e infantil",
      "Academia equipada",
      "Salão de festas",
      "Playground",
      "Portaria 24h",
      "Espaço pet",
    ],
    gallery: [predio1, varanda, skyline],
  },
  {
    img: predio2,
    name: "Grand Palazzo",
    location: "Limeira/SP",
    dorms: "1, 2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Lazer completo",
    area: "45 a 98 m²",
    desc: "Empreendimento com arquitetura sofisticada e ampla área de lazer entre torres, pensado para quem valoriza qualidade de vida sem abrir mão da localização estratégica.",
    features: [
      "Piscina com deck molhado",
      "Academia completa",
      "Coworking",
      "Quadra poliesportiva",
      "Bicicletário",
      "Segurança 24h",
    ],
    gallery: [predio2, varanda, skyline],
  },
  {
    img: predio3,
    name: "Residencial Lunare",
    location: "Limeira/SP",
    dorms: "2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Rooftop e lazer",
    area: "52 a 87 m²",
    desc: "Torres modernas com rooftop exclusivo e vista privilegiada, unindo design contemporâneo e infraestrutura completa de lazer para o dia a dia da sua família.",
    features: [
      "Rooftop com vista panorâmica",
      "Piscina com raia",
      "Academia",
      "Salão gourmet",
      "Brinquedoteca",
      "Portaria 24h",
    ],
    gallery: [predio3, varanda, skyline],
  },
];

export default function Launches() {
  const [selected, setSelected] = useState<Launch | null>(null);
  const [slide, setSlide] = useState(0);

  const openLaunch = (launch: Launch) => {
    setSelected(launch);
    setSlide(0);
  };

  return (
    <section id="lancamentos" className="bg-navy-800 px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[13px] font-semibold tracking-[3px] text-gold">
              LANÇAMENTOS EM DESTAQUE
            </p>
            <h2 className="font-sora text-3xl font-bold leading-tight md:text-[2.6rem]">
              Grandes oportunidades
              <br />
              ao seu alcance
            </h2>
          </div>
          <a href="#contato" className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light">
            Ver todos os lançamentos <ArrowRight size={17} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {launches.map((l) => (
            <article
              key={l.name}
              onClick={() => openLaunch(l)}
              className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111c2a] transition-colors hover:border-gold/40"
            >
              <div className="relative h-48">
                <img src={l.img} alt={l.name} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-md bg-gradient-to-b from-gold-light to-gold-dark px-3 py-1.5 text-[11px] font-bold tracking-widest text-[#2a1c07]">
                  LANÇAMENTO
                </span>
                <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-navy/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <Eye size={13} className="text-gold" />
                  Ver detalhes
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-sora text-xl font-semibold">{l.name}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                  <MapPin size={15} className="text-gold" /> {l.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <BedDouble size={15} className="text-gold" />
                    {l.dorms}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Car size={15} className="text-gold" />
                    {l.parking}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={15} className="text-gold" />
                    {l.leisure}
                  </span>
                </div>
                <a
                  href={waLink(l.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[#1fab5a] px-4 py-3 font-sora text-[15px] font-bold text-white transition-colors hover:bg-[#189a4f]"
                >
                  <MessageCircle size={19} />
                  Consultar no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <LaunchModal
          launch={selected}
          slide={slide}
          setSlide={setSlide}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
