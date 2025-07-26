import gitHubIcon from "../../images/icons/github.svg";
import facebookIcon from "../../images/icons/fb.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__wrapper">
        <div className="footer_links">
          <a className="footer__link" href="#">
            Inicio
          </a>
          <a
            href="https://tripleten.com/"
            target="_blank"
            className="footer__link"
          >
            Tripleten
          </a>
        </div>
        <div className="footer__items">
          <a href="https://github.com/" target="_blank">
            <img
              src={gitHubIcon}
              alt="github icon"
              className="footer__social-icon"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
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
