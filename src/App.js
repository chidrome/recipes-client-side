import React from 'react';
import '../src/scss/core.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MoreDetails from './components/MoreDetails'
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
         <Route path="/moreDetails" component={
          () => (<MoreDetails />)
        } />
      </Router>
    </div>
  );
}

export default App;
