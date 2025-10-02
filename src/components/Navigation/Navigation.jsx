import { useState } from "react";
import { Link } from "react-router-dom";

import menuLight from "../../assets/menu-light.svg";

import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? "navigation__background" : "navigation__background_unset"
      }`}
    >
      <div className={`navigation${isOpen ? " navigation_dropdown-open" : ""}`}>
        <div className="navigation__content">
          <h1 className="navigation__title">NewsExplorer</h1>
          <nav className="navigation__nav">
            <p className="navigation__btn navigation__btn_active">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </p>
            <button className="navigation__btn_sign-in">
              <p className="navigation__btn-text">Sign in</p>
            </button>
          </nav>
          <button
            type="button"
            onClick={() => toggleMobileMenu()}
            className="navigation__menu-btn"
          >
            <img
              src={menuLight}
              alt="Menu button"
              className="navigation__menu-icon"
            />
          </button>
        </div>
      </div>
      <div
        className={`navigation navigation_mobile${
          isOpen ? " navigation_dropdown-open" : " navigation__hidden"
        }`}
      >
        <div className="navigation__content navigation__content_mobile">
          <nav className="navigation__nav_mobile">
            <p className="navigation__btn">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </p>
            <button className="navigation__btn_sign-in">
              <p className="navigation__btn-text">Sign in</p>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
