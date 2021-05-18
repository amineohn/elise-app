import React from "react";
const BoxWeight = () => {
  return (
    <div className="box">
      <table className="type">
        <tr>
          <td className="bold">Type</td>
          <td className="bold">Matière</td>
          <td className="bold">KG</td>
        </tr>
        <hr />
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">PET</td>
          <td onClick="">
            5kg{" "}
            <button className="valid orangeDark" type="submit">
              <i class="fas fa-check edit"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Papier</td>
          <td onClick="">
            105kg{" "}
            <button className="valid gray" type="submit">
              <i class="fas fa-pencil-alt edit"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Canettes</td>
          <td onClick="">20kg</td>
        </tr>

        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Fer</td>
          <td onClick="">65kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
        <tr>
          <td onClick="">Caisse</td>
          <td onClick="">Conserve</td>
          <td onClick="">35kg</td>
        </tr>
      </table>
    </div>
  );
};
export default BoxWeight;
