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
                            <i class="fas fa-user icon"></i>
                            <input className="control" type="text" placeholder="Utilisateur" />
                        </div>
                        <br />
                        <div className="form">
                            <i class="fas fa-key icon"></i>
                            <input className="control" type="text" placeholder="Mot de passe" />
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