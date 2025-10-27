import { useContext } from "react";
import { Link } from "react-router-dom";

import signOut from "../../assets/sign-out.svg";
import menuLight from "../../assets/menu-light.svg";
import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

function Navigation() {
  const { isMobileNavOpen, setIsMobileNavOpen, activeModal, setActiveModal } =
    useContext(GeneralUIContext);
  const { currentUser, isLoggedIn, handleSignOutClick } =
    useContext(CurrentUserContext);

  const toggleMobileMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div
      className={`${
        isMobileNavOpen
          ? "navigation__background"
          : "navigation__background_unset"
      }`}
    >
      <div
        className={`navigation${
          activeModal !== ""
            ? ""
            : `${isMobileNavOpen ? " navigation_dropdown-open" : ""}`
        }`}
      >
        <div className="navigation__content">
          <h1 className="navigation__title">NewsExplorer</h1>
          <nav className="navigation__nav">
            <p className="navigation__btn navigation__btn_active">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </p>
            {isLoggedIn ? (
              <p className="navigation__btn">
                <Link to="/saved-news" className="navigation__link">
                  Saved Pages
                </Link>
              </p>
            ) : null}
            <button
              onClick={() => {
                isLoggedIn ? handleSignOutClick() : setActiveModal("login");
              }}
              className={`navigation__btn_sign-in${
                isLoggedIn ? " navigation__btn_sign-out" : ""
              }`}
            >
              <p className="navigation__btn-text">
                {isLoggedIn ? currentUser.username || "Temp" : "Sign in"}
              </p>
              {isLoggedIn ? (
                <img
                  src={signOut}
                  alt="Sign out"
                  className="navigation__sign-out-icon"
                />
              ) : null}
            </button>
          </nav>
          <button
            type="button"
            onClick={() => toggleMobileMenu()}
            className={`navigation__menu-btn${
              activeModal !== "" ? " navigation__hidden" : ""
            }`}
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
          activeModal !== ""
            ? " navigation__hidden"
            : `${
                isMobileNavOpen
                  ? " navigation_dropdown-open"
                  : " navigation__hidden"
              }`
        }`}
      >
        <div className="navigation__content navigation__content_mobile">
          <nav className="navigation__nav_mobile">
            <p className="navigation__btn">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </p>
            <button
              onClick={() => {
                isLoggedIn ? handleSignOutClick() : setActiveModal("login");
                setIsMobileNavOpen(false);
              }}
              className={`navigation__btn_sign-in${
                isLoggedIn ? " navigation__btn_sign-out" : ""
              }`}
            >
              <p className="navigation__btn-text">
                {isLoggedIn ? currentUser.username || "Temp" : "Sign in"}
              </p>
              {isLoggedIn ? (
                <img
                  src={signOut}
                  alt="Sign out"
                  className="navigation__sign-out-icon"
                />
              ) : null}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
