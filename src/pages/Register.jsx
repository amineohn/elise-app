/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
class Register extends Component {
    render() {
        if (isBrowser) {
            return <div class="error"><p class="error-text">This content is unavailable on browser</p></div>
        }
        return (
            <>
                <Logo />
                <div className="App slide">
                    <div className="inputs test">
                        <div className="form">
                            <i class="fas fa-user icon"></i>
                            <input className="control" type="text" placeholder="Utilisateur" />
                        </div>
                        <br />
                        <div className="form">
                            <i class="fas fa-lock icon"></i>
                            <input className="control" type="text" placeholder="Token (sécurité)" />
                        </div>
                        <br />
                        <div className="form">
                            <i class="fas fa-key icon"></i>
                            <input className="control" type="text" placeholder="Mot de passe" />
                        </div>
                        <br />
                        <div className="submit">
                            <button className="button" type="submit">Connexion</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;