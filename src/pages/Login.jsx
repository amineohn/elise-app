import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
class Login extends Component {
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
            <br />
            <div className="form">
              <input
                id="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <label for="password" class="fas fa-key icon"></label>
            </div>
            <br />
            <div className="submit">
              <button className="button" type="submit">
                Connexion
              </button>
              <div className="spaced"></div>
              <button className="button gray" type="submit">
                <Link to="/register">Inscription</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
