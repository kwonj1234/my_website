import React from 'react'

export default function ProjectCard({windowWidth, title, href, imageStyle, alt, ...props}) {
  return (
    windowWidth > 900 ?
      <div className="row projComponent">
        <a href={href} className="leftColumn" target="_blank" rel="noopener noreferrer">
          <img className={`${imageStyle} project-image`} alt={alt}/>
        </a>
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
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img className={`${imageStyle} project-image`} alt={alt}/> 
          </a>
        </div>
        <br></br>
        {props.children}
      </div>
  )
}
