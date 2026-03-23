import "./ProdutosSelecionados.css";
import CardProduto from "./CardProduto";

export default function ProdutosSelecionadosBase() {
  return (
    <section className="secao-produtos">
      <h2 className="titulo-produtos">Produtos relacionados</h2>
      <span className="ver-todos">Ver todos</span>

      <div className="produtos-grid">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </section>
  );
}