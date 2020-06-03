import React from 'react'
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <div className="hero">
                <div className="banner">
                    <div className="bannerText">
                        <p>Hey, I'm</p>
                        <h1>Jaehwi Kwon</h1>
                        <br></br>
                        <br></br>
                        <p className="text">NYC raised software developer</p>
                    </div>
                </div>
            </div>
            {/* links should jump to corresponding sections */}
            <div className="bottomHero">
                <div className="linksDisplay">
                    <div className="row personalInfo">
                        <a href="#About" className="aboutJae link"><h3>About Jae</h3></a>
                        <div className="column workDone">
                            <a href="#Projects" className="projects link"><h3>Projects</h3></a>
                            <a href="#Experience" className="cv link"><h3>Experiences</h3></a>
                            <a href="#Passions" className="passions link"><h3>Passions</h3></a>
                        </div>
                    </div>
                    <div className="row contact">
                        <a href="#ContactMe" className="contactMe link"><h3>Contact Me</h3></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
