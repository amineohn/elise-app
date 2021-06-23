import React, { Component } from "react";
import Logo from "../home/Logo";
import Icons from "../Icons";
import { motion } from "framer-motion";
export default class CreateAccount extends Component {
  render() {
    const config = {
      visible: {
        y: 0,
        transition: {
          duration: 0.7,
          when: "beforeChildren",
        },
      },
      hidden: { y: "-30vh" },
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
          <div className="auth">
            <div className="form">
              <input
                htmlFor="user"
                className="control islogged"
                type="text"
                placeholder="Utilisateur"
              />
              <Icons icon="user" />
            </div>
            &nbsp;
            <div className="form">
              <input
                htmlFor="password"
                className="control islogged"
                type="password"
                placeholder="Mot de passe"
              />
              <Icons icon="password" />
            </div>
            &nbsp;
            <div className="submit">
              <button className="button" type="submit">
                <Icons icon="submit" />
                Connexion
              </button>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}
