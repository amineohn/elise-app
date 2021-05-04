import { Link } from "react-router-dom";
const Logging = () => {
    return (
        <div className="isLogin">
        <img
          className="user"
          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
        />
        <Link className="p-login" to="/login">
          <p className="text">connecté en tant que Amine</p>
        </Link>
      </div>
    )
}
export default Logging;