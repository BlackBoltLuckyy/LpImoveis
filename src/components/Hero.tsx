import { type SubmitEvent, useState } from "react";
import { ArrowDown, ArrowRight, BadgePercent, Lock, Rocket, ShieldCheck } from "lucide-react";
import "./Hero.css";

interface Chip {
  icon: typeof Rocket;
  label: string;
}

const chips: Chip[] = [
  { icon: Rocket, label: "Lançamentos em primeira mão" },
  { icon: BadgePercent, label: "Condições especiais" },
  { icon: ShieldCheck, label: "Segurança em todo o processo" },
];

const interestOptions = [
  "Apartamento na planta",
  "Casa em condomínio",
  "Terreno",
  "Investimento para renda",
  "Ainda estou pesquisando",
];

const WHATSAPP = "5519983153649"; // número real do corretor
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const lines = [
      "Olá Phelipe! Gostaria de agendar uma visita.",
      `Nome: ${data.get("name") as string}`,
      `WhatsApp: ${data.get("whatsapp") as string}`,
      `Procuro: ${data.get("interest") as string}`,
    ];

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Lançamentos imobiliários · Limeira</p>
          <h1 className="hero__title">
            O seu próximo <em>investimento</em> começa aqui.
          </h1>
          <p className="hero__lead">
            Atendimento próximo e especializado para você encontrar o imóvel certo — com as
            melhores condições do mercado e segurança em cada etapa da negociação.
          </p>

          <ul className="chips">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="chip">
                <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <hr className="hero__rule" />

          <div className="signature">
            <p className="signature__quote">Seu futuro, no lugar certo.</p>
            <a href="#lancamentos" className="text-link">
              Ver lançamentos disponíveis
              <ArrowDown size={16} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <div id="contato" className="lead-card">
            <p className="status">
              <span className="status__dot" aria-hidden="true" />
              ATENDENDO HOJE · [SEG A SÁB, 9H–19H]
            </p>
            <h2 className="lead-card__title">Agende uma visita</h2>
            <p className="lead-card__sub">
              Me conte o que você procura e eu retorno pelo WhatsApp com as melhores opções.
            </p>

            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="lead-name">Nome</label>
                <input
                  id="lead-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Como posso te chamar?"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lead-whatsapp">WhatsApp</label>
                <input
                  id="lead-whatsapp"
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="lead-interest">O que você procura</label>
                <select id="lead-interest" name="interest" required defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary">
                {submitted ? "Enviado para o WhatsApp!" : "Quero agendar minha visita"}
                <ArrowRight size={19} strokeWidth={1.8} aria-hidden="true" />
              </button>

              <p className="privacy">
                <Lock size={15} strokeWidth={1.7} aria-hidden="true" />
                Seus dados vão direto para o WhatsApp do corretor. Sem cadastro e sem spam.
              </p>
            </form>

            <p className="lead-card__alt">
              Prefere resolver agora?
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
                <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
