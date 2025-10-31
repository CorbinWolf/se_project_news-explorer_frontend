import { useContext } from "react";

import { getNews, filterNewsData } from "../../utils/newsApi";
import GeneralUIContext from "../../contexts/GeneralUIContext";

import "./SearchForm.css";

function SearchForm() {
  const { setIsLoading, setSearchFail, setNewsCards } =
    useContext(GeneralUIContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchFail(false);
    setNewsCards(null);
    getNews(e.target.search.value)
      .then((newsData) => {
        return filterNewsData(newsData.articles, e.target.search.value);
      })
      .then((filteredData) => {
        setIsLoading(false);
        setNewsCards(filteredData);
      })
      .catch((err) => {
        setIsLoading(false);
        setSearchFail(true);
        setNewsCards(null);
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
