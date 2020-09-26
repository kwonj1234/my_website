import React from 'react'
import "../scss/Passions.scss"

export default function Passions(props) {
    return (
        <div className="Passions" ref={props.passionsRef}>
            <br></br>
            <h1>Passions</h1>
            <div className="passionsContent">
                <div className="header">
                    <p>
                        I love a good story, in any medium they come in; video games, movies, books, 
                        or word of mouth. These narratives taught me how to empathize with others and try 
                        to see situations from every point of view. 
                    </p>
                    <br></br>
                    <h4>Check out some of these stories that have stuck with me.</h4>
                    <p>*Warning: content may include disturbing images, profanity, and/or references to drugs</p>
                </div>
                <div className="row display">
                    <div className="column">
                        <a 
                            href="https://www.goodreads.com/book/show/18774964-a-man-called-ove" 
                            className="link passionsLink aManCalledOve"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            A Man Called Ove
                            <br/>
                            By Frederik Backman
                        </a>
                        <a 
                            href="https://www.goodreads.com/book/show/15645.Inferno" 
                            className="link passionsLink inferno"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Inferno
                            <br/>
                            By Dante Alighieri
                        </a>
                        <a 
                            href="http://www.galactanet.com/oneoff/theegg_mod.html" 
                            className="link passionsLink theEgg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Egg
                            <br/>
                            By Andy Weir
                        </a>
                    </div>
                    <div className="column">
                        <a 
                            href="https://www.reddit.com/r/darksouls3/comments/4nj18t/lore_spoilers_the_complete_story_of_dark_souls/" 
                            className="link passionsLink darkSouls"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dark Souls
                            <br/>
                            From Software
                        </a>
                        <a 
                            href="https://thelastofus.fandom.com/wiki/The_Last_of_Us" 
                            className="link passionsLink lastOfUs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Last of Us
                            <br/>
                            Naughty Dog
                        </a>
                        <a 
                            href="https://www.wired.com/story/pyre-game-review/#:~:text=Pyre%20is%20the%20story%20of,freedom%20on%20their%20own%20terms.&text=Its%20cross%20between%20Ultimate%20Frisbee,the%20highlight%20of%20the%20game."
                            className="link passionsLink pyre"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Pyre
                            <br/>
                            Supergiant Games
                        </a>
                    </div>
                    <div className="column">
                        <a 
                            href="https://www.imdb.com/title/tt0338013/?ref_=vp_back"
                            className="link passionsLink eternalSunshine"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Eternal Sunshine of the Spotless Mind
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/John_Wick"
                            className="link passionsLink johnWick"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            John Wick
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Comedian_(film)"
                            className="link passionsLink comedian"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jerry Seinfeld: Comedian
                        </a>
                    </div>
                    <div className="column">
                        <a
                            href="https://www.eater.com/2017/2/18/14653382/jeong-kwan-buddhist-nun-chefs-table"
                            className="link passionsLink jeongKwan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Chef's Table: Jeong Kwan
                        </a>
                        <a
                            href="https://variety.com/2020/tv/news/dont-fuck-with-cats-netflix-luka-magnotta-deanna-thompson-1203479502/"
                            className="link passionsLink dontFWithCats"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Don't F**k With Cats: Hunting an Internet Killer*
                        </a>
                        <a
                            href="https://www.dancarlin.com/"
                            className="link passionsLink danCarlin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dan Carlin's Hardcore History
                        </a>
                    </div>
                    <div className="column">
                        <a
                            href="https://www.ted.com/talks/joseph_kim_the_family_i_lost_in_north_korea_and_the_family_i_gained?language=en"
                            className="link passionsLink TED"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TED: Joseph Kim
                        </a>
                        <a
                            href="https://themoth.org/stories/roadside"
                            className="link passionsLink theMoth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Moth: Roadside
                            <br/>
                            by David Park
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=VcMIeyjggbM"
                            className="link passionsLink thisIsNotHappening"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            This is Not Happening: Jessa Reed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
