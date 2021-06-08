import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
export default class Login extends Component {
  render() {
    if (isBrowser) {
      return (
        <div className="error">
          <p className="error-content">
            This content is unavailable on browser
          </p>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-auth"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            &nbsp;
            <div className="form">
              <input
                id="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-auth"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            &nbsp;
            <div className="submit">
              <button className="button" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-submit"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Connexion
              </button>
              <div className="spaced"></div>
              <button className="button gray" type="submit">
                <Link to="/account/create">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-submit"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Inscription
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
