import React from 'react';
import "../scss/Hero.scss";
// import Navbar from "./Navbar.js";

export default function Home(props) {

  // Deconstruct props
  const { heroRef } = props;

  return (
    <div className="hero" ref={heroRef}>
      <div className="banner">
        <div className="bannerText text-outline">
          <p>Hey, I'm</p>
          <h1>Jaehwi Kwon</h1>
          <br></br>
          <p className="text">NYC based software developer</p>
        </div>
      </div>
    </div>
  )
}
