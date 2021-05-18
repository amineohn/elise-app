import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
export default class Login extends Component {
  render() {
    if (isBrowser) {
      return (
        <div class="error">
          <p class="error-content">This content is unavailable on browser</p>
        </div>
      );
    }
    return (
      <>
        <Logo />
        <div className="app moveToBottom">
          <div className="auth center">
            <div className="form">
              <input
                id="user"
                className="control islogged"
                type="text"
                placeholder="Utilisateur"
              />
              <label for="user" class="fas fa-user icon"></label>
            </div>
            &nbsp;
            <div className="form">
              <input
                id="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <label for="password" class="fas fa-key icon"></label>
            </div>
            &nbsp;
            <div className="submit">
              <button className="button" type="submit">
                Connexion
              </button>
              <div className="spaced"></div>
              <button className="button gray" type="submit">
                <Link to="/account/create">Inscription</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
