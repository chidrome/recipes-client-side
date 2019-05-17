import React, { Component } from 'react'
import Select from 'react-select';
import SERVER_URL from '../constant/server';
import superagent from 'superagent';

const options = [{value:'alcohol-free', label:'Alcohol-Free'}, {value:'celery-free', label:'Celery-Free'}, {value:'dairy-free', label:'Dairy'}, {value:'egg-free', label:'Eggs'}, {value:'fish-free', label:'Fish'}, {value:'gluten-free', label:'Gluten'}, {value:'kidney-friendly', label:'Kidney Friendly'}, {value:'kosher', label:'Kosher'}, {value:'low-potassium', label:'Low Potassium'}, {value:'lupine-free', label:'Lupine-Free'}, {value:'mustard-free', label:'Mustard-Free'}, {value:'No-oil-added', label:'No oil added'}, {value:'low-sugar', label:'No-Sugar'}, {value:'paleo', label:'Paleo'}, {value:'peanut-free', label:'Peanuts'}, {value:'pescatarian', label:'Pescatarian'}, {value:'pork-free', label:'Pork-Free'}, {value:'red-meat-free', label:'Red meat-Free'}, {value:'sesame-free', label:'Sesame-Free'}, {value:'shellfish-free', label:'Shellfish'}, {value:'soy-free', label:'Soy'}, {value:'sugar-conscious', label:'Sugar-Conscious'}, {value:'tree-nut-free', label:'Tree Nuts'}, {value:'vegan', label:'Vegan'}, {value:'vegetarian', label:'Vegetarian'}, {value:'keto-friendly', label:'Keto'}, {value:'wheat-free', label:'Wheat-Free'}]
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
    superagent.get(`${SERVER_URL}/search`)
    .query({ health: this.state.label, q: this.state.query })
    .then((results) => {
      console.log(results.body)
      this.props.handleFormRecipe(results.body);
    })
    .catch(error=>{ console.log(`Your shit done messed up!`, error)})
  }


  render() {
    const { selectedOption } = this.state.label
    return (
      <div className = 'searcher'>
        <form className = 'inputForm' onSubmit={this.handleSubmit}>
          <div className = 'dropDown'>
            <Select className = 'selectOptions' options={options} value={selectedOption} placeholder='Health Label' onChange={this.handleSelectChange} />
          </div>
          <div className = 'inputAndButton'>
            <input className = 'searchBox' type = 'text' placeholder ='Search By Ingredient' onChange={this.handleInputChange} ></input>
            <button className = 'submitButton'>Submit</button>
          </div>
        </form>      
      </div>
    )
  }
}



