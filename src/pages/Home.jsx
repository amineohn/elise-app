import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
const url = "https://localhost:8000/";
const Task = (props) => {
  return <p>{props.value}</p>;
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }
  state = {
    value: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState((_) => ({
      value,
    }));
  };

  handleAdd = (e) => {
    const { value } = this.state;
    if (value === "") {
      return;
    }
    this.props.onNewTask(value);
    this.setState((_) => ({
      value: "",
    }));
  };
  render() {
    const { value } = this.state;
    //this.setState({show, setShow: false});
    fetch(url)
      .then((data) => {
        this.setState({
          message: data.message,
        });
      })
      //.then((res) => res.json())
      .catch((error) => console.log(error));
    if (isBrowser) {
      return (
        <div class="error">
          <p class="error-text">This content is unavailable on browser</p>
        </div>
      );
    }
    return (
      <>
        <Logo />
        <div className="app fade">
          <div className="pos">
            <div className="position">
              <div className="isLogin">
                <img
                  className="user"
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                />
                <Link className="p-login" to="/login">
                  <p className="text">connecté en tant que Amine</p>
                </Link>
              </div>
              <div className="selected">
                <select id="bennes" className="selection" name="typebennes">
                  <option value="">Type de bennes</option>
                  <option value="test">test 1</option>
                  <option value="test">test 2</option>
                  <option value="test">test 3</option>
                  <option value="test">test 4</option>
                </select>
                <select id="palette" className="selection" name="typepalette">
                  <option value="">Caisse palette</option>
                  <option value="test">test 1</option>
                  <option value="test">test 2</option>
                  <option value="test">test 3</option>
                  <option value="test">test 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="data">
            <input
              value={value}
              onChange={this.handleChange}
              className="enter"
              type="number"
              placeholder="saisir un poids"
            />
            &nbsp;
            <button
              onClick={this.handleAdd}
              className="enter-submit poids gray"
            >
              Ajouter
            </button>
          </div>
          <div className="box">
            <table className="type">
              <tr className="font-weight: 500;">
                <td>Type</td>
                <td>Matière</td>
                <td>KG</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">PET</td>
                <td onClick="">
                  5kg{" "}
                  <button className="valid" type="submit">
                    <i class="fas fa-check edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Papier</td>
                <td onClick="">
                  105kg{" "}
                  <button className="valid gray" type="submit">
                    <i class="fas fa-pencil-alt edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Canettes</td>
                <td onClick="">20kg</td>
              </tr>

              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Fer</td>
                <td onClick="">65kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
              <tr>
                <td onClick="">Caisse</td>
                <td onClick="">Conserve</td>
                <td onClick="">35kg</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
