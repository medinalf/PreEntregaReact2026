import { Nav } from "../Nav/Nav";
import "./Header.css";
import logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a className="logo" href="#">
          <img src={logo} alt="Logo de Vera Pet Shop" className="logo" />
        </a>

        {/* <Link to="/">
          <img src={logo} alt="Logo de Vera Pet Shop" className="logo" />
        </Link> */}
      </div>
      <Nav />
    </header>
  );
};
