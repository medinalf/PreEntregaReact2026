import { Nav } from "../Nav/Nav";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link className="logo" to="/">
          <img src={logo} alt="Logo de Vera Pet Shop" className="logo" />
        </Link>
      </div>
      <Nav />
    </header>
  );
};
