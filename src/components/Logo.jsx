import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import React, { Component, useEffect, useState } from "react";
const LoadingLogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image()

        img.src = src;
        img.onload = resolve()
        img.onerror = reject()
      })
    })

    await Promise.all(promises)

    setIsLoading(false)
  }
  useEffect(() => {
    cacheImages([logo]);
  })
  return (
    <div className="logo moveFromTop">
      {isLoading ?
        'Chargement..' : <Link to="/">
          <img src={logo} />
        </Link>}
    </div>
  )
}
class Logo extends Component {
  render() {
    return (
      <LoadingLogo />
    )
  }
}
export default Logo;
