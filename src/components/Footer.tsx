import { MessageCircle } from "lucide-react";
import InstagramIcon, { INSTAGRAM_URL } from "./InstagramIcon";

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: INSTAGRAM_URL },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5519983153649" },
];

export default function Footer() {
  return (
    <footer className="bg-tinta px-8 py-14 text-creme">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold tracking-wide text-creme">
              PHELIPE ASSIS
            </p>
            <p className="mt-1 text-xs text-creme-2">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-creme/20 text-ouro transition-colors hover:border-ouro hover:text-champanhe"
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
