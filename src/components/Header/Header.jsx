import MobileMenu from "../MobileMenu/MobileMenu";
import { useContext } from "react";
import lineHeader from "../../images/line_header.png";
import SearchForm from "../SearchForm/SearchForm";
import { MobileContext } from "../../contexts/MobileContext";

export default function Header({ handleSearch, handleAbout, handleHome }) {
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(MobileContext);

  const handleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };
  return (
    <div className="layout">
      <header className="header">
        <div className="header__wrapper">
          <a className="header__logo" onClick={handleHome}>
            NewsExplorer
          </a>
          <div className="header__login">
            <a className="header__login-inicio" onClick={handleHome}>
              Inicio
            </a>
            <button className="header__login-iniciar" onClick={handleAbout}>
              <div className="header__logout-button">Acerca de</div>
            </button>
          </div>
          <button className="header__menu-mobile" onClick={handleMobileMenu} />
        </div>

        <img
          src={lineHeader}
          alt="Linea para el encabezado"
          className="header__line"
        />

        {mobileMenuOpen && (
          <MobileMenu
            closeMobileMenu={closeMobileMenu}
            handleAbout={handleAbout}
          />
        )}

        <SearchForm handleSearch={handleSearch} />
      </header>
    </div>
  );
}
