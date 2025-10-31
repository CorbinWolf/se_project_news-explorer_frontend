import { useContext, useState } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import LoadFail from "../LoadFail/LoadFail";

import "./SavedNews.css";

function SavedNews() {
  const { isLoading } = useContext(GeneralUIContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [cardsToShow, setCardsToShow] = useState(3);

  return (
    <main className="main__background">
      {currentUser.savedCards.length === 0 ? (
        <LoadFail />
      ) : isLoading ? (
        <Preloader />
      ) : currentUser.savedCards != null && !isLoading ? (
        <div className="main">
          <div className="main__content">
            <div className="main__card-container">
              {currentUser.savedCards.slice(0, cardsToShow).map((item) => {
                return (
                  <NewsCard
                    key={item.url}
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
            {cardsToShow >= currentUser.savedCards.length ? null : (
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
      ) : (
        <LoadFail />
      )}
    </main>
  );
}

export default SavedNews;
