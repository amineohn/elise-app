import React, { Component } from "react";
import Icons from "../Icons";
export default class AddWeight extends Component {
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
