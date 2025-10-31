import { useContext, useState } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";

import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import LoadFail from "../LoadFail/LoadFail";
import About from "../About/About";

import "./Main.css";

function Main() {
  const { isLoading, searchFail, newsCards } = useContext(GeneralUIContext);

  const [cardsToShow, setCardsToShow] = useState(3);

  return (
    <main className="main__background">
      {isLoading ? (
        <Preloader />
      ) : searchFail ? (
        <LoadFail />
      ) : newsCards && newsCards.length > 0 ? (
        <div className="main">
          <div className="main__content">
            <h2 className="main__title">Search results</h2>
            <div className="main__card-container">
              {newsCards.slice(0, cardsToShow).map((item) => {
                return (
                  <NewsCard
                    key={item.key}
                    url={item.url}
                    keyword={item.keyword}
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    desc={item.desc}
                    publisher={item.publisher}
                  />
                );
              })}
            </div>
            {cardsToShow >= newsCards.length ? null : (
              <button
                type="button"
                onClick={() => setCardsToShow(cardsToShow + 3)}
                className="main__btn"
              >
                Show more
              </button>
            )}
          </div>
        </div>
      ) : newsCards !== null ? (
        <LoadFail />
      ) : null}
      <About />
    </main>
  );
}

export default Main;
