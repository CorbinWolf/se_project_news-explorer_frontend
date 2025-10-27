import { useContext, useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import GeneralUIContext from "../../contexts/GeneralUIContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./RegisterModal.css";

function RegisterModal() {
  const { activeModal, setActiveModal } = useContext(GeneralUIContext);
  const { handleRegisterModalSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleContentChange = (inputState) => (e) => {
    inputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterModalSubmit({ email, password, username });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [activeModal]);

  return (
    <ModalWithForm
      title="Sign up"
      btnText="Sign up"
      isOpen={activeModal === "sign-up"}
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
      <label htmlFor="username" className="modal__label">
        Username{" "}
        <input
          id="username"
          type="text"
          className="modal__input"
          placeholder="Enter your username"
          required
          onChange={handleContentChange(setUsername)}
          value={username}
        />
      </label>
      <button
        className="modal__switch-btn"
        type="button"
        onClick={() => setActiveModal("login")}
      >
        or Sign in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
