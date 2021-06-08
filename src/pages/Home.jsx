import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
import AddWeight from "../components/AddWeight";
import Connected from "../components/Connected";
import Table from "../components/Table";
import axios from "axios";
const url = "http://localhost:8000/1"; //test
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }
  render() {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "text/plain": "/",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
          "Content-Security-Policy": "frame-ancestors * 'self' ",
        },
      })
      .then((res) => res.json())
      .catch((error) => console.log(error));
    if (isBrowser) {
      return (
        <div className="error">
          <p className="error-content">
            This content is unavailable on browser
          </p>
        </div>
      );
    }
    const bennes = [
      {
        bennes: "2000kg",
        value: "deuxtonnes",
      },
    ];
    const palette = [
      {
        value: "660L (37kg)",
        poids: "poids",
      },
    ];
    return (
      <>
        <Logo />
        <div className="app moveToBottom">
          <div className="container">
            <div className="grid">
              <Connected />
              <div className="selected">
                <select id="bennes" className="selection" name="typebennes">
                  <option>Type de bennes</option>
                  {bennes.map((item) => (
                    <>
                      <option value={item.value}>{item.bennes}</option>
                    </>
                  ))}
                </select>
                <select id="palette" className="selection" name="typepalette">
                  <option>Caisse palette</option>
                  {palette.map((item) => (
                    <>
                      <option value={item.poids}>{item.value}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <AddWeight />
          <div className="box">
            <table className="type">
              <tr>
                <td className="bold">Type</td>
                <td className="bold">Matière</td>
                <td className="bold">KG</td>
              </tr>
              <hr />
              <Table />
            </table>
          </div>
        </div>
      </>
    );
  }
}