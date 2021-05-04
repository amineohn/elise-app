import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
import DataWeight from "../components/DataWeight";
import Logging from "../components/Logging";
import TableWeight from "../components/TableWeight";
const url = "https://localhost:8000/";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }
  render() {
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
              <Logging />
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
          <DataWeight />
          <TableWeight />
        </div>
      </>
    );
  }
}

export default Home;
