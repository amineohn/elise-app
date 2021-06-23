import React, { Component } from "react";
import Icons from "../Icons";
import { useUser } from "@auth0/nextjs-auth0";
export default class AddWeight extends Component {
  render() {
    const { user, error, isLoading } = useUser();
    if (error) return <div>{error.message}</div>;
    return (
      <div className="data">
        {user ? (
          <input
            className="enter"
            type="number"
            placeholder="Saisir un poids"
          />
        ) : (
          <input
            className="enter"
            type="number"
            placeholder="Saisir un poids"
            disabled
          />
        )}
        &nbsp;
        {user ? (
          <button className="enter-submit poids gray">
            <Icons icon="login" />
            Ajouter
          </button>
        ) : (
          <button className="enter-submit poids gray" disabled>
            <Icons icon="login" />
            Ajouter
          </button>
        )}
      </div>
    );
  }
}
