import { MapPin, BedDouble, Car, Sparkles, ArrowRight } from "lucide-react";
import predio1 from "../assets/predio1.svg";
import predio2 from "../assets/predio2.svg";
import predio3 from "../assets/predio3.svg";

interface Launch {
  img: string;
  name: string;
  location: string;
  dorms: string;
  parking: string;
  leisure: string;
  price: string;
}

const launches: Launch[] = [
  {
    img: predio1,
    name: "Reserva Prime",
    location: "Jardim América - São Paulo/SP",
    dorms: "2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Lazer completo",
    price: "450.000",
  },
  {
    img: predio2,
    name: "Vista do Parque",
    location: "Vila Nova Conceição - São Paulo/SP",
    dorms: "1, 2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Lazer completo",
    price: "680.000",
  },
  {
    img: predio3,
    name: "Alto do Vale",
    location: "Barra Funda - São Paulo/SP",
    dorms: "2 e 3 dorms",
    parking: "1 a 2 vagas",
    leisure: "Rooftop e lazer",
    price: "520.000",
  },
];

export default function Launches() {
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
              className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111c2a] transition-colors hover:border-gold/40"
            >
              <div className="relative h-48">
                <img src={l.img} alt={l.name} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-md bg-gradient-to-b from-gold-light to-gold-dark px-3 py-1.5 text-[11px] font-bold tracking-widest text-[#2a1c07]">
                  LANÇAMENTO
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
                <div className="mt-auto flex items-end justify-between pt-6">
                  <div>
                    <p className="text-xs text-white/55">A partir de</p>
                    <p className="mt-0.5 font-sora font-bold">
                      R$ <span className="text-2xl">{l.price}</span>
                    </p>
                  </div>
                  <a href="#contato" className="inline-flex items-center gap-1.5 border-b border-gold pb-0.5 text-sm font-semibold text-gold">
                    Saiba mais <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
