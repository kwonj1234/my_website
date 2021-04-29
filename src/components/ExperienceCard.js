import React from 'react'

export default function ExperienceCard({company, dates, href, imageStyle, position, windowWidth, ...props}) {
  return (
    windowWidth > 900 ? 
      <div className="row workComponent">
        <div className="leftColumn">
          <h3>{company}</h3>
          <p>{dates}</p>
        </div>
        <div className="rightColumn">
          <h4>{position}</h4>
          <p>
            {props.children}
          </p>
        </div>
      </div>
    :
      <div className="workComponent">
        <div className="experience-company">
          <h3>{company}</h3>
          <p>{dates}</p>
        </div>
        <div>
          <h4>{position}</h4>
          <p>
            {props.children}
          </p>
        </div>
      </div>
  )
}
