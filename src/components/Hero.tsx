import { type FormEvent, useState } from "react";
import { Rocket, BadgePercent, ShieldCheck, User, Phone, Mail, Home as HomeIcon } from "lucide-react";
import heroBg from "../assets/hero-bg.svg";

interface MiniFeature {
  icon: typeof Rocket;
  label: string;
}

const miniFeatures: MiniFeature[] = [
  { icon: Rocket, label: "Lançamentos em primeira mão" },
  { icon: BadgePercent, label: "Condições especiais" },
  { icon: ShieldCheck, label: "Segurança em todo o processo" },
];

const interestOptions = [
  "Apartamento na planta",
  "Apartamento pronto",
  "Casa",
  "Investimento",
];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-20">
        <img src={heroBg} alt="Fachada de prédio ao entardecer" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-transparent to-navy/60" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-[13px] font-semibold tracking-[3px] text-gold">
            LANÇAMENTOS IMOBILIÁRIOS
          </p>
          <h1 className="font-sora text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-[3.4rem]">
            O seu próximo <span className="text-gold">investimento</span> começa aqui.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Conte com um atendimento próximo e especializado para encontrar o
            imóvel ideal, com as melhores condições e total segurança em cada
            etapa da negociação.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {miniFeatures.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2.5 text-sm text-white/85">
                <feature.icon size={18} className="shrink-0 text-gold" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-9 font-script text-3xl text-gold">
            Seu futuro, no lugar certo.
          </p>
        </div>

        <div id="contato" className="rounded-2xl border border-white/10 bg-navy/60 p-7 shadow-2xl shadow-black/50 backdrop-blur-lg sm:p-8">
          <h2 className="font-sora text-2xl font-bold">Agende uma visita</h2>
          <p className="mt-1.5 text-sm text-white/60">
            Preencha os dados e entraremos em contato rapidamente.
          </p>

          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="relative block">
              <User size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
              />
            </label>

            <label className="relative block">
              <Phone size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
              />
            </label>

            <label className="relative block">
              <Mail size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input
                type="email"
                name="email"
                placeholder="E-mail (opcional)"
                className="w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
              />
            </label>

            <label className="relative block">
              <HomeIcon size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <select
                name="interest"
                required
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-colors focus:border-gold [&>option]:text-navy"
              >
                <option value="" disabled>
                  Qual o seu interesse?
                </option>
                {interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-gradient-to-b from-gold-light to-gold-dark py-3.5 text-sm font-bold tracking-wide text-[#2a1c07] transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              {submitted ? "Recebemos seu pedido!" : "Quero agendar uma visita"}
            </button>

            <p className="text-center text-xs text-white/50">
              Seus dados estão seguros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
