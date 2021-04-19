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
        <a className="icon-linkedin" href="https://www.linkedin.com/in/jaehwi-kwon/" target="_blank" rel="noopener noreferrer" />
        <a className="icon-email" href="mailto:jaehwikwn@gmail.com" target="_blank" rel="noopener noreferrer" />
      </div>
    </div>
  )
}