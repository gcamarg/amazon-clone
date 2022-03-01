import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/", { state: userCredential });
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/G/01/sell/navigation/logos/amazon-com-br-half-logo.svg"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <div className="login__block">
          <h1 className="login__title">Fazer Login</h1>
          <form action="" className="login__form">
            <label htmlFor="user-email">E-mail</label>
            <input
              type="text"
              id="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="user-password">Password</label>
            <input
              type="password"
              id="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login__button" onClick={logIn}>
              Continuar
            </button>
          </form>
          <p className="login__terms">
            Ao continuar, você concorda com as{" "}
            <a className="login__hyperlink">Condições de Uso</a> da Amazon
            Clone. Por favor verifique a{" "}
            <a className="login__hyperlink">Notificação de Privacidade</a>,{" "}
            <a className="login__hyperlink">Notificação de Cookies</a> e a{" "}
            <a className="login__hyperlink">
              Notificação de Anúncios Baseados em Interesse
            </a>
            .
          </p>
          <div className="login__help">
            <i className="login__colapse"></i>
            <a className="login__hyperlink">Precisa de ajuda</a>
          </div>
        </div>
        <div className="login__splitter">
          <h5>Novo na Amazon?</h5>
        </div>
        <button className="login__signupBt" onClick={register}>
          Criar sua conta da Amazon
        </button>
      </div>
    </div>
  );
}

export default Login;
