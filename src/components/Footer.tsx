import { MessageCircle } from "lucide-react";
import InstagramIcon, { INSTAGRAM_URL } from "./InstagramIcon";

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: INSTAGRAM_URL },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5519983153649" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 px-8 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-sora text-sm font-bold tracking-wide text-white">
              PHELIPE ASSIS
            </p>
            <p className="mt-1 text-xs text-white/50">
              © {new Date().getFullYear()} Phelipe Assis Imóveis. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
