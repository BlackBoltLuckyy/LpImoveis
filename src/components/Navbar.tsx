import { Home, MessageCircle } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Lançamentos", href: "#lancamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5511999999999";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/60">
            <Home size={20} className="text-gold" strokeWidth={1.6} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sora text-base font-bold tracking-wide text-white">
              PHELIPE ASSIS
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[3px] text-gold">
              CORRETOR DE IMÓVEIS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
        >
          <MessageCircle size={17} />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
