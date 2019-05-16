import React, { Component } from 'react'
import williams from './usImages/williams.jpg';
import sudip from './usImages/pic08.png'

class AboutUs extends Component {
  render() {
    return (
      <div>
      <div className = 'aboutUsDiv'>
      <section className = 'aboutPaolo'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH2U28Z1N-62a68e9133e7-1024`} alt={`Paolo`}/>
        <h2>Paolo</h2>
            <p className = 'paoloPara'>I started my career working in the military as an intelligence analyst. After the military I started working for Google as a Team lead for a specialized team that would map out not the outside world, but the “inside” world. My team mapped out inside malls, best buys, home depots, airports etc. Then I started working for Microsoft first as a Data Analyst and then worked my way into a Project Manager role. Where it involved quite a bit of data mining, SQL Querying, Report Generating for senior leadership. I led projects that involved process improvements which cut process-oriented work in half. Soon after, I was invited to come join Amazon Instant Video team (known now as Prime Video) and work with the metadata team as a Program Manager. I left Amazon to pursue a once in a lifetime opportunity to caddie for my brother-in-law on the PGA tour. When I decided to come back to corporate, I wanted to come back to where my passion lies and that’s in Software Development</p>
      </section>

       <section className = 'aboutJen'>
        <img className = 'ourImage' src={`https://ca.slack-edge.com/T039KG69K-UH4UY1JBD-b0f5e8bd4702-1024`} alt={`Jen`}/>
          <h2>Jen</h2>
            <p className = 'jenPara'>I am a curious, problem-solver whose diverse background in broadcasting and teaching exposed me to a broad range of different personalities. Living abroad helped me develop interesting perspectives when I am presented with puzzles. I adapt well and have a love of learning; I believe every moment is a teachable one, and am continuously striving to understand more about the world. I studied software development and love how I am constantly challenged to grow. I would love to be part of a team that values quality and writes back-end programs.</p>
       </section>
       
        
        <section className = 'aboutWilliams'>
          <img className = 'ourImage' src= {williams} alt={`Williams`}/>
            <h2>Williams</h2>
            <p className = 'williamsPara'>My name is Williams Osunkwo, but you can also call me Williams lol. I am originally from Nigeria. I came to the US in 2013 and currently live in Seattle WA. After I graduated from Cameron University Oklahoma in 2018, I enlisted in the US Army Reserves and I am currently serving in a reserve center in JBLM. Before joining Amazon I worked as a Technical Solutions Analyst at Cerner Corporation. 
            My favorite quote is “you can catch flies with honey, but you can catch even more honeys being fly” </p>
        </section>
        

        <section className = 'aboutSudip'>
          <img className = 'ourImage' src={sudip} alt={`Sudip`}/>
            <h2>Sudip</h2>
            <p className = 'sudipPara'>My name is Sudip Adhikari and I am originally from Nepal, the land of Mount Everest. I recently transitioned out of Army. I graduated from Morgan State University with a Electrical and Computer Engineering degree in 2013 and joined the millitary after college. I am currently living at Bellevue, WA with my wife. My hobbies include watching and playing soccer, playing FIFA and hiking.</p>
        </section>        
      </div>
      </div>
    )
  }
}

export default AboutUs;