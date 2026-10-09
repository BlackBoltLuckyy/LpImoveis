import { ArrowRight, Award, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import InstagramIcon, { INSTAGRAM_URL } from "./InstagramIcon";
import "./CtaBand.css";

const WHATSAPP_URL = "https://wa.me/5519983153649";

const seals = [
  { icon: ShieldCheck, label: "Transparência" },
  { icon: MapPin, label: "Atendimento em Limeira" },
  { icon: Award, label: "Experiência e credibilidade" },
];

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface CityWindow {
  x: number;
  y: number;
  opacity: number;
}

const CITY_W = 1440;
const CITY_H = 330;

// Gerador pseudoaleatório com semente fixa: a silhueta é sempre a mesma.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildRow(rand: () => number, minW: number, maxW: number, minH: number, maxH: number, gap: number) {
  const rects: Rect[] = [];
  let x = -20;
  while (x < CITY_W) {
    const w = minW + rand() * (maxW - minW);
    const h = minH + rand() * (maxH - minH);
    rects.push({ x, y: CITY_H - h, w, h });
    x += w + gap * rand();
  }
  return rects;
}

function buildWindows(rand: () => number, buildings: Rect[], density: number) {
  const windows: CityWindow[] = [];
  for (const b of buildings) {
    for (let y = b.y + 18; y + 12 < CITY_H - 10; y += 26) {
      for (let x = b.x + 14; x + 7 < b.x + b.w - 10; x += 19) {
        const roll = rand();
        if (roll < density * 0.18) windows.push({ x, y, opacity: 0.5 });
        else if (roll < density) windows.push({ x, y, opacity: 0.26 });
      }
    }
  }
  return windows;
}

const rand = seeded(20251009);
const backRow = buildRow(rand, 46, 92, 190, 300, 26);
const frontRow = buildRow(rand, 96, 176, 86, 168, 14);
const backWindows = buildWindows(rand, backRow, 0.12);
const frontWindows = buildWindows(rand, frontRow, 0.2);

function CitySkyline() {
  return (
    <svg
      className="cta__city"
      viewBox={`0 0 ${CITY_W} ${CITY_H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="cta-city-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A0E13" />
          <stop offset="0.55" stopColor="#0A0E13" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="#0E151D">
        {backRow.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} />
        ))}
      </g>
      <g fill="#E3B778">
        {backWindows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width={7} height={12} opacity={w.opacity} />
        ))}
      </g>
      <g fill="#131C25">
        {frontRow.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} />
        ))}
      </g>
      <g fill="#E3B778">
        {frontWindows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width={7} height={12} opacity={w.opacity} />
        ))}
      </g>
      <rect width={CITY_W} height={CITY_H} fill="url(#cta-city-fade)" />
    </svg>
  );
}

export default function CtaBand() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <CitySkyline />

      <div className="cta__inner">
        <p className="cta__eyebrow">Não perca essa oportunidade</p>
        <h2 id="cta-title" className="cta__title">
          Vamos encontrar o lançamento ideal para você?
        </h2>

        <div className="cta__actions">
          <a href="#contato" className="cta__btn cta__btn--primary">
            Agendar visita agora
            <ArrowRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta__btn cta__btn--whatsapp">
            <MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="cta__instagram">
          <InstagramIcon size={17} />
          @phelipeassis_corretor
        </a>

        <ul className="cta__seals">
          {seals.map(({ icon: Icon, label }) => (
            <li key={label} className="cta__seal">
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
