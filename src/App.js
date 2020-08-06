import React, { Component } from 'react';
// import Rect from './components/Rect'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  data = [];

  constructor(props)[
    super(props);
    this.state = {
      list: this.data
    };
    this.doAction = this.doAction.bind(this);
  ]

  doAction(e){
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({ x: x, y: y });
    this.setState({
      list: this.data
    });
  }

  draw(d){
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3",
    };
    return <div style={s}></div>
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <h2>show. rect</h2>
        <div onClick={this.doAction}>{this.data.map((value)=>this.draw(value))}</div>
      </div>
    );
  }
}

export default App;
