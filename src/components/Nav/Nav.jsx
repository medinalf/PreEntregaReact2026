import "./Nav.css";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/#">Carrito</a>
        </li>
        <li>
          <a href="/#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
