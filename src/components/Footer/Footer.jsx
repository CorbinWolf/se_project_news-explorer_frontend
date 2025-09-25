import { Link } from "react-router-dom";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__desc">
          &copy; 2024 Supersite, Powered by News API
        </div>
        <div className="footer__nav">
          <p className="footer__btn">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </p>
          <p className="footer__btn">
            <Link
              to="https://tripleten.com/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </Link>
          </p>
          <div className="footer__group">
            <Link
              to="https://github.com/CorbinWolf/se_project_news-explorer_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="footer__icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/corbinwolf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="footer__icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
