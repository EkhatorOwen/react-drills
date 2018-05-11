import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Image.js'

class App extends Component {

  constructor(){
    super();
  this.state ={
    img: 'http://via.placeholder.com/350x150'
  }

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Img
          img = {this.state.img}
          />
        </p>
      </div>
    );
  }
}

export default App;
