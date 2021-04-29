import React from 'react';
import "../scss/Projects.scss";
import ProjectCard from './ProjectCard';

export default function Projects(props) {

	// deconstruct props
	const { projectRef, windowWidth } = props;

	return (
		<div className="Projects" ref={projectRef}>
			<br></br>
			<h1 className="section-title">Projects</h1>
			<div className={windowWidth > 900 ? "projectContent" : "projectContent-mobile"}>

				<ProjectCard 
					windowWidth={windowWidth}
					title="Personal Website"
					href="https://github.com/kwonj1234/my_website"
					imageStyle="my_website-image"
				>
					This site right here! My first task after graduating from Byte Academy was 
					to create my own personal websites to show off all my skills and showcase
					my style.
				</ProjectCard>

				<ProjectCard
					windowWidth={windowWidth}
					title="RecipeDex"
					href="https://github.com/kwonj1234/recipedex_frontend"
					imageStyle="recipedex-image"
				>
					RecipeDex is a web application that provides users a place to scrape recipes
					from the internet and store them for future reference without having to have
					separate accounts for each site the recipe was located in. It uses 
					recipe-scrapers, a python package that uses BeautifulSoup4, to scrape and 
					format recipes from 56 different websites. You can find my contribution to
					the recipe-scrapers tool <a 
						href="https://github.com/hhursev/recipe-scrapers/blob/master/recipe_scrapers/delish.py" 
						target="_blank" 
						rel="noopener noreferrer"
					>
						here
					</a>.
				</ProjectCard>

				<ProjectCard
					windowWidth={windowWidth}
					title="Pretty City"
					href="https://github.com/mbraly01/Pretty_City_Frontend"
					imageStyle="prettyCity-image"
				>
					A product similar to the Citizen mobile app, PrettyCity used the NYC311 API
					to give New Yorkers a visual representation of complaints in their area. Using 
					MaterialUI and Google Maps we showed pins on a map that represented all complaints
					reported to the 311.  Originally envisioned for infrastructure damage, 
					such as potholes or fallen trees, we expanded what users can see and added a filter.
				</ProjectCard>

			</div>
		</div>
	)
}
