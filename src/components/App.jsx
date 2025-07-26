import { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import About from "./About/About";
import { getSearchResult } from "./../utils/NewsApi";

import { KeywordContext } from "../contexts/KeyWordContext";
import { SearchResultContext } from "../contexts/SearchResultContext";
import { HasSearchedContext } from "../contexts/HasSearchedContext";
import { MobileContext } from "../contexts/MobileContext";

function App() {
  const [keyword, setkeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(keyword) {
    setkeyword(keyword);
    setIsSearching(true);
    setIsLoading(true);
    getSearchResult(keyword)
      .then((res) => {
        console.log(res);
        setSearchResult(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSearching(false);
        setSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleAbout = () => {
    navigate("/about");
  };

  const handleHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    navigate("/home");
  }, []);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HasSearchedContext.Provider value={{ hasSearched, setHasSearched }}>
        <SearchResultContext.Provider value={{ searchResult, setSearchResult }}>
          <KeywordContext.Provider value={{ keyword, setkeyword }}>
            <MobileContext.Provider
              value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
            >
              <div className="page">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Header
                          handleSearch={handleSearch}
                          handleAbout={handleAbout}
                          handleHome={handleHome}
                        />
                        <Outlet />
                        <Footer />
                      </>
                    }
                  >
                    <Route
                      path="/home"
                      element={
                        <>
                          <Main
                            searchError={searchError}
                            isLoading={isLoading}
                            isSearching={isSearching}
                          />
                        </>
                      }
                    />

                    {true && (
                      <Route
                        path="/about"
                        element={
                          <>
                            <Main
                              searchError={searchError}
                              isLoading={isLoading}
                              isSearching={isSearching}
                            />
                            <About />
                          </>
                        }
                      />
                    )}
                  </Route>
                </Routes>
                <script type="module" src="./index.js"></script>
              </div>
            </MobileContext.Provider>
          </KeywordContext.Provider>
        </SearchResultContext.Provider>
      </HasSearchedContext.Provider>
    </>
  );
}

export default App;
