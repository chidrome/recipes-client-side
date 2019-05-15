import React, { Component } from 'react';
import '../src/scss/core.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MoreDetails from './components/MoreDetails';
import SeeAllResults from './components/SeeAllResults';
import { BrowserRouter as Router, Route} from 'react-router-dom';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: []
    };
  }

  handleFormRecipe = (results) => {
    this.setState({ 
      recipe: results
     })
  }

  
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={
            () => (<Home handleFormRecipe = {this.handleFormRecipe} recipe = {this.state.recipe} />)
          } />
          <Route path="/aboutus" component={
            () => (<AboutUs />)
          } />
          <Route path="/moreDetails" component={
            () => (<MoreDetails />)
          } />
          <Route path="/allResults" component={
              () => (<SeeAllResults recipes = {this.state.recipe}/>)
            } />
        </Router>
      </div>
    );
  }
}


