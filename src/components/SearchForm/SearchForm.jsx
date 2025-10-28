import { useContext } from "react";

import { getNews, filterNewsData } from "../../utils/newsApi";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import "./SearchForm.css";

function SearchForm() {
  const { setIsLoading, setNewsCards } = useContext(GeneralUIContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNewsCards([]);
    getNews(e.target.search.value)
      .then((newsData) => {
        return filterNewsData(newsData.articles);
      })
      .then((filteredData) => {
        setIsLoading(false);
        setNewsCards(filteredData);
      })
      .catch((err) => {
        setNewsCards(null);
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="search" className="search-form__input-label">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Enter topic"
          className="search-form__input"
        />
      </label>
      <button type="submit" className="search-form__btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
