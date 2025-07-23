import React from "react";
import NewCard from "../NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import pen from "../../images/icons/pen.png";
import editButton from "../../images/icons/edit.svg";
import aboutPhoto from "../../images/about-photo.jpg";

import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

export default function Main(props) {
  let { currentUser } = React.useContext(CurrentUserContext);
  const { popup } = React.useContext(CurrentUserContext);
  const { cards } = React.useContext(CurrentUserContext);
  const { handleCardLike } = React.useContext(CurrentUserContext);
  const { handleCardDelete } = React.useContext(CurrentUserContext);
  const { handleAddPlaceSubmit } = React.useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      {popup && (
        <Popup onClose={props.onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      <section className="result">
        <p className="result__title">Resultados de la búsqueda</p>
        <ul className="news-grid">
          {cards.map((card) => (
            <Card
              onClick={props.onOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              key={card._id}
              card={card}
            />
          ))}
        </ul>
        <button className="result__button">Ver más</button>
      </section>

      <section className="about">
        <img src={aboutPhoto} alt="Photo about" className="about__photo" />
        <div className="about__wrapper">
          <p className="about__title">Acerca del autor</p>
          <p className="about__text">
            Este bloque describe al autor del proyecto. Aquí debe indicar tu
            nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
            <br></br>
            <br></br>
            También puedes hablar de tu experiencia con Practicum, de lo que
            aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
          </p>
        </div>
      </section>
    </main>
  );
}
