import { NavLink } from "react-router-dom";

const MobileMenu = ({ closeMobileMenu, handleAbout }) => {
  const handleAboutMovile = () => {
    handleAbout();
    closeMobileMenu();
  };

  return (
    <nav className="mobile">
      <nav className="mobile__content">
        <nav className="mobile__links">
          <nav className="mobile__link-NewsExplorer" onClick={closeMobileMenu}>
            <NavLink
              to="/home"
              className="mobile__link-container mobile__link-home "
              onClick={closeMobileMenu}
            >
              NewsExplorer
            </NavLink>
          </nav>
          <button
            className="mobile__link-NewsExplore-close"
            onClick={closeMobileMenu}
          ></button>
          <div className="mobile__link">
            <NavLink
              to="/home"
              className="mobile__link-container mobile__link-home "
              onClick={closeMobileMenu}
            >
              Inicio
            </NavLink>
            <button className="mobile__button" onClick={handleAboutMovile}>
              Acerca de
            </button>
          </div>
        </nav>
      </nav>
    </nav>
  );
};

export default MobileMenu;
