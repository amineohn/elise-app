import React from "react";
import Logo from "../components/home/Logo";
import Type from "../components/home/Type";
import AddWeight from "../components/home/AddWeight";
import Connected from "../components/home/Connected";
import Table from "../components/home/Table";

export default function Home() {
  return (
    <>
      <Logo />
      <div className="app moveToBottom">
        <div className="container">
          <div className="grid">
            <Connected />
            <Type />
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
