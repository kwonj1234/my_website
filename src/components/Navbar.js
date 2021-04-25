import React from 'react';
import "../scss/Navbar.scss"

export default function Navbar(props) {

  // Deconstruct props
  const { navRef, aboutRef, projectRef, experienceRef, contactRef, windowWidth, scrollToRef } = props;

  return (
    <div className="Navbar">
      <button onClick={() => scrollToRef(aboutRef)} className="navbar-button"><h3>About Jae</h3></button>
      <button onClick={() => scrollToRef(projectRef)} className="navbar-button"><h3>Projects</h3></button>
      <button onClick={() => scrollToRef(experienceRef)} className="navbar-button"><h3>Experiences</h3></button>
      <button onClick={() => scrollToRef(contactRef)} className="navbar-button"><h3>Contact Me</h3></button>
    </div>
  )
}
