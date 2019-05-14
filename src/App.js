import React from 'react';
import '../src/scss/core.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MoreDetails from './components/MoreDetails';
import SeeAllResults from './components/SeeAllResults';
import { BrowserRouter as Router, Route} from 'react-router-dom';


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
        <Route path="/allResults" component={
          () => (<SeeAllResults />)
        } />
      </Router>
    </div>
  );
}

export default App;
