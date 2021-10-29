import React from "react";
import Link from "next/link";
import FadeIn from "react-fade-in";
const LoadingLogo = () => {
  return (
    <FadeIn>
      <div className="flex justify-center items-center p-5 bg-white">
        <Link href="/">
          <a>
            <img
              src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg"
              alt=""
            />
          </a>
        </Link>
      </div>
    </FadeIn>
  );
};
export default LoadingLogo;
