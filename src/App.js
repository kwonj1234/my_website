import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Passions from './components/Passions';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  // variable to track if user scrolled down more than 500px from top
  const [scrolledDown, setScrolledDown] = useState(false)
  // display button to scroll back to top if user scroll down more than 500px from top
  const toggleVisibility = () => {
    if (!scrolledDown && window.pageYOffset > 1500) {
      setScrolledDown(true)
    } else if (scrolledDown && window.pageYOffset <= 1500) {
      setScrolledDown(false)
    }
  }
  // when user scrolls, if will activate toggleVisibility
  window.addEventListener("scroll", toggleVisibility)

  const scrollToTop = () => {
    window.scrollTo({
      top: 805,
      behavior: "smooth"
    });
  }

  // Create useRef hooks
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const passionsRef = useRef(null);
  const contactRef = useRef(null);
  // Scroll To a section
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  };

  const useMountEffect = (fun) => useEffect(fun, []);
  useMountEffect(() => scrollToRef(homeRef));


  return (
    <BrowserRouter className="Browser">
      <div className="App">
        <Home 
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          experienceRef={experienceRef}
          passionsRef={passionsRef}
          contactRef={contactRef}
          scrollToRef={scrollToRef}
        />
        <About aboutRef={aboutRef} />
        <Projects projectRef={projectRef} />
        <Experience experienceRef={experienceRef} />
        <Passions passionsRef={passionsRef} />
        <ContactMe contactRef={contactRef} />
        {/* If scrolledDown is true, displays scroll to top button else nothing */}
        {scrolledDown && (
          <button onClick={scrollToTop} className="topButton" title="Go To Top"><img src="images/up_arrow.png"/></button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
