import "./Footer.css";
import logo from "../assets/logo.png";
import insta from "../assets/insta.png";
import face from "../assets/face.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Coluna 1 – Marca */}
        <div className="footer-brand">
          <img src={logo} alt="Econverse" className="footer-logo" />

          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="footer-social">
            <img src={insta} alt="Instagram" />
            <img src={face} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        {/* Coluna 2 – Institucional */}
        <div className="footer-col">
          <h4>Institucional</h4>
          <a>Sobre Nós</a>
          <a>Movimento</a>
          <a>Trabalhe conosco</a>
        </div>

        {/* Coluna 3 – Ajuda */}
        <div className="footer-col">
          <h4>Ajuda</h4>
          <a>Suporte</a>
          <a>Fale Conosco</a>
          <a>Perguntas Frequentes</a>
        </div>

        {/* Coluna 4 – Termos */}
        <div className="footer-col">
          <h4>Termos</h4>
          <a>Termos e Condições</a>
          <a>Política de Privacidade</a>
          <a>Troca e Devolução</a>
        </div>

      </div>

      <div className="footer-copy">
        © 2026 Econverse
      </div>
    </footer>
  );
}