import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useContext } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultContext } from "../../contexts/SearchResultContext";

export default function Main(props) {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResult } = useContext(SearchResultContext);

  return (
    <main className="content">
      {/* <Preloader /> */}
      <div>
        {hasSearched && searchResult.length > 0 ? (
          <NewsCardList />
        ) : hasSearched && searchResult.length === 0 ? (
          <NotFound />
        ) : props.isLoading ? (
          <Preloader />
        ) : props.searchError === true ? (
          <p>
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
