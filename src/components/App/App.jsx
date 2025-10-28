import { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [newsCards, setNewsCards] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pageContentRef = useRef(null);
  const scrollbarRef = useRef(null);
  const scrollbarHeightRef = useRef(null);

  const navigate = useNavigate();

  const handleLoginModalSubmit = ({ email, password }) => {
    setActiveModal("");
    setCurrentUser({ email, password });
    setIsLoggedIn(true);
  };

  const handleRegisterModalSubmit = ({ email, password, username }) => {
    setActiveModal("");
    setCurrentUser({ email, password, username });
    setIsLoggedIn(true);
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    navigate("/");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        setActiveModal("");
      }
    };

    const handleClickClose = (e) => {
      if (
        e.target.classList.contains("modal_opened") &&
        window.innerWidth > 700
      ) {
        setActiveModal("");
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  useEffect(() => {
    let isUpdating = false;
    let listenersAdded = false;

    const resizeScrollbar = () => {
      scrollbarHeightRef.current.style.height =
        document.documentElement.scrollHeight + "px";
    };

    const adjustScrollPosition = () => {
      if (isUpdating) return;
      isUpdating = true;
      scrollbarRef.current.scrollTop = document.documentElement.scrollTop;
      isUpdating = false;
    };

    const adjustPagePosition = () => {
      if (isUpdating) return;
      isUpdating = true;
      document.documentElement.scrollTop = scrollbarRef.current.scrollTop;
      isUpdating = false;
    };

    const resizeScrollbarObserver = new ResizeObserver(() => {
      resizeScrollbar();
    });

    if (
      pageContentRef.current != null &&
      scrollbarRef.current != null &&
      scrollbarHeightRef.current != null
    ) {
      resizeScrollbarObserver.observe(pageContentRef.current);
      document.addEventListener("scroll", adjustScrollPosition);
      scrollbarRef.current.addEventListener("scroll", adjustPagePosition);
      listenersAdded = true;
      adjustScrollPosition();
    }

    return () => {
      if (!listenersAdded) return;
      resizeScrollbarObserver.disconnect();
      document.removeEventListener("scroll", adjustScrollPosition);
      scrollbarRef.current.removeEventListener("scroll", adjustPagePosition);
      listenersAdded = false;
    };
  }, []);

  return (
    <GeneralUIContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isMobileNavOpen,
        setIsMobileNavOpen,
        activeModal,
        setActiveModal,
        newsCards,
        setNewsCards,
      }}
    >
      <CurrentUserContext.Provider
        value={{
          currentUser,
          isLoggedIn,
          handleLoginModalSubmit,
          handleRegisterModalSubmit,
          handleSignOutClick,
        }}
      >
        <div className="page">
          <div className="page__content" ref={pageContentRef}>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/saved-news" element={<SavedNews />} />
            </Routes>
            <Footer />
            <div className="page__scrollbar" ref={scrollbarRef}>
              <div
                className="page__scrollbar-height"
                ref={scrollbarHeightRef}
              ></div>
            </div>
          </div>
          <LoginModal />
          <RegisterModal />
        </div>
      </CurrentUserContext.Provider>
    </GeneralUIContext.Provider>
  );
}

export default App;
