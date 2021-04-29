import React from 'react'

export default function ProjectCard({windowWidth, title, href, imageStyle, ...props}) {
  return (
    windowWidth > 900 ?
      <div className="row projComponent">
        <a href={href} className={`leftColumn project-image ${imageStyle}`} target="_blank" rel="noopener noreferrer"/>
        <div className="rightColumn">
          <h4><a href={href} target="_blank" rel="noopener noreferrer">{title}</a></h4>
          <br></br>
          {props.children}
        </div>
      </div>
    :
      <div className="projComponent-mobile">
        <h4><a href={href} target="_blank" rel="noopener noreferrer">{title}</a></h4>
        <div className="image-container">
          <a href={href} className={`${imageStyle} project-image`} target="_blank" rel="noopener noreferrer"/>
        </div>
        <br></br>
        {props.children}
      </div>
  )
}
