import React from 'react';
import "../scss/Navbar.scss"

export default function Navbar(props) {

  // Deconstruct props
  const { aboutRef, projectRef, experienceRef, contactRef, windowWidth, scrollToRef } = props;

  return (
    <div className="Navbar">
      <div className="button-container">
        <button onClick={() => scrollToRef(aboutRef)} className={windowWidth > 1100 ? "navbar-button" : "navbar-button-mobile"}><h3>About Jae</h3></button>
      </div>
      <div className="button-container">
        <button onClick={() => scrollToRef(projectRef)} className={windowWidth > 1100 ? "navbar-button" : "navbar-button-mobile"}><h3>Projects</h3></button>
      </div>
      <div className="button-container">
        <button onClick={() => scrollToRef(experienceRef)} className={windowWidth > 1100 ? "navbar-button" : "navbar-button-mobile"}><h3>Experiences</h3></button>
      </div>
      <div className="button-container">
        <button onClick={() => scrollToRef(contactRef)} className={windowWidth > 1100 ? "navbar-button" : "navbar-button-mobile"}><h3>Contact Me</h3></button>
      </div>
    </div>
  )
}
