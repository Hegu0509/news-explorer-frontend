import React from "react";
import saveIcon from "../../../../images/icons/save.svg";
import saveIconHover from "../../../../images/icons/save-hover.svg";
import ImagePopup from "../ImagePopup/ImagePopup";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onClick, onCardLike, onCardDelete }) {
  let { currentUser } = React.useContext(CurrentUserContext);
  const { name, link } = card;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />,
  };

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `news-grid__element-icon-like ${
    isLiked ? "news-grid__element-icon-like_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="news-grid__element">
      <div
        className="news-grid__element-icon-save"
        onClick={handleDeleteClick}
      ></div>

      <img
        className="news-grid__element-image"
        src={link}
        alt=""
        onClick={() => onClick(imageComponent)}
      />
      <div className="news-grid__element-content">
        <p className="news-grid__element-date">4 de noviembre de 2020</p>
        <p className="news-grid__element-title">{name}</p>
        <p className="news-grid__element-text">
          Milenios atrás ya nos percatamos de ello: el sonido del océano, los
          aromas de un bosque, la forma en que la luz del sol moteada baila
          entre las hojas.
        </p>
        <p className="news-grid__element-footer">national geographic</p>
      </div>
    </li>
  );
}
