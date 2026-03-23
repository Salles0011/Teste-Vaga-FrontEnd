import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import SecaoProdutos from "./components/SecaoProdutos";
import ProdutosSelecionadosBase from "./components/ProdutosSelecionadosBase";
import BannersParceiros from "./components/BannersParceiros";
import NaveguePorMarcas from "./components/NaveguePorMarcas";
import Marcas from "./components/Marcas";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />

      {/* Parte de cima */}
      <SecaoProdutos />
      <BannersParceiros />

      {/* Navegar por marcas */}
      <NaveguePorMarcas />
      <Marcas />

      {/* Parte de baixo */}
      <ProdutosSelecionadosBase />
      <BannersParceiros />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}