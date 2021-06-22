import React from "react";
const AddWeight = () => {
  return (
    <div className="data">
      <input className="enter" type="number" placeholder="Saisir un poids" />
      &nbsp;
      <button className="enter-submit poids gray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-submit"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        Ajouter
      </button>
    </div>
  );
};
export default AddWeight;
