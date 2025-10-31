import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import signOut from "../../assets/sign-out.svg";
import signOutDark from "../../assets/sign-out-dark.svg";
import menuDark from "../../assets/menu-dark.svg";
import menuLight from "../../assets/menu-light.svg";
import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

function Navigation() {
  const { isMobileNavOpen, setIsMobileNavOpen, activeModal, setActiveModal } =
    useContext(GeneralUIContext);
  const { currentUser, isLoggedIn, handleSignOutClick } =
    useContext(CurrentUserContext);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileNavOpen, setIsMobileNavOpen]);

  return (
    <div className={`${isMobileNavOpen ? "navigation__background" : ""}`}>
      <div
        className={`navigation${
          location.pathname === "/saved-news"
            ? " navigation_type_saved-news"
            : ""
        }${
          activeModal !== ""
            ? ""
            : `${isMobileNavOpen ? " navigation_type_dropdown-open" : ""}`
        }`}
      >
        <div className="navigation__content">
          <h1
            className={`navigation__title${
              location.pathname === "/saved-news"
                ? isMobileNavOpen
                  ? ""
                  : " navigation__text_type_saved-news"
                : ""
            }`}
          >
            NewsExplorer
          </h1>
          <nav className="navigation__nav">
            <p
              className={`navigation__btn${
                location.pathname === "/" ? " navigation__btn_type_active" : ""
              }`}
            >
              <Link
                to="/"
                className={`navigation__link${
                  location.pathname === "/saved-news"
                    ? " navigation__text_type_saved-news"
                    : ""
                }`}
              >
                Home
              </Link>
            </p>
            {isLoggedIn ? (
              <p
                className={`navigation__btn${
                  location.pathname === "/saved-news"
                    ? " navigation__btn_type_active-saved-news"
                    : ""
                }`}
              >
                <Link
                  to="/saved-news"
                  className={`navigation__link${
                    location.pathname === "/saved-news"
                      ? " navigation__text_type_saved-news"
                      : ""
                  }`}
                >
                  Saved Pages
                </Link>
              </p>
            ) : null}
            <button
              onClick={() => {
                isLoggedIn ? handleSignOutClick() : setActiveModal("login");
              }}
              className={`navigation__btn_type_sign-in${
                location.pathname === "/saved-news"
                  ? " navigation__text_type_saved-news navigation__btn_type_sign-in-saved-news"
                  : ""
              }${isLoggedIn ? " navigation__btn_type_sign-out" : ""}`}
            >
              <p
                className={`navigation__btn-text${
                  location.pathname === "/saved-news"
                    ? " navigation__text_type_saved-news"
                    : ""
                }`}
              >
                {isLoggedIn ? currentUser.username : "Sign in"}
              </p>
              {isLoggedIn ? (
                <img
                  src={
                    location.pathname === "/saved-news" ? signOutDark : signOut
                  }
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
              src={
                location.pathname === "/saved-news"
                  ? isMobileNavOpen
                    ? menuLight
                    : menuDark
                  : menuLight
              }
              alt="Menu button"
              className="navigation__menu-icon"
            />
          </button>
        </div>
      </div>
      <div
        className={`navigation navigation_type_mobile${
          activeModal !== ""
            ? " navigation__hidden"
            : `${
                isMobileNavOpen
                  ? " navigation_type_dropdown-open"
                  : " navigation__hidden"
              }`
        }`}
      >
        <div className="navigation__content navigation__content_type_mobile">
          <nav className="navigation__nav_type_mobile">
            <p className="navigation__btn">
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
                setIsMobileNavOpen(false);
              }}
              className={`navigation__btn_type_sign-in${
                isLoggedIn ? " navigation__btn_type_sign-out" : ""
              }`}
            >
              <p className="navigation__btn-text">
                {isLoggedIn ? currentUser.username : "Sign in"}
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
