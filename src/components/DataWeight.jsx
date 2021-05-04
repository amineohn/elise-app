import React, { Component } from "react";
class DataWeight extends Component {
    render() {
        return (
            <div className="data">
                <input
                    className="enter"
                    type="number"
                    placeholder="saisir un poids"
                />
        &nbsp;
                <button
                    className="enter-submit poids gray"
                >
                    Ajouter
        </button>
            </div>
        )
    }
}
export default DataWeight;