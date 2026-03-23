import CategoryCard from "./CategoryCard";

import tecnologia from "../assets/tecnologia.png";
import supermercado from "../assets/supermercado.png";
import bebidas from "../assets/bebidas.png";
import ferramentas from "../assets/ferramentas.png";
import saude from "../assets/saude.png";
import esportes from "../assets/esportes.png";
import moda from "../assets/moda.png";

export default function Categories() {
  return (
    <section className="categories">
      <CategoryCard icon={tecnologia} label="Tecnologia" />
      <CategoryCard icon={supermercado} label="Supermercado" />
      <CategoryCard icon={bebidas} label="Bebidas" />
      <CategoryCard icon={ferramentas} label="Ferramentas" />
      <CategoryCard icon={saude} label="Saúde" />
      <CategoryCard icon={esportes} label="Esportes" />
      <CategoryCard icon={moda} label="Moda" />
    </section>
  );
}