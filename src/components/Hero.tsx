import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Banner promocional" />

      <div className="hero-content">
        <h1>Venha conhecer nossas promoções</h1>

        <p className="hero-offer">
          <strong>50% Off</strong> <span>nos produtos</span>
        </p>

        <button className="hero-button">
          <span>Ver produto</span>
        </button>
      </div>
    </section>
  );
}