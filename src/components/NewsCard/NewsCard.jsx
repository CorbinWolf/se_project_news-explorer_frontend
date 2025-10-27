import "./NewsCard.css";

function NewsCard({ image, date, title, desc, publisher }) {
  return (
    <article className="card">
      <div
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
              }
            : {}
        }
        className="card__img"
      >
        <button className="card__btn"></button>
        <p className="card__flag">Sign in to save articles</p>
      </div>
      <div className="card__content">
        <time className="card__date" dateTime="">
          {date}
        </time>
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>
        <cite className="card__publisher">{publisher}</cite>
      </div>
    </article>
  );
}

export default NewsCard;
