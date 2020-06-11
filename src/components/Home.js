import React from 'react'
import "./Home.css"

export default function Home(props) {
    return (
        <div className="Home" ref={props.homeRef}>
            <div className="hero">
                <div className="banner">
                    <div className="bannerText">
                        <p>Hey, I'm</p>
                        <h1>Jaehwi Kwon</h1>
                        <br></br>
                        <p className="text">NYC raised software developer</p>
                    </div>
                </div>
            </div>
            {/* links should jump to corresponding sections */}
            <div className="bottomHero" ref={props.navRef}>
                <div className="buttonsDisplay">
                    <div className="row personalInfo">
                        <button onClick={() => props.scrollToRef(props.aboutRef)} className="aboutJae"><h3>About Jae</h3></button>
                        <div className="column workDone">
                            <button onClick={() => props.scrollToRef(props.projectRef)} className="projects"><h3>Projects</h3></button>
                            <button onClick={() => props.scrollToRef(props.experienceRef)} className="cv"><h3>Experiences</h3></button>
                            {/* <button onClick={() => props.scrollToRef(props.passionsRef)} className="passions"><h3>Passions</h3></button> */}
                        </div>
                    </div>
                    <div className="row contact">
                        <button onClick={() => props.scrollToRef(props.contactRef)} className="contactMe"><h3>Contact Me</h3></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
