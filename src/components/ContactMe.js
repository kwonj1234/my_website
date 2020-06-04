import React from 'react'
import "./ContactMe.css"

export default function ContactMe() {
    return (
        <div className="ContactMe">
            <br/>
            <h1>Contact Me!</h1>
            <div className="contactContent">
                <p>Whatever your reason for reaching out, I would love to hear from you!</p>
            </div>
            <div className="row contactInfo">
                <a 
                    href="https://www.linkedin.com/in/jaehwi-kwon/" 
                    className="icon linkedin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                />
                <a
                    href="mailto:jaehwikwn@gmail.com" 
                    className="icon email" 
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </div>
        </div>
    )
}
