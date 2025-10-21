import "./NewsCard.css";

function NewsCard() {
  return (
    <article className="card">
      <div className="card__img">
        <button className="card__btn"></button>
        <p className="card__flag">Sign in to save articles</p>
      </div>
      <div className="card__content">
        <time className="card__date" dateTime="">
          Aprimay 12, 5034
        </time>
        <h3 className="card__title">
          Temp Card Temp Card Temp Card Temp Card Temp Card Temp Card
        </h3>
        <p className="card__desc">
          Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird.
          Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird.
          Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird.
          Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird. Bird.
          Bird. Bird.{" "}
        </p>
        <cite className="card__publisher">John Newspaper</cite>
      </div>
    </article>
  );
}

export default NewsCard;
