import lineHeader from "../../images/line_header.png";
import menuMobile from "../../images/icons/menu-mobile.png";

export default function Header() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo">NewsExplorer</div>
          <div className="header__login">
            <p className="header__login-inicio">Inicio</p>
            <button className="header__login-iniciar">
              <div className="header__logout-button">Iniciar sesión</div>
            </button>
          </div>
          <img
            src={menuMobile}
            alt="Mobile menu"
            className="header__menu-mobile"
          />
        </div>

        <img
          src={lineHeader}
          alt="Linea para el encabezado"
          className="header__line"
        />
      </header>
      <div className="search">
        <p className="search__title">¿Qué está pasando en el mundo?</p>
        <p className="search__subtitle">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal
        </p>
        <div className="search__wrapper">
          <input
            type="text"
            id="txtSearch"
            name="txtSearch"
            placeholder="Introduce un tema"
            className="search__text"
          />
          <button className="search__button">Buscar</button>
        </div>
      </div>
    </div>
  );
}
