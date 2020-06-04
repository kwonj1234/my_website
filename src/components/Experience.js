import React from 'react'
import "./Experience.css"

export default function Experience() {
    return (
        <div className="Experience">
            <br></br>
            <h1>Experience</h1>
            <p>You can download a copy of my resume <a>here</a></p>
            <div className="experienceContent">
                <h2>Roles I Have Held</h2>
                <div class="line"/>
                <br></br>
                <div className="row workComponent">
                    <div className="leftColumn">
                        <h3>Nulife Med LLC</h3>
                        <p>Feburary 2018 - January 2020</p>
                    </div>
                    <div className="rightColumn">
                        <h4>Sales Service Representative</h4>
                        <p>
                            Contrary to the job title, I was not selling the company's products in this
                            role. My primary role was to visit the homes of post-operative patients, who
                            were usually operated on by a doctor the company has a relationship with, 
                            and show them how to use a pneumatic compressor (PC) machine and/or a continuous
                            passive movement (CPM) machine. I kept in touch with all my assigned patients
                            during the time they had the machine and kept my supervisor up to date on 
                            all of my patients conditions or issues.
                        </p>
                    </div>
                </div>
                <div className="row workComponent">
                    <div className="leftColumn">
                        <h3>J.C. Broderick & Associates, Inc.</h3>
                        <p>June 2018 - September 2018</p>
                    </div>
                    <div className="rightColumn">
                        <h4>Air Sampling Technician (Inten)</h4>
                        <p>
                            As an intern at JCB, I received training and certification to become a
                            licensed air sampling technician to monitor asbestos levels at job sites
                            with known asbestos containing materials. In this role, I was very much
                            left to my own devices. I was let known which project I was assigned to, 
                            and I followed the schedule of the contractors. If they were on site I had
                            to be there as well. Scheduling conflicts I passed on to my manager, but
                            any violations of industrial code rule were usually left up to me to deal with.
                            I had to learn pretty quickly how to speak critically of men much larger
                            than me.
                        </p>
                    </div>
                </div>
                <div className="row workComponent">
                    <div className="leftColumn">
                        <h3>Global Resource Management Consultancy Inc.</h3>
                        <p>June 2016 - September 2016</p>
                    </div>
                    <div className="rightColumn">
                        <h4>Intern</h4>
                        <p>
                            During my time at GRMC, I was trained to use Autodesk Revit and then 
                            tasked to convert AutoCAD drawing into 3D Revit models. As a became
                            more acclimated to the software I was then given point clouds of 
                            buildings GRMC had previously been consulted on and tasked with 
                            modeling previous jobs into Revit models.
                        </p>
                    </div>
                </div>
                <h2>Education</h2>
                <div className="line"/>
                <br></br>
                <div className="row educationComponent">
                    <div className="leftColumn">
                        <h3>Byte Academy</h3>
                        <p>Graduated April 2020</p>
                    </div>
                    <div className="rightColumn">
                        <h4>Python Full Stack Immersive Course</h4>
                        <p>
                            Full stack development course utilizing React, Flask, and Sqlite to 
                            develop a full stack applicatoin 
                        </p>
                    </div>
                </div>
                <div className="row educationComponent">
                    <div className="leftColumn">
                        <h3>CUNY City College of New York</h3>
                        <p>Graduated May 2017</p>
                    </div>
                    <div className="rightColumn">
                        <h4>Bachelor's of Engineering</h4>
                        <p>
                            Earth System Science and Envionmental Engineering
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
