import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Passions from './components/Passions';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <BrowserRouter className="Browser">
      <div className="App">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Passions />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
