export default function NewsCard({ card }) {
  let formattedDate;

  if (card.publishedAt) {
    formattedDate = new Date(card.publishedAt).toLocaleDateString("default", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } else {
    formattedDate = "";
  }

  return (
    <li className="news-grid__element">
      <img className="news-grid__element-image" src={card.urlToImage} alt="" />
      <div className="news-grid__element-content">
        <p className="news-grid__element-date">{formattedDate}</p>
        <p className="news-grid__element-title">{card.title}</p>
        <p className="news-grid__element-text">
          {card.text || card.description}
        </p>
        <p className="news-grid__element-footer">
          {card.source.name || card.source}
        </p>
      </div>
    </li>
  );
}
