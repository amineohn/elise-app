import React, { Component } from "react";
import Logo from "../home/Logo";
import Icons from "../Icons";
export default class CreateAccount extends Component {
  render() {
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
              <Icons icon="user" />
            </div>
            &nbsp;
            <div className="form">
              <input
                htmlFor="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <Icons icon="password" />
            </div>
            &nbsp;
            <div className="submit">
              <button className="button" type="submit">
                <Icons icon="submit" />
                Connexion
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
