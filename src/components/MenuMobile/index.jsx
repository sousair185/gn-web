import a from "./../../assets/a.png";
import h from "./../../assets/h.png";
import c from "./../../assets/c.png";
import p from "./../../assets/p.png";

export default function MenuMobile() {
  return (
    <>
      <nav className="nav-mobile">
        <div className="container-mobile">
          <a href="#">
            <img src={h} alt="home" />
          </a>
          <a href="#">
            <img src={p} alt="planos" />
          </a>
          <a href="#">
            <img src={c} alt="contato" />
          </a>
          <a href="#">
            <img src={a} alt="sobrenos" />
          </a>
        </div>
      </nav>
    </>
  );
}
