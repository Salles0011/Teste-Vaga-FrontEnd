import logo from "../assets/logo.png";
import userIcon from "../assets/UserCircle.png";
import groupIcon from "../assets/Group.png";
import heartIcon from "../assets/Heart.png";
import cartIcon from "../assets/ShoppingCart.png";
import crown from "../assets/CrownSimple.png"; // <-- adicionado

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Econverse" className="logo" />

        <div className="search-box">
          <input placeholder="O que você está buscando?" />
        </div>

        <div className="icons">
          <img src={groupIcon} alt="Pedidos" className="icon-img" />
          <img src={heartIcon} alt="Favoritos" className="icon-img" />
          <img src={userIcon} alt="Conta" className="icon-img" />
          <img src={cartIcon} alt="Carrinho" className="icon-img" />
        </div>
      </div>

      <nav className="menu">
        <a href="#">TODAS CATEGORIAS</a>
        <a href="#">SUPERMERCADO</a>
        <a href="#">LIVROS</a>
        <a href="#">MODA</a>
        <a href="#">LANÇAMENTOS</a>
        <a href="#" className="active">OFERTAS DO DIA</a>
        <a href="#" className="assinatura-item">
          <img src={crown} className="coroa-icon" alt="Assinatura" />
          ASSINATURA
        </a>
      </nav>
    </header>
  );
}