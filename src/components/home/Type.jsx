import React, { Component } from "react";
export default class Type extends Component {
  render() {
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
      </>
    );
  }
}
