import React, { Component } from 'react';
// import Rect from './components/Rect'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      msg: "Hello Component"
    };
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <p>{this.state.msg}</p>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default App;
