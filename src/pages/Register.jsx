import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
export default class Register extends Component {
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
          <div className="auth">
            <div className="form">
              <input
                htmlFor="user"
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
                htmlFor="token"
                className="control islogged"
                type="password"
                placeholder="Code"
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
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" 
              />
            </svg>
            </div>
            &nbsp;
            <div className="form">
              <input
                htmlFor="password"
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
            </div>
          </div>
        </div>
      </>
    );
  }
}
