import NewsCard from "../NewsCard/NewsCard";
import { useState, useContext } from "react";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";

function NewsCardList() {
  const [cardsDisplayed, setCardsDisplayed] = useState(3);
  const { searchResult } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);
  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <section className="result">
      {hasSearched ? (
        <>
          <p className="result__title">Resultados de la búsqueda</p>
          <ul className="news-grid">
            {searchResult.slice(0, cardsDisplayed).map((card, index) => (
              <NewsCard key={card.id || index} card={card} />
            ))}
          </ul>
          <button className="result__button" onClick={increaseVisibleCards}>
            Ver más
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default NewsCardList;
