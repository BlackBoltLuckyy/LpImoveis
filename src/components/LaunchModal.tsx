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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-tinta/60 p-4 py-10 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-linha bg-branco shadow-2xl shadow-tinta/20"
      >
        <div className="relative h-80">
          <img src={launch.img} alt={launch.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-tinta/90 via-tinta/10 to-transparent" />
          <span className="absolute left-6 top-6 rounded-md bg-ouro px-3 py-1.5 text-[11px] font-bold tracking-widest text-tinta-sobre-ouro">
            LANÇAMENTO
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-branco/90 text-tinta transition-colors hover:bg-branco"
          >
            <X size={18} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-2xl font-bold text-branco">{launch.name}</h3>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-branco/85">
              <MapPin size={15} className="text-champanhe" /> {launch.location}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-linha bg-superficie px-3 py-1.5 text-xs text-tinta-2">
              <BedDouble size={15} strokeWidth={2.2} className="text-ouro-escuro" /> {launch.dorms}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-linha bg-superficie px-3 py-1.5 text-xs text-tinta-2">
              <Car size={15} strokeWidth={2.2} className="text-ouro-escuro" /> {launch.parking}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-linha bg-superficie px-3 py-1.5 text-xs text-tinta-2">
              <Ruler size={15} strokeWidth={2.2} className="text-ouro-escuro" /> {launch.area}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-tinta-2">{launch.desc}</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {launch.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-sm text-tinta">
                <span className="icon-badge h-6 w-6">
                  <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-[13px] font-semibold tracking-[3px] text-ouro-texto">
              GALERIA DE FOTOS
            </p>
            <div className="relative h-64 overflow-hidden rounded-xl bg-superficie-2">
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
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-branco/90 text-tinta transition-colors hover:bg-branco"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-branco/90 text-tinta transition-colors hover:bg-branco"
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
                      i === slide ? "w-6 bg-ouro" : "w-2 bg-linha-input"
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
            className="mt-8 flex items-center justify-center gap-2 btn-whats rounded-xl px-4 py-3.5 text-[15px] font-bold"
          >
            <MessageCircle size={19} />
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
