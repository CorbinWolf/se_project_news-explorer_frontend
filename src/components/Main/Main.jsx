import { useContext } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

import "./Main.css";

function Main() {
  const { newsCards } = useContext(GeneralUIContext);
  console.log(newsCards);

  return (
    <div className="main__background">
      <div className="main">
        <div className="main__content">
          <h2 className="main__title">Search results</h2>
          <div className="main__card-container">
            {newsCards.map((item) => {
              return (
                <NewsCard
                  key={item.url}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  desc={item.desc}
                  publisher={item.publisher}
                />
              );
            })}
          </div>
          <button className="main__btn" type="button">
            Show more
          </button>
        </div>
      </div>
      <Preloader />
      <About />
    </div>
  );
}

export default Main;
