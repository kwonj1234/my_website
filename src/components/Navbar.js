import React from 'react'
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <div className="navbar" ref={props.navRef}>
      <span>
        <button onClick={() => props.scrollToRef(props.aboutRef)} className="aboutJae">About Jae</button>
        <button onClick={() => props.scrollToRef(props.projectRef)} className="projects">Projects</button>
        <button onClick={() => props.scrollToRef(props.experienceRef)} className="cv">Experiences</button>
        <button onClick={() => props.scrollToRef(props.contactRef)} className="contactMe">Contact Me</button>
      </span>
    </div>
  )
}
