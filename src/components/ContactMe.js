import React from 'react'
import "../scss/ContactMe.scss"

export default function ContactMe(props) {
  return (
    <div className="ContactMe" ref={props.contactRef}>
      <br/>
      <h1>Contact Me!</h1>
      <div className="contactContent">
        <p>Whatever your reason for reaching out, I would love to hear from you!</p>
      </div>
      <div className="row icon-container">
        <a href="https://www.linkedin.com/in/jaehwi-kwon/" target="_blank" rel="noopener noreferrer">
          <img src="https://pluspng.com/img-png/linkedin-icon-png-linkedin-icon-image-512.png" className="icon-linkedin" alt=""/>
        </a>
        <a href="mailto:jaehwikwn@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://www.iconsdb.com/icons/download/gray/mail-512.png" className="icon-email" alt=""/>
        </a>
      </div>
    </div>
  )
}