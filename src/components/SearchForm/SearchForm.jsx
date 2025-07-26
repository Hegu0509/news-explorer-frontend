import { useContext } from "react";
import { KeywordContext } from "../../contexts/KeyWordContext";

function SearchForm({ handleSearch }) {
  const { keyword, setkeyword } = useContext(KeywordContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(keyword);
  };

  const handleKeyWord = (event) => {
    setkeyword(event.target.value);
  };

  return (
    <div className="search">
      <p className="search__title">¿Qué está pasando en el mundo?</p>
      <p className="search__subtitle">
        Encuentra las últimas noticias sobre cualquier tema
      </p>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search__wrapper">
          <input
            type="text"
            id="txtSearch"
            name="txtSearch"
            value={keyword}
            placeholder="Introduce un tema"
            className="search__text"
            onChange={handleKeyWord}
            required
          />
          <button type="submit" className="search__button">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
