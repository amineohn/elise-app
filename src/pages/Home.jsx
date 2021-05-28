import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
import AddWeight from "../components/AddWeight";
import Connected from "../components/Connected";
import BoxWeight from "../components/BoxWeight";
import axios from "axios"
const url = "http://localhost:8000/users/1"; //test
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }
  render() {
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => {
        this.username = data.username;
      })
      //.then((res) => res.json())
      .catch((error) => console.log(error));
    if (isBrowser) {
      return (
        <div className="error">
          <p className="error-content">This content is unavailable on browser</p>
        </div>
      );
    }
    return (
      <>
        <Logo />
        <div className="app moveToBottom">
          <div className="container">
            <div className="grid">
              <Connected />
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
          <AddWeight />
          <BoxWeight />
        </div>
      </>
    );
  }
}
