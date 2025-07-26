import NotFoundImg from "../../images/icons/Not-Found-Img.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__img" src={NotFoundImg} alt="Not-Found-Img" />
      <h1 className="not-found__header">No se encontró nada</h1>
      <p className="not-found__content">
        Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.
      </p>
    </div>
  );
}

export default NotFound;
