import React from 'react'
import "../scss/NavMenu.scss"

export default function Navbar(props) {

  // Deconstruct props
  const { navRef, aboutRef, projectRef, experienceRef, contactRef, windowWidth, scrollToRef } = props;

  return (
    <div className={windowWidth > 800 ? "navmenu" : "navmenu-mobile"} ref={navRef}>
      {/* links should jump to corresponding sections */}
      { windowWidth > 800 ?
        <div className="buttonsDisplay">
          <div className="row personalInfo">
            <button onClick={() => scrollToRef(aboutRef)} className="aboutJae"><h3>About Jae</h3></button>
            <div className="column workDone">
              <button onClick={() => scrollToRef(projectRef)} className="projects"><h3>Projects</h3></button>
              <button onClick={() => scrollToRef(experienceRef)} className="cv"><h3>Experiences</h3></button>
              {/* <button onClick={() => props.scrollToRef(props.passionsRef)} className="passions"><h3>Passions</h3></button> */}
            </div>
          </div>
          <div className="row contact">
            <button onClick={() => scrollToRef(contactRef)} className="contactMe"><h3>Contact Me</h3></button>
          </div>
        </div>
      : 
        <div className="buttonsDisplay">
          <button onClick={() => scrollToRef(aboutRef)} className="aboutJae-mobile"><h3>About Jae</h3></button>
          <button onClick={() => scrollToRef(projectRef)} className="projects-mobile"><h3>Projects</h3></button>
          <button onClick={() => scrollToRef(experienceRef)} className="cv-mobile"><h3>Experiences</h3></button>
          <button onClick={() => scrollToRef(contactRef)} className="contactMe-mobile"><h3>Contact Me</h3></button>
        </div>
      }
    </div>
  )
}
