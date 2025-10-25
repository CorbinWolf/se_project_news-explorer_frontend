import { useContext } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";

function Header() {
  const { isMobileNavOpen } = useContext(GeneralUIContext);

  return (
    <div className="header__background">
      <Navigation />
      <div className="header">
        <div className="header__content">
          <h2
            className={`header__title${
              isMobileNavOpen ? " header__title_mobile-adjust" : ""
            }`}
          >
            What's going on in the world?
          </h2>
          <p className="header__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Header;
