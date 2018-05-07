import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    input: ''
  }
  this.updateChange = this.updateChange.bind(this);
}


updateChange(e){
this.setState({input: e.target.value})
}


  render() {
    return (
      <div className='text-field'>
          <input onChange ={this.updateChange} />
          <span><h1>{this.state.input}</h1> </span>
      </div>
    );
  }
}

export default App;
