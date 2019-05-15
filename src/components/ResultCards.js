import React, { Component } from 'react'
import { Link} from 'react-router-dom';
// import MoreDetails from './MoreDetails';



export default class ResultCards extends Component {

  resultClickHandler = (e) => {
    e.preventDefault();
    console.log('recipe', this.props.recipe);
    this.props.handleClickMoreDetails(this.props.recipe); 
  }

  
  render() {
    return (
      <div>
        <img src={this.props.recipe.image} alt=""/>
        <h1>{this.props.recipe.label}</h1>
        <button onClick = {this.resultClickHandler} className = 'menuItem'><Link to="/moreDetails">More Details</Link></button>
        {/* Insert code for the more details link. For some reason I can't think of the logic for it this early in the morning. */}
        {/* <a href="/moreDetails"><MoreDetails recipeInfo={this.props.recipe} /></a> */}
      </div>
    )
  }
}
