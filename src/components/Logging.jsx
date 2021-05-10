import { Link } from "react-router-dom";
import avatar from "../assets/img/user.jpg";
import React, { Component } from "react";
class Logging extends Component {
    render() {
        return (
            <div className="isLogin">
                <img
                    className="user"
                    src={avatar}
                    alt='Elise Production'
                />
                <Link className="p-login" to="/login">
                    <p className="text">connecté en tant que Amine</p>
                </Link>
            </div>
        )
    }
}
export default Logging;