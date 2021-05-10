import avatar from "../assets/img/user.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Logging extends Component {
    render() {  
        return (
            <div className="connected">
                <Link to="/login">
                    <img
                        className="user"
                        src={avatar}
                        alt="Elise Production"
                    />
                </Link>
                <div className="login">
                    <p className="logged">connecté en tant que Amine</p>
                </div>
            </div>
        )
    }
}