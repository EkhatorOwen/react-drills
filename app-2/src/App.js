import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      food: ['spaghetti','ice cream','sushi','bologna','cheese']
    }
  }


  render() {
    let arr = this.state.food.map((element)=> {return <h1>{element}</h1> } )
    return (
      <div className="text">
      {arr}  
      </div>
    );
  }
}

export default App;
