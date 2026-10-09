import { useState } from "react";
import { MapPin, BedDouble, Car, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
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
    leisure: "Completo",
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
    leisure: "Completo",
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
    leisure: "Rooftop",
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
    <section id="lancamentos" className="launches px-4 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <p className="launches-eyebrow mb-4 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-ouro-texto">
              Lançamentos em Limeira
            </p>
            <h2 className="text-[clamp(34px,3.6vw,54px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-tinta">
              Grandes oportunidades
              <br />
              <span className="font-destaque text-[1.16em] font-normal italic tracking-normal text-bronze">
                ao seu alcance
              </span>
            </h2>
          </div>
          <a
            href="#contato"
            className="launches-all btn-metal inline-flex min-h-[50px] items-center gap-2.5 rounded-full px-6 py-[15px] text-[14.5px] font-bold"
          >
            Ver todos os lançamentos
            <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-7">
          {launches.map((l) => {
            const specs = [
              { icon: BedDouble, value: l.dorms.replace(/ dorms$/, ""), label: "Dormitórios" },
              { icon: Car, value: l.parking.replace(/ vagas$/, ""), label: "Vagas" },
              { icon: Sparkles, value: l.leisure, label: "Lazer" },
            ];

            return (
              <article key={l.name} className="launch-card flex flex-col overflow-hidden">
                <div className="launch-media relative aspect-[16/10] overflow-hidden">
                  <img src={l.img} alt={`Fachada do ${l.name}`} className="h-full w-full object-cover" />
                  <div className="launch-scrim absolute inset-0" aria-hidden="true" />
                  <span className="absolute left-4 top-4 rounded-full bg-ouro px-[13px] py-[7px] text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-tinta-sobre-ouro">
                    Lançamento
                  </span>
                  <div className="absolute inset-x-5 bottom-4">
                    <h3 className="text-[25px] font-bold leading-tight text-branco">{l.name}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] font-medium text-branco/85">
                      <MapPin size={15} className="text-champanhe" aria-hidden="true" />
                      {l.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 px-[22px] pb-6 pt-[22px]">
                  <ul className="grid grid-cols-3 border-t border-linha pt-5">
                    {specs.map(({ icon: Icon, value, label }, i) => (
                      <li
                        key={label}
                        className={`flex flex-col gap-1.5 ${i > 0 ? "border-l border-linha pl-4" : ""} ${i < specs.length - 1 ? "pr-4" : ""}`}
                      >
                        <span className="icon-badge icon-badge--sm mb-1">
                          <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                        <span className="text-[15px] font-bold text-tinta">{value}</span>
                        <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-tinta-3">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-2.5">
                    <a
                      href={waLink(l.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whats flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-xl px-4 text-[14.5px] font-extrabold"
                    >
                      <MessageCircle size={19} strokeWidth={2.2} aria-hidden="true" />
                      Consultar no WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => openLaunch(l)}
                      aria-label={`Ver detalhes do ${l.name}`}
                      className="launch-details flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl border border-linha-forte text-ouro-texto"
                    >
                      <ArrowRight size={19} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
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
