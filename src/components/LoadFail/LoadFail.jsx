import notFound from "../../assets/not-found.svg";

import "./LoadFail.css";

function LoadFail() {
  return (
    <section className="load-fail">
      <div className="load-fail__content">
        <img src={notFound} className="load-fail__img" />
        <h3 className="load-fail__title">Nothing found</h3>
        <p className="load-fail__desc">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default LoadFail;
