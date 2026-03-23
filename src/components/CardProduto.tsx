import "./CardProduto.css";
import iphone from "../assets/iphone.png";

export default function CardProduto() {
  return (
    <div className="card-produto">
      <img src={iphone} alt="Produto" className="card-imagem" />

      <p className="descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <p className="preco-antigo">R$ 39,90</p>

      <p className="preco-atual">R$ 28,90</p>

      <p className="parcelamento">ou 2x de R$ 49,95 sem juros</p>

      <span className="frete-gratis">Frete grátis</span>

      <button className="btn-comprar">COMPRAR</button>
    </div>
  );
}