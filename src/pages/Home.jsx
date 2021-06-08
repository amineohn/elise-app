import React, { Component } from "react";
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
import AddWeight from "../components/AddWeight";
import Connected from "../components/Connected";
import Table from "../components/Table";
const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Request-Method': 'GET'
}
export default class Home extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/session/auth');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  render() {
    fetch('http://localhost:3001/session/auth', {
      method: 'GET',
      headers: header,
      mode: 'no-cors'
    }).then((res) => {
      console.log(res.data);
    })
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
                {this.state.data}
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