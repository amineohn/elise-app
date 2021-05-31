import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
export default class Register extends Component {
  render() {
    if (isBrowser) {
      return (
        <div className="error">
          <p className="error-content">This content is unavailable on browser</p>
        </div>
      );
    }
    return (
      <>
        <Logo />
        <div className="app moveToBottom">
          <div className="auth">
            <div className="form">
              <input
                htmlFor="user"
                className="control islogged"
                type="text"
                placeholder="Utilisateur"
              />
              <label id="user" className="fas fa-user icon"></label>
            </div>
            &nbsp;
            <div className="form">
              <input
                htmlFor="token"
                className="control islogged"
                type="password"
                placeholder="Token (sécurité)"
              />
              <label id="token" className="fas fa-lock icon"></label>
            </div>
            &nbsp;
            <div className="form">
              <input
                htmlFor="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <label id="password" className="fas fa-key icon"></label>
            </div>
            &nbsp;
            <div className="submit">
              <button className="button" type="submit">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
