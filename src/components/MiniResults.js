import React, { Component } from 'react'
import ResultCards from './ResultCards';
import { Link} from 'react-router-dom';

export default class MiniResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: false
    }
  }

  render() {
    let FiveResults;
    if(this.props.recipe) {
      FiveResults = this.props.recipe.slice(0,5).map((item, i) => {
        this.setState({results: true})
       return <ResultCards handleClickMoreDetails = {this.props.handleClickMoreDetails} recipe={item} key = {i}/>
     })
    }
    return (

        <div className='miniResult'>
          {FiveResults}
          {this.state.results ? (<Link to="/allResults">See All Results</Link>) : ''}
        </div>
      
    )
  }
}
