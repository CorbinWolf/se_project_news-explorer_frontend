import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__content">
        <div className="preloader__throbber"></div>
        <p className="preloader__desc">Searching for news...</p>
      </div>
    </section>
  );
}

export default Preloader;
