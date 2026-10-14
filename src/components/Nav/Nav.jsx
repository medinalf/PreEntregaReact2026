import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="dropdown">
          <button className="dropdown-button">
            Categorías <span>▾</span>
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link to="/category/Limpieza">Limpieza</Link>
            </li>
            <li>
              <Link to="/category/Descanso">Descanso</Link>
            </li>
            <li>
              <Link to="/category/Transporte">Transporte</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/cart"}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
