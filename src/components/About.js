import React from 'react'
import "./About.css"

export default function About(props) {
    return (
        <div className="About" ref={props.aboutRef}>
            <br></br>
            <h1 className="section-title">Profile</h1>
            <div className="row aboutContent">
                <div className="selfDescrip">
                    <h2>About Jae</h2>
                    <p>
                        Environmental Engineer, healthcare provider, air quality inspector
                        turned software developer. I love optimization, there is always a 
                        better way to do a task and I intend to find those ways. I tend to
                        fixate on details until they reflect what I envision but, as a 
                        developing programmer, I am always open to suggestions. For that
                        reason, I prefer working in teams. Sometimes, a rubber duck just isn't
                        enough.
                    </p>
                </div>
                <div className="selfie"/>
                <div className="skills">
                    <h2>Tech Skills</h2>
                    <div className="row">
                        <ul className="no-style">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Flask</li>
                        </ul>
                        <ul className="no-style">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL (Sqlite)</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
