import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div className="hero">
                <div className="banner">
                    <div className="bannerText">
                        <h1>Jaehwi Kwon</h1>
                        <br></br>
                        <p className="text">Elevator pitch</p>
                    </div>
                </div>
            </div>
            <div className="bottomHero">
                <div className="linksDisplay">
                    <div className="row personalInfo">
                        <Link to="/about" className="aboutJae Link"><h3>About Jae</h3></Link>
                        <div className="column workDone">
                            <Link to="/projects" className="projects Link"><h3>Projects</h3></Link>
                            <Link to="/cv" className="cv Link"><h3>Employment History</h3></Link>
                        </div>
                    </div>
                    <div className="row contact">
                        <Link to="/contact_me" className="contactMe Link"><h3>Contact Me</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
