import "./Footer.css";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";

export const Footer = () => {
  return (
    <footer>
      <p>Sitio realizado por Lara para Talento Tech</p>
      <nav>
        <ul className="footer-list">
          <li>
            <img src={whatsapp} alt="WhatsApp" />
          </li>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};
