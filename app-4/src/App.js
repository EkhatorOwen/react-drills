import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    username: '',
    password: ''
  }
  this.updateUsername = this.updateUsername.bind(this);
  this.updatePassword = this.updatePassword.bind(this);
  this.login = this.login.bind(this);
}

  updateUsername(e){
    this.setState({username: e.target.value})
  }

  updatePassword(e){
    this.setState({password: e.target.value})
  }

  login(){

    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    

  }
  
  render() {
    
    return (
      <div className="App">
      <input onChange={this.updateUsername}/> 
      <input onChange={this.updatePassword}/>  
      <button onClick={this.login}>Login</button> 
      </div>
    );
  }
}

export default App;
