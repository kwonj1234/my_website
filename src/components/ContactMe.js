import React from 'react'
import "../scss/ContactMe.scss"
import iconLinkedin from '../images/icon_linkedin.png';
import iconEmail from '../images/icon-email.png';

export default function ContactMe(props) {

  // Deconstruct props
  const { contactRef } = props;

  return (
    <div className="ContactMe" ref={contactRef}>
      <br/>
      <h1>Contact Me!</h1>
      <div className="contactContent">
        <p>Whatever your reason for reaching out, I would love to hear from you!</p>
      </div>
      <div className="row icon-container">
        <a href="https://www.linkedin.com/in/jaehwi-kwon/" target="_blank" rel="noopener noreferrer" >
          <img className="icon-linkedin" src={iconLinkedin} alt="linkedin" />
        </a>
        <a href="mailto:jaehwikwn@gmail.com" target="_blank" rel="noopener noreferrer" >
          <img className="icon-email" src={iconEmail} alt="Email"/>
        </a>
      </div>
    </div>
  )
}