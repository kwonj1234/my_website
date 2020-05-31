import React from 'react'

export default function About() {
    return (
        <div className="About">
            <h1>About Jae</h1>
            <div className="row">
                <div className="column selfDescrip">
                    Environmental Engineer, healthcare provider, air quality inspector
                    turned software developer. I love optimization, there is always a 
                    better way to do a task and I intend to find those ways. I tend to
                    fixate on details until they reflect what I envision but, as a 
                    developing programmer, I am always open to suggestions and for that
                    reason prefer working in teams. Sometimes a rubber duck just isn't
                    enough.
                </div>
                <div className="column selfie"></div>
                <div className="column skills">
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL (Sqlite)</li>
                        <li>Bash</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
