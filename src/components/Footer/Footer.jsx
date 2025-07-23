import gitHubIcon from "../../images/icons/github.png";
import facebookIcon from "../../images/icons/fb.png";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__wrapper">
        <div className="footer_links">
          <a className="footer__link">Inicio</a>
          <a className="footer__link">Tripleten</a>
        </div>
        <div className="footer__items">
          <a href="https://github.com/">
            <img
              src={gitHubIcon}
              alt="github icon"
              className="footer__social-icon"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              src={facebookIcon}
              alt="github icon"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
