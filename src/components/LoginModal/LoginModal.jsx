import { useContext, useState, useEffect } from "react";

import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./LoginModal.css";

function LoginModal() {
  const { activeModal, setActiveModal } = useContext(GeneralUIContext);
  const { handleLoginModalSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContentChange = (inputState) => (e) => {
    inputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginModalSubmit({ email, password });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [activeModal]);

  return (
    <ModalWithForm
      title="Sign in"
      btnText="Sign in"
      isOpen={activeModal === "login"}
      onClose={() => setActiveModal("")}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          id="email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          required
          onChange={handleContentChange(setEmail)}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          id="password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          required
          onChange={handleContentChange(setPassword)}
          value={password}
        />
      </label>
      <button
        className="modal__switch-btn"
        type="button"
        onClick={() => setActiveModal("sign-up")}
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
