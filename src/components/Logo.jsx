/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import React, { Component } from "react";
class Logo extends Component {
  render() {
    return (
      <div className="logo moveFromTop">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    )
  }
}
export default Logo;
