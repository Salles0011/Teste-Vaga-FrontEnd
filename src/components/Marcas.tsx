import "./Marcas.css";
import logo from "../assets/logo.png";

export default function Marcas() {
  return (
    <section className="marcas-container">
      <div className="marca-item"><img src={logo} /></div>
      <div className="marca-item"><img src={logo} /></div>
      <div className="marca-item"><img src={logo} /></div>
      <div className="marca-item"><img src={logo} /></div>
      <div className="marca-item"><img src={logo} /></div>
    </section>
  );
}