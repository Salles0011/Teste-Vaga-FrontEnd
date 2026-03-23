import bannerImg from "../assets/banner.png";

export default function BannersParceiros() {
  return (
    <section className="banners-parceiros">
      <div className="banner-parceiro">
        <img src={bannerImg} alt="Parceiros" className="banner-img" />

        <div className="banner-conteudo">
          <h3>Parceiros</h3>
          <button>CONFIRA</button>
        </div>
      </div>

      <div className="banner-parceiro">
        <img src={bannerImg} alt="Parceiros" className="banner-img" />

        <div className="banner-conteudo">
          <h3>Parceiros</h3>
          <button>CONFIRA</button>
        </div>
      </div>
    </section>
  );
}