import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Hobbies from './components/Hobbies';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <BrowserRouter className="Browser">
      <div className="App">
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/cv" component={CV}/>
          <Route path="/contact_me" component={ContactMe}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
