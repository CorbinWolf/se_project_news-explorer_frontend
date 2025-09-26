import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
