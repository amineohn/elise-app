import React, { Component } from "react";
import Icons from "../Icons";
import Link from "next/link";

export default class Connected extends Component {
  render() {
    return (
      <div className="connected">
        <Link href="/account/login">
          <a>
            <Icons icon="profile" />
          </a>
        </Link>
        <div className="login">
          <p className="logged">connecté en tant que Amine</p>
        </div>
      </div>
    );
  }
}
