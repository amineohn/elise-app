import { Link } from "react-router-dom";
import React, { Component } from "react";
class Logging extends Component {
    render() {
        return (
        <div className="isLogin">
        <img
          className="user"
          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
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