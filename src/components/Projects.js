import React from 'react'
import "./Projects.css"

export default function Projects(props) {
    return (
        <div className="Projects" ref={props.projectRef}>
            <br></br>
            <h1 className="section-title">Projects</h1>
            <div className="projectContent">
                <div className="row projComponent">
                    <a href="https://github.com/kwonj1234/my_website" className="leftColumn my_website-image" target="_blank" rel="noopener noreferrer"/>
                    <div className="rightColumn">
                        <h4>Personal Website</h4>
                        <br></br>
                        This site right here! My first task after graduating from Byte Academy was 
                        to create my own personal websites to show off all my skills and showcase
                        my style.
                    </div>
                </div>
                <div className="row projComponent">
                    <a href="https://github.com/kwonj1234/recipedex_frontend" className="leftColumn recipedex-image" target="_blank" rel="noopener noreferrer"/>
                    <div className="rightColumn">
                        <h4>RecipeDex</h4>
                        <br></br>
                        Recipedex is a web application that provides user a place to scrape recipes
                        from the internet and store them for future reference without having to have
                        separate accounts for whatever site the recipe was located in. It uses 
                        recipe-scrapers, a python package that uses BeautifulSoup4, to scrape and 
                        format recipes from 56 different websites. You can find my contribution to
                        the recipe-scrapers tool <a 
                            href="https://github.com/hhursev/recipe-scrapers/blob/master/recipe_scrapers/delish.py" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            here
                        </a>.
                    </div>
                </div>
                <div className="row projComponent">
                    <a href="https://github.com/mbraly01/Pretty_City_Frontend" className="leftColumn prettyCity-image" target="_blank" rel="noopener noreferrer"/>
                    <div className="rightColumn">
                        <h4>Pretty City</h4>
                        <br></br>
                        A product similar to the Citizen mobile app, PrettyCity used the NYC311 api 
                        to give New Yorkers a visual representation of complaints in their area. Using 
                        MaterialUI and Google Maps we showed pins on a map that represented all complaints
                        reported to the 311 api.  Originally envisioned for infrastructure damage, 
                        such as potholes or fallen trees, we expanded what users can see and added a filter.
                    </div>
                </div>
            </div>
        </div>
    )
}
