import React, { Component } from 'react'
import Select from 'react-select';
import SERVER_URL from '../constant/server';
import superagent from 'superagent';

const options = [{value:'vegan', label:'vegan'}, {value:'vegetarian', label:'vegetarian'}, {value:'keto', label:'keto'}]
// , 'dairy-free', 'low-sugar', 'low-fat-abs', 'sugar-conscious', 'fat free', 'gluten free', 'wheat free']

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      label: ''
    }
  }

  handleInputChange = (e) => { this.setState({ query: e.target.value }); }

  handleSelectChange = (selectedOption) => {this.setState({ label: selectedOption.label }); }

  handleSubmit = (e) => {
    e.preventDefault()
    // if(this.state.query !== ''){
    //   superagent.get(`${SERVER_URL}/searchlabelinput/:q/:health`)
    //     .query({ q: this.state.query, health: this.state.label })
    //     .then((results) => {
    //       console.log(results)
    //     })
    //     .catch(error=>{ console.log(`You're shit done messed up!`, error)})
    // }
    superagent.get(`${SERVER_URL}/searchlabel/:health`)
    .query({ health: this.state.label })
    .then((results) => {
      console.log(results.body)
    })
    .catch(error=>{ console.log(`You're shit done messed up!`, error)})
  }


  render() {
    const { selectedOption } = this.state.label
    return (
      <div className = 'searcher'>
        <form className = 'inputForm' onSubmit={this.handleSubmit}>
          <div className = 'dropDown'>
            <Select options={options} value={selectedOption} onChange={this.handleSelectChange} defaultValue="Keto" />
          </div>
          <div className = 'inputAndButton'>
            <input className = 'searchBox' type = 'text' placeholder = 'search' onChange={this.handleInputChange} ></input>
            <button className = 'submitButton'>Submit</button>
          </div>
        </form>      
      </div>
    )
  }
}





//Dropdown referenced from https://www.npmjs.com/package/react-dropdown