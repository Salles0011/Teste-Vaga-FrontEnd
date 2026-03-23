import "./AbasProdutos.css";

const abas = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

export default function AbasProdutos() {
  return (
    <div className="abas-container">
      {abas.map((aba) => (
        <button key={aba} className="aba">
          {aba}
        </button>
      ))}
    </div>
  );
}