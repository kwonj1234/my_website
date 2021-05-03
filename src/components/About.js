import React from 'react';
import "../scss/About.scss";

export default function About(props) {

	// Deconstruct props
	const { aboutRef, windowWidth } = props;

	return (
		windowWidth > 1100 ? 
			<div className="About" ref={aboutRef}>
				<br></br>
				<h1 className="section-title">Profile</h1>
				<div className="row aboutContent">
					<div className="selfDescrip">
						<h2>About Jae</h2>
						<p>
							Environmental engineer, healthcare provider, air quality inspector turned software
							developer. I began learning Python on my own prior to enrolling in Byte Academy
							where I was taught Flask, Sqlite, JavaScript and React. Since graduating from Byte 
							Academy I have also had the opportunity to learn Firebase, Google Cloud, and Flutter 
							from great mentors at Spryte Labs and PlateRate. When I am not working I enjoy playing
							chess, video games and triathlon sports.
						</p>
					</div>
					<div className="container">
						<div className="selfie"/>
					</div>
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
		:
			<div className="About-mobile" ref={aboutRef}>
				<br></br>
				<div className="aboutContent-mobile">
					<h1 className="section-title">Profile</h1>
					<div className="selfie"/>
					<div className="skills-mobile">
						<h2>Tech Skills</h2>
						<div className="row-mobile">
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
					<div className="selfDescrip-mobile">
						<h2>About Jae</h2>
						<p>
							Environmental engineer, healthcare provider, air quality inspector turned software
							developer. I began learning Python on my own prior to enrolling in Byte Academy
							where I was taught Flask, Sqlite, JavaScript and React. Since graduating from Byte 
							Academy I have also had the opportunity to learn Firebase, Google Cloud, and Flutter 
							from great mentors at Spryte Labs and PlateRate. When I am not working I enjoy playing
							chess, video games and triathlon sports.
						</p>
					</div>
				</div>
			</div>
	)
}
