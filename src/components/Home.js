import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div className="hero">
                <h1 className="hero">Jaehwi Kwon</h1>
                <p className="text">Elevator pitch</p>
            </div>
            <div className="row personalInfo">
                <Link to="/about" className="aboutJae Link"><h3>About Jae</h3></Link>
                <div className="column workDone">
                    <Link to="/projects" className="projects Link"><h3>Projects</h3></Link>
                    <Link to="cv" className="cv Link"><h3>Employment History</h3></Link>
                </div>
            </div>
            <div className="row contact">
                <Link to="contact_me" className="contactMe Link"><h3>Contact Me</h3></Link>
            </div>

        </div>
    )
}
