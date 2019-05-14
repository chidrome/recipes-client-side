import React, { Component } from 'react'
import Dropdown from 'react-dropdown'

const options = ['vegan', 'vegetarian', 'dairy-free', 'low-sugar', 'low-fat-abs', 'sugar-conscious', 'fat free', 'gluten free', 'wheat free']

export default class Form extends Component {
  render() {
    return (
      <div className = 'searcher'>
        <form className = 'inputForm'>
        <div className = 'dropDown'>
        <Dropdown options={options} onChange={this._onSelect} placeholder="Select an option" />
        </div>
        <div className = 'inputAndButton'>
        <input className = 'searchBox' type = 'text' placeholder = 'search'></input>
        <button className = 'submitButton'>Submit</button>
        </div>
      </form>      
      </div>
    )
  }
}





//Dropdown referenced from https://www.npmjs.com/package/react-dropdown