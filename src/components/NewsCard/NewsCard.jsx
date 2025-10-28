import { useState, useContext, useEffect } from "react";

import bookmark from "../../assets/bookmark.svg";
import bookmarkMarked from "../../assets/bookmark-marked.svg";
import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./NewsCard.css";

function NewsCard({ url, image, date, title, desc, publisher }) {
  const [bookmarkState, setBookmarkState] = useState(bookmark);

  const { setActiveModal } = useContext(GeneralUIContext);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const toggleBookmark = () => {
    const existingCard = currentUser.savedCards.find(
      (card) => card.url === url
    );

    setBookmarkState(bookmarkState === bookmark ? bookmarkMarked : bookmark);

    existingCard
      ? currentUser.savedCards.splice(
          currentUser.savedCards.indexOf(existingCard),
          1
        )
      : currentUser.savedCards.unshift({
          url,
          image,
          date,
          title,
          desc,
          publisher,
        });
  };

  useEffect(() => {
    if (isLoggedIn && currentUser.savedCards) {
      const isBookmarked = currentUser.savedCards.find(
        (card) => card.url === url
      );
      setBookmarkState(isBookmarked ? bookmarkMarked : bookmark);
    } else {
      setBookmarkState(bookmark);
    }
  }, [isLoggedIn, currentUser, url]);

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
        <button
          onClick={() => {
            isLoggedIn ? toggleBookmark() : setActiveModal("login");
          }}
          style={{ backgroundImage: `url(${bookmarkState})` }}
          className="card__btn"
        ></button>
        {isLoggedIn ? null : (
          <p className="card__flag">Sign in to save articles</p>
        )}
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
