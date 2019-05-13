import React from 'react';
<<<<<<< HEAD
import '../src/scss/core.scss';

import AboutUs from './components/AboutUs'
=======
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route} from 'react-router-dom';
>>>>>>> b978a53fd1948f2ce6f6b71b6e0a716e705a3e06
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={
          () => (<Home />)
        } />
        <Route path="/aboutus" component={
          () => (<AboutUs />)
        } />
      </Router>
    </div>
  );
}

export default App;
