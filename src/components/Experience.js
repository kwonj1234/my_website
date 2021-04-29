import React from 'react'
import "../scss/Experience.scss"
import ExperienceCard from './ExperienceCard';

export default function Experience(props) {

  // Deconstruct props
  const {experienceRef, windowWidth, ...rest} = props;

  return (
    <div className="Experience" ref={experienceRef}>
      <br></br>
      <h1 className="section-title">Experience</h1>
      <p>You can download a copy of my resume <a 
        href="../downloadable_files/Resume_JaehwiKwon.pdf" 
        download> here</a>
      </p>
      <div className={windowWidth > 900 ? "experienceContent" : "experienceContent-mobile"}>
        <div className="workHistory">
          <h2>Roles I Have Held</h2>
          <div class="line"/>
          <br></br>

          <ExperienceCard
            company="Spryte Labs"
            dates="June 2020 - Present"
            position="Software Engineering Intern"
            windowWidth={windowWidth}
          >
            This was a remote position that utilized a sprint methodology to push a new feature
            every 2-weeks to Spryte's commercial site. The site was built using React, a 
            firebase database, cloud functions and many components used were from the 
            Material UI and Syncfusion React component libraries. As an intern, I worked on
            styling the website, ensuring clients can access their data, and build write
            cloud functions that handle changes within the firestore database.
          </ExperienceCard>
          
          <ExperienceCard
            company="Nulife Med LLC"
            dates="Feburary 2018 - January 2020"
            position="Sales Service Representative"
            windowWidth={windowWidth}
          >
            Contrary to the job title, my role did not involve selling the company's projuct. 
            My primary role was to visit the homes of post-operative patients, who
            were usually operated on by a doctor the company has a relationship with, 
            and show them how to use a pneumatic compressor (PC) machine and/or a continuous
            passive movement (CPM) machine. I kept in touch with all my assigned patients
            during the time they had the machine and kept my supervisor up to date on 
            all of my patients conditions or issues.
          </ExperienceCard>
          
          <ExperienceCard
            company="J.C. Broderick & Associates, Inc."
            dates="June 2018 - September 2018"
            position="Air Sampling Technician (Intern)"
            windowWidth={windowWidth}
          >
            As an intern at JCB, I received training and certification to become a
            licensed air sampling technician to monitor asbestos levels at job sites
            with known asbestos containing materials. In this role, I was very much
            left to my own devices. I was let known which project I was assigned to, 
            and I followed the schedule of the contractors. If they were on site I had
            to be there as well. Scheduling conflicts I passed on to my manager, but
            any violations of industrial code rule were usually left up to me to deal with.
            I had to learn pretty quickly how to speak critically of men much larger
            than me.
          </ExperienceCard>
          
          <ExperienceCard
            company="Global Resource Management Consultancy Inc."
            dates="June 2016 - September 2016"
            position="Intern"
            windowWidth={windowWidth}
          >
            During my time at GRMC, I was trained to use Autodesk Revit and then 
            tasked to convert AutoCAD drawing into 3D Revit models. As a became
            more acclimated to the software I was then given point clouds of 
            buildings GRMC had previously been consulted on and tasked with 
            modeling previous jobs into Revit models.
          </ExperienceCard>

        </div>
        <div className="educationHistory">
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
    </div>
  )
}
