import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;