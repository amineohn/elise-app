import React from "react";
import Icons from "../Icons";
import { useUser } from "@auth0/nextjs-auth0";
export default function AddWeight() {
  const { user, error } = useUser();
  if (error) return <div>{error.message}</div>;
  return (
    <div className="data">
      {user ? (
        <input className="enter" type="number" placeholder="Saisir un poids" />
      ) : (
        <input
          className="enter"
          type="number"
          placeholder="Saisir un poids"
          disabled
        />
      )}
      &nbsp;
      <button className="enter-submit poids gray" {...(user ? "" : "disabled")}>
        <Icons icon="login" />
        Ajouter
      </button>
    </div>
  );
}
