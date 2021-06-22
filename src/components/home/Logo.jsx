import logo from "../../assets/img/logo.jpg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const LoadingLogo = () => {
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
    <div className="logo moveFromTop">
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
    </div>
  );
};
export default LoadingLogo;
