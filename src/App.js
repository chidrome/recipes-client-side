import React, { Component } from 'react';
import '../src/scss/core.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MoreDetails from './components/MoreDetails';
import SeeAllResults from './components/SeeAllResults';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constant/server';
import Login from './auth/login';
import Profile from './components/Profile';
import Signup from './auth/signup';
import Navbar from './components/Navbar';
import FooterTitle from './components/FooterTitle';
import HeaderTitle from './components/HeaderTitle';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: [],
      recipeClicked: {},
      user: null
    };
  }

  componentDidMount = async () => {
    await this.getUser();
  }


  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');
    // IF THERE IS, TRY TO GET USER INFO
    if(token){
      console.log('Found token in LS', token);
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('Success!');
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('Error looking up user by token', err, err.response);
        this.setState({ user: null });
      });
    }
    else {
      console.log('No token in LS');
      this.setState({ user: null });
    }
  }


  handleFormRecipe = (results) => {
    this.setState({ 
      recipe: results
     })
  }

  handleClickMoreDetails = (results) => {
    this.setState({ 
      recipeClicked: results
     })
  }
  
  render() {
    return (
      <div className="App">
      <HeaderTitle />
        <Router>
          <Navbar user={this.state.user} updateUser={this.getUser} />
          <Route exact path="/" component={
            () => (<Home handleClickMoreDetails = {this.handleClickMoreDetails} handleFormRecipe = {this.handleFormRecipe} recipe = {this.state.recipe} />)
          } />
          <Route path="/aboutus" component={
            () => (<AboutUs />)
          } />
          <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser}  />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} updateUser={this.getuser} />)
            } />
          <Route path="/moreDetails" component={
            () => (<MoreDetails recipe = {this.state.recipeClicked} />)
          } />
          <Route path="/allResults" component={
              () => (<SeeAllResults handleClickMoreDetails = {this.handleClickMoreDetails}  recipes = {this.state.recipe}/>)
            } />
          <FooterTitle/>
        </Router>
      </div>
    );
  }
}


