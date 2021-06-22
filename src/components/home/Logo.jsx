import logo from "../../assets/img/logo.jpg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const LoadingLogo = () => {
  const config = {
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
      },
    },
    hidden: { y: "-10vh" },
  };
  const [isLoading, setIsLoading] = useState(true);
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };
  useEffect(() => {
    cacheImages([logo]);
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={config}
      className="logo"
    >
      {isLoading ? (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <Link href="/">
          <a>
            <img src={logo} alt="" />
          </a>
        </Link>
      )}
    </motion.div>
  );
};
export default LoadingLogo;
