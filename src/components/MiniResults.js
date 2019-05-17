import React, { Component } from 'react'
import ResultCards from './ResultCards';
import { Link} from 'react-router-dom';

export default class MiniResults extends Component {

  render() {

    if(this.props.recipe) {
      let FiveResults;
      let seeAllLink;
      if(this.props.recipe) {
        FiveResults = this.props.recipe.slice(0,5).map((item, i) => {
        return <ResultCards handleClickMoreDetails = {this.props.handleClickMoreDetails} recipe={item} key = {i}/>
      })
        if(this.props.recipe.length > 0) {
          seeAllLink = this.props.recipe ? (<Link to="/allResults">See All Results</Link>) : ''
        }
      }
      return (

          <div className='miniResult'>
            {FiveResults}
            {seeAllLink}
          </div>
      )
    } else {
      return (
        <div>
          <p className="no-results">Search returns no results.</p>
        </div>
      )
    }
  }
}
