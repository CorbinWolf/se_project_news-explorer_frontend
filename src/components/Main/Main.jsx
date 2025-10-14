import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";

import "./Main.css";

function Main() {
  return (
    <div className="main__background">
      <div className="main">
        <div className="main__content">
          <h2 className="main__title">Search results</h2>
          <div className="main__card-container">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
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
