import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import NavMenu from './components/NavMenu';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Passions from './components/Passions';
import ContactMe from './components/ContactMe';
import './scss/App.scss';

function App() {

  // variable to track if user scrolled down more than 500px from top
  const [scrolledDown, setScrolledDown] = useState(false);
  // variable to track if navbar is visible. If Y offset is not 0, make it not visible.
  const [isNavbarVisible, setNavbarVisibility] = useState(true);
  // Variables to track screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Create useRef hooks
  const heroRef = useRef(null);
  // const navRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const passionsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll To a section
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  };

  // Mount the app
  useEffect(() => {

    // On mount scroll to the top of the page
    // scrollToRef(heroRef)

    // when user scrolls,
    window.addEventListener("scroll", () => {

      // display navbar when user is 0 Y-offset
      if (window.pageYOffset > 0) {
        setNavbarVisibility(false)
      } else if (window.pageYOffset <= 0) {
        setNavbarVisibility(true)
      }

      // display button to scroll back to top if user scroll down more than 500px from top
      if (!scrolledDown && window.pageYOffset > 500) {
        setScrolledDown(true)
      } else if (scrolledDown && window.pageYOffset <= 500) {
        setScrolledDown(false)
      }

    })

    // Event listener for when the user changes screen size
    window.addEventListener("resize", () => {

      setWindowWidth(window.innerWidth);

    });

  }, [scrolledDown]);

  return (
    <BrowserRouter className="Browser">
      <div className="App">
        { isNavbarVisible && (
          <Navbar           
            windowWidth={windowWidth}
            aboutRef={aboutRef}
            projectRef={projectRef}
            experienceRef={experienceRef}
            passionsRef={passionsRef}
            contactRef={contactRef}
            scrollToRef={scrollToRef}
          />
        )}
        <Hero heroRef={heroRef} />
        {/* <NavMenu
          windowWidth={windowWidth}
          navRef={navRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          experienceRef={experienceRef}
          passionsRef={passionsRef}
          contactRef={contactRef}
          scrollToRef={scrollToRef}
        /> */}
        <About aboutRef={aboutRef} windowWidth={windowWidth} />
        <Projects projectRef={projectRef} windowWidth={windowWidth} />
        <Experience experienceRef={experienceRef} windowWidth={windowWidth} />
        {/* <Passions passionsRef={passionsRef} /> */}
        <ContactMe contactRef={contactRef} windowWidth={windowWidth} />
        {/* If scrolledDown is true, displays scroll to top button else nothing */}
        {scrolledDown && (
          <button onClick={() => scrollToRef(heroRef)} className="topButton" title="Go To Top"></button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
