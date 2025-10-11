import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <label htmlFor="search" className="search-form__input-label">
        <input
          id="search"
          type=""
          className="search-form__input"
          placeholder="Enter topic"
        />
      </label>
      <button className="search-form__btn" type="button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
