import React, { Component } from 'react';


export default class Profile extends Component {
  render() {
    if(this.props.user){
      return (     
          <div>
            <h2>Hello again, {this.props.user.name}!</h2>
            <h4>Your email is {this.props.user.email}</h4>
            <p>BIO: A little snippet about yourself</p>
          </div>
        );
    }
  }
}


