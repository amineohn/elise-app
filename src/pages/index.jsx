import React from "react";
import Logo from "../components/home/Logo";
import Type from "../components/home/Type";
import AddWeight from "../components/home/AddWeight";
import Icons from "../components/Icons";
import Table from "../components/home/Table";
import { motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
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
            <div className="connected">
              <a href="/api/auth/login">
                <a>
                  <Icons icon="profile" />
                </a>
              </a>
              user && (
              <div className="login">
                <p className="logged">connecté en tant que {user.name}</p>
              </div>
              )
            </div>
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
