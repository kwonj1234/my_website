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
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/cv" component={CV}/>
          <Route exact path="/hobbies" component={Hobbies}/>
          <Route exact path="/contact_me" component={ContactMe}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
