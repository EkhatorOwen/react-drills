import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state={
    input: '',
    food: ['bolonga','ice cream', 'sushi', 'cheese', 'spaghetti']
  }
  this.updateChange = this.updateChange.bind(this);
}

updateChange(e){
this.setState({ input: e.target.value })
}

  render() {
    let arr = this.state.food;
    
    let str = arr.map((element,index)=>{
      if(element.includes(this.state.input))
      {
        return <h2 key={index}> {element}</h2>
      }
    })

    return (
      <div className="App">
      <input onChange={this.updateChange} />
      {str}
      </div>
    );
  }
}

export default App;
