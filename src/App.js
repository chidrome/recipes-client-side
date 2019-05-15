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
      recipe: [],
      recipeClicked: {}
    };
  }

  handleFormRecipe = (results) => {
    this.setState({ 
      recipe: results
     })
  }

  handleClickMoreDetails = (results) => {
    this.setState({ 
      recipeClicked: results
     })
  }

  
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={
            () => (<Home handleClickMoreDetails = {this.handleClickMoreDetails} handleFormRecipe = {this.handleFormRecipe} recipe = {this.state.recipe} />)
          } />
          <Route path="/aboutus" component={
            () => (<AboutUs />)
          } />
          <Route path="/moreDetails" component={
            () => (<MoreDetails recipe = {this.state.recipeClicked}/>)
          } />
          <Route path="/allResults" component={
              () => (<SeeAllResults handleClickMoreDetails = {this.handleClickMoreDetails}  recipes = {this.state.recipe}/>)
            } />
        </Router>
      </div>
    );
  }
}


