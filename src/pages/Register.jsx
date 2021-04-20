/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register extends Component {
    render() {
        return (
            <>
                <div className="logo fade-in">
                    <Link to="/"><img src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg" /></Link>
                </div>
                <div className="App fade-in">
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