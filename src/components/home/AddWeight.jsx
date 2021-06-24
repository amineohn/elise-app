import React, { Component } from "react";
import Icons from "../Icons";
export default class AddWeight extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.callAPI()
      .then((res) =>
        this.setState({
          weight: res.weight,
          data: res.data,
        })
      )
      .catch((err) => console.log(err));
  }
  callAPI = async () => {
    const response = await fetch(`${process.env.API}/weight/`, {
      method: "GET",
      weight: 0,
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return (
      <div className="data">
        <input className="enter" type="number" placeholder="Saisir un poids" />
        &nbsp;
        <button className="enter-submit poids gray">
          <Icons icon="login" />
          Ajouter
        </button>
      </div>
    );
  }
}
