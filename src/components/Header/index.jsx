import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import logo from "../../assets/gn-logo.png";
export default function Header() {
  return (
    <Router>
      <div className="header-menu">
        <img src={logo} alt="gn-logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/planos">PLANOS</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
            <li>
              <Link to="/sobre">SOBRE NÓS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
