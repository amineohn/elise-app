import avatar from "../assets/img/user.jpg";
import React, { Component } from "react";
class Logging extends Component {
    render() {
        return (
            <div className="connected">
                <img
                    className="user"
                    src={avatar}
                    alt='Elise Production'
                />
                <div className="login">
                    <p className="logged">connecté en tant que Amine</p>
                </div>
            </div>
        )
    }
}
export default Logging;