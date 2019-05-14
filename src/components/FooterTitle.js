import React, { Component } from 'react'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default class FooterTitle extends Component {
  render() {
    return (
      <footer>
        <div className = 'footerDiv'>
        <h1>{'\u00A9'} 301D56 Zip Team</h1>
        <div>
          <FontAwesomeIcon className = 'homeIcon' icon={faHome} />
        </div>
        </div>
        <div className = 'footerLinksDiv'>
          <ul className = 'linkedin'>
            <p>Contributors:</p>
            <a href = 'https://www.linkedin.com/in/paolo-chidrome/'>
            <li>Paolo Chidrome</li>
            </a>
            
            <a href = 'https://www.linkedin.com/in/williams-osunkwo/'>
            <li>Williams Osunkwo</li>
            </a>

            <a href = 'https://www.linkedin.com/in/jenshin83/'>
            <li>Jen Shin</li>
            </a>

            <a href = 'https://www.linkedin.com/in/sudip-adhikari07/'>
            <li>Sudip Adhikari</li>
            </a>
          </ul>
          

          <ul className = 'thankList'>
            <p>Thanks to:</p>
            <li>Code Fellows</li>
            <li>Michelle</li>
            <li>Amazon web services</li>
            <li>Apprenti</li>
          </ul>

          <ul className = 'references'>
            <p>References:</p>
            <li>Edaman API</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>

        </div>
      </footer>
    )
  }
}
