import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos
          exclusivos da Econverse.
        </p>
      </div>

      <div className="newsletter-right">
        <div className="inputs-row">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>

        <label className="checkbox-row">
          <input type="checkbox" />
          Aceito os termos e condições
        </label>
      </div>
    </section>
  );
}