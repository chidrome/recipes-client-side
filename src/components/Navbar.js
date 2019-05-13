import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-wrapper">
            <a href="/"><img src='http://chittagongit.com/images/home-logo-icon/home-logo-icon-0.jpg' className="Home-Logo" alt="logo" /></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

