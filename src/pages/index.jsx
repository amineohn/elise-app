import React from "react";
import Logo from "../components/home/Logo";
import Type from "../components/home/Type";
import AddWeight from "../components/home/AddWeight";
import Connected from "../components/home/Connected";
import Table from "../components/home/Table";
import { motion } from "framer-motion";
export default function Home() {
  const config = {
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
      },
    },
    hidden: { y: "-20vh" },
  };
  return (
    <>
      <Logo />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={config}
        className="app"
      >
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
      </motion.div>
    </>
  );
}
