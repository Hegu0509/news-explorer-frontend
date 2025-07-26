import aboutPhoto from "../../images/about-photo.jpg";

export default function About() {
  return (
    <section className="about">
      <img src={aboutPhoto} alt="Photo about" className="about__photo" />
      <div className="about__wrapper">
        <p className="about__title">Acerca del autor</p>
        <p className="about__text">
          ¡Hola a todos! Me llamo Gustavo Morales y soy ingeniero de sistemas
          vivo en Ecuador.
          <br></br>
          <br></br>
          En TripleTen aprendí habilidades importantes como JavaScript, React y
          desarrollo backend y frontend trabajando en proyectos reales. Me ayudó
          a sentirme más seguro y preparado para resolver problemas reales.
          Estoy listo para solventar problemas y brindar soluciones de software
          acopladas a cada necesidad.
        </p>
      </div>
    </section>
  );
}
