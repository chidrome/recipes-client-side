import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-wrapper">
            <a href="/"><FontAwesomeIcon className = 'homeIcon' icon={faHome} /></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className = 'menuItem'><a href="/">Home</a></li>
              <li className = 'menuItem'><a href="/aboutus">About Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

