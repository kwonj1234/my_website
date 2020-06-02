import React from 'react'

export default function Experience() {
    return (
        <div className="Experience">
            <h1>Experience</h1>
            <p>You can download a copy of my resume <a>here</a></p>
            <div className="row">
                <div className="leftColumn">
                    <h4>Nulife Med LLC</h4>
                    <p>Feburary 2018 - January 2020</p>
                </div>
                <div className="rightColumn">
                    <h5>Sales Service Representative</h5>
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
            <div className="row">
                <div className="leftColumn">
                    <h4>J.C. Broderick & Associates, Inc.</h4>
                    <p>June 2018 - September 2018</p>
                </div>
                <div className="rightColumn">
                    <h5>Air Sampling Technician (Inten)</h5>
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
        </div>
    )
}
