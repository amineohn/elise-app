import React, { Component } from "react";
import Link from "next/link";
import Logo from "../home/Logo";
import Icons from "../Icons";
import { motion } from "framer-motion";
export default class SignIn extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) =>
        this.setState({
          username: res.username,
          password: res.password,
          success: res.success,
          error: res.error,
        })
      )
      .catch((err) => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch("/session/auth", {
      username: "username",
      password: "password",
      success: false,
      error: false,
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
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
          <div className="auth center">
            <div className="form">
              <input
                id="user"
                className="control islogged"
                type="text"
                placeholder="Utilisateur"
              />
              <Icons icon="user" />
            </div>
            &nbsp;
            <div className="form">
              <input
                id="password"
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
              <div className="spaced"></div>
              <button className="button gray" type="submit">
                <Link href="/account/create">
                  <a>
                    <Icons icon="reg" />
                    Inscription
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}
