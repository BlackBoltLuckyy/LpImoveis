import { useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  BedDouble,
  Car,
  Ruler,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type { Launch } from "./Launches";

const WHATSAPP = "5519983153649";

const waLink = (name: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Olá Phelipe! Tenho interesse no ${name}. Pode me passar mais informações?`
  )}`;

interface LaunchModalProps {
  launch: Launch;
  slide: number;
  setSlide: (slide: number) => void;
  onClose: () => void;
}

export default function LaunchModal({ launch, slide, setSlide, onClose }: LaunchModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const total = launch.gallery.length;
  const prevSlide = () => setSlide((slide - 1 + total) % total);
  const nextSlide = () => setSlide((slide + 1) % total);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-900/80 p-4 py-10 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111c2a] shadow-2xl shadow-black/40"
      >
        <div className="relative h-80">
          <img src={launch.img} alt={launch.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
          <span className="absolute left-6 top-6 rounded-md bg-gradient-to-b from-gold-light to-gold-dark px-3 py-1.5 text-[11px] font-bold tracking-widest text-[#2a1c07]">
            LANÇAMENTO
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-navy/70 text-white transition-colors hover:bg-navy"
          >
            <X size={18} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-sora text-2xl font-bold text-white">{launch.name}</h3>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-white/75">
              <MapPin size={15} className="text-gold" /> {launch.location}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <BedDouble size={14} className="text-gold" /> {launch.dorms}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <Car size={14} className="text-gold" /> {launch.parking}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <Ruler size={14} className="text-gold" /> {launch.area}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-white/70">{launch.desc}</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {launch.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-sm text-white/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Check size={12} className="text-gold" />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-[13px] font-semibold tracking-[3px] text-gold">
              GALERIA DE FOTOS
            </p>
            <div className="relative h-64 overflow-hidden rounded-xl bg-black/20">
              {launch.gallery.map((photo, i) => (
                <img
                  key={photo}
                  src={photo}
                  alt={`${launch.name} - foto ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {total > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-white transition-colors hover:bg-navy"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/70 text-white transition-colors hover:bg-navy"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {total > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {launch.gallery.map((photo, i) => (
                  <button
                    key={photo}
                    onClick={() => setSlide(i)}
                    aria-label={`Ir para foto ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === slide ? "w-6 bg-[#d9b578]" : "w-2 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <a
            href={waLink(launch.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#1fab5a] px-4 py-3.5 font-sora text-[15px] font-bold text-white transition-colors hover:bg-[#189a4f]"
          >
            <MessageCircle size={19} />
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
