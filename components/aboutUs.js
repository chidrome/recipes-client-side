import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <div className = 'aboutUsDiv'>
      <section className = 'aboutPaolo'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2U28Z1N-62a68e9133e7-1024`} alt={`Paolo`}/>
            <p className = 'paoloPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
      </section>

       <section className = 'aboutJen'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH4UY1JBD-b0f5e8bd4702-1024`} alt={`Jen`}/>
            <p className = 'jenPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
       </section>
       
        
        <section className = 'aboutWilliams'>
          <img className = 'ourImage' src={`./usImages/williams.jpg`} alt={`Williams`}/>
            <p className = 'williamsPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
        </section>
        

        <section className = 'aboutSudip'>
          <img className = 'ourImage' src={`./usImages/pic08.png`} alt={`Sudip`}/>
            <p className = 'sudipPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nulla vitae lectus consectetur venenatis. Ut ut placerat magna. Phasellus aliquam tristique lectus in blandit. Sed leo lacus, consequat a consequat vitae, suscipit vitae est. Quisque at tincidunt tellus, a tincidunt urna. In ut nisi tortor. Fusce auctor sem sem. Mauris ac arcu id lectus porttitor interdum at vitae augue. Nunc elementum convallis diam ut auctor. Maecenas sit amet commodo velit, nec mollis urna. Suspendisse potenti. Etiam velit lacus, venenatis ut dui vel, porta scelerisque orci.</p>
        </section>
        
      </div>
    )
  }
}

export default AboutUs