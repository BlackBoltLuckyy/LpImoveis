import { useState } from "react";
import { Home, Menu, MessageCircle, X } from "lucide-react";
import InstagramIcon, { INSTAGRAM_URL } from "./InstagramIcon";
import "./Navbar.css";

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

const WHATSAPP_URL = "https://wa.me/5519983153649";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" className="brand">
            <span className="brand__mark">
              <Home size={21} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="brand__text">
              <span className="brand__name">PHELIPE ASSIS</span>
              <span className="brand__role">CORRETOR DE IMÓVEIS</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Phelipe Assis"
              className="icon-btn"
            >
              <InstagramIcon size={18} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-outline">
              <MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <button
              type="button"
              className="icon-btn menu-toggle"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={20} strokeWidth={1.7} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={1.7} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav id="mobile-nav" className="mobile-nav" aria-label="Menu" hidden={!menuOpen}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mobile-bar">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-outline">
          <MessageCircle size={18} strokeWidth={1.7} aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </div>
    </>
  );
}
