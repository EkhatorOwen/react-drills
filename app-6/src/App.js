import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Todo  from './Todo.js';

class App extends Component {
constructor(){
  super();
  this.state = {
    stuff: [],
    item: ''
  }
  this.addStuff = this.addStuff.bind(this);
  this.updateChange = this.updateChange.bind(this);
}

addStuff(){
      let curr = this.state.stuff.slice();
      curr.push(this.state.item);
      this.setState({stuff: curr});
      
}

updateChange(e){
this.setState({item: e.target.value})
}

  render() {
    const items = this.state.stuff.map((element,index)=>{
      return(<p key={index}>{element}</p>)
    })
    return (
      <div className="App">
        <div className="App-header">           
          <h2>My to-do list</h2>
          <input onChange={this.updateChange} /> <button onClick={this.addStuff}>Add</button>
          <Todo
          element = {items}

          />
        </div>
      </div>
    );
  }
}

export default App;
