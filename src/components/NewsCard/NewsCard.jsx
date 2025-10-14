import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="card">
      <div className="card__img">
        <button className="card__btn"></button>
        <p className="card__flag">Sign in to save articles</p>
      </div>
      <div className="card__content">
        <p className="card__date">Aprimay 12, 5034</p>
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
        <p className="card__publisher">John Newspaper</p>
      </div>
    </div>
  );
}

export default NewsCard;
