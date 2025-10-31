import { useContext } from "react";
import { useLocation } from "react-router-dom";

import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";

function Header() {
  const { isMobileNavOpen } = useContext(GeneralUIContext);
  const { currentUser } = useContext(CurrentUserContext);

  const location = useLocation();
  const keywords = currentUser?.savedCards
    ? [...new Set(currentUser.savedCards.map((card) => card.keyword))]
    : [];
  const keywordText =
    keywords.length <= 2
      ? keywords.join(", ")
      : `${keywords.slice(0, 2).join(", ")}, and ${keywords.length - 2} other${
          keywords.length - 2 > 1 ? "s" : ""
        }`;

  return (
    <header
      className={`header__background${
        location.pathname === "/saved-news"
          ? " header__background_type_saved-news"
          : ""
      }`}
    >
      <Navigation />
      <div
        className={`header${
          location.pathname === "/saved-news" ? " header_type_saved-news" : ""
        }`}
      >
        {location.pathname === "/saved-news" ? (
          <div className="header__content header__content_type_saved-news">
            <p className="header__text header__saved-articles">
              Saved articles
            </p>
            <h2
              className={`header__title header__title_type_saved-news header__text_type_saved-news${
                isMobileNavOpen ? " header__title_type_mobile-adjust" : ""
              }`}
            >
              {currentUser?.username}, you have{" "}
              {currentUser?.savedCards?.length} saved articles
            </h2>
            <p className="header__text header__text_type_saved-news">
              By keywords:{" "}
              <span className="header__text_type_keywords">
                {keywords.length > 0 ? keywordText : "None"}
              </span>
            </p>
          </div>
        ) : (
          <div className="header__content">
            <h2
              className={`header__title${
                isMobileNavOpen ? " header__title_type_mobile-adjust" : ""
              }`}
            >
              What&#39;s going on in the world?
            </h2>
            <p className="header__text">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <SearchForm />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
