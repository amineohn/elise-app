/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
class Login extends Component {
    render() {
        if (isBrowser) {
            return <div class="error"><p class="error-text">This content is unavailable on browser</p></div>
        }
        return (
            <>
                <Logo />
                <div className="App slide">
                    <div className="inputs log">
                        <div className="form">
                            <input id="user" className="control" type="text" placeholder="Utilisateur" />
                            <label for="user" class="fas fa-user icon"></label>
                        </div>
                        <br />
                        <div className="form">
                            <input id="password" className="control" type="password" placeholder="Mot de passe" />
                            <label for="password" class="fas fa-key icon"></label>
                        </div>
                        <br />
                        <div className="submit">
                            <button className="button" type="submit">Connexion</button>
                            <div className="spaced"></div>
                            <button className="button orangeDark" type="submit"><Link to="/register">Inscription</Link></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;