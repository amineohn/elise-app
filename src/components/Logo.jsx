/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
const Logo = () => {
  return (
    <div className="logo slide">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};
export default Logo;
