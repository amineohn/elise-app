import React from "react";
import Icons from "../Icons";
import Link from "next/link";

const Connected = () => {
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
};
export default Connected;
