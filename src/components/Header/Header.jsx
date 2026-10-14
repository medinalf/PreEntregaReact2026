import { Nav } from "../Nav/Nav";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link className="logo-link" to={"/"}>
          <img src={logo} alt="Logo de Vera Pet Shop" className="logo" />
        </Link>
      </div>
      <span className="brand-name"> Vera Pet Shop </span>
      <Nav />
    </header>
  );
};
