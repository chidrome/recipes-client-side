import React, { Component } from 'react'
import Navbar from './Navbar';

class MoreDetails extends Component {
  render() {
    return (
      <div className = 'moreDetails'>
      <Navbar />
      <h1>Details on the recipe you wanted</h1>
      <div className = 'moreDetailsPicAndTitle'>
        <img className = 'moreDetailsPic' src={`https://upload.wikimedia.org/wikipedia/commons/6/6c/Plateful_of_Momo_in_Nepal.jpg`} alt={`momo`}/>
        <h3>Title: This is your title</h3>
      </div>

      <div className = 'yeildDiv'>
        <h3>Yeild:</h3>
        <p className = 'yeildPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
      </div>

      <div className = 'ingredientsDiv'>
        <h3>Ingredients</h3>
        <p className = 'ingredientsPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
      </div>
       
        
      <div className = 'prepDiv'>
        <h3>Preparation instructions</h3>
        <p className = 'prepPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
      </div>   
    </div>
    )
  }
}

export default MoreDetails