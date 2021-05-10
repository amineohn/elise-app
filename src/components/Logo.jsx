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
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div> : <Link to="/">
          <img src={logo} />
        </Link>}
    </div>
  )
}
export default class Logo extends Component {
  render() {
    return (
      <LoadingLogo />
    )
  }
}