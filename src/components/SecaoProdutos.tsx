import "./ProdutosSelecionados.css";
import AbasProdutos from "./AbasProdutos";
import CardProduto from "./CardProduto";

export default function SecaoProdutos() {
  return (
    <section className="secao-produtos">
      <h2 className="titulo-produtos">Produtos relacionados</h2>

      <AbasProdutos />

      <div className="produtos-grid">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </section>
  );
}