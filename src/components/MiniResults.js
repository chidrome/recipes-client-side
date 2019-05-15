import React, { Component } from 'react'
import ResultCards from './ResultCards';

export default class MiniResults extends Component {
  render() {
   const FiveResults = this.props.recipe.slice(0,5).map((item, i) => {
    return <ResultCards recipe={item} key = {i}/>
   })
    return (
      <div class='miniResult'>
        {FiveResults}
        {FiveResults.length>0 ?(
         <a href="/allResults">
        <button>See all results</button>
        </a>
        ) :''}
      </div>
      
    )
  }
}
