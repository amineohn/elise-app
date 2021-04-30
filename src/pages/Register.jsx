import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
class Register extends Component {
  render() {
    if (isBrowser) {
      return (
        <div class="error">
          <p class="error-text">This content is unavailable on browser</p>
        </div>
      );
    }
    return (
      <>
        <Logo />
        <div className="app slide">
          <div className="auth">
            <div className="form">
              <input
                for="user"
                className="control islogged"
                type="text"
                placeholder="Utilisateur"
              />
              <label id="user" class="fas fa-user icon"></label>
            </div>
            <br />
            <div className="form">
              <input
                for="token"
                className="control islogged"
                type="password"
                placeholder="Token (sécurité)"
              />
              <label id="token" class="fas fa-lock icon"></label>
            </div>
            <br />
            <div className="form">
              <input
                for="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <label id="password" class="fas fa-key icon"></label>
            </div>
            <br />
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

export default Register;
