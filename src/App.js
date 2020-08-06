import React, { Component } from 'react';
// import Rect from './components/Rect'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      msg: "count start!",
      flg: true
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    this.setState((state)=>({
      counter: state.counter + 1,
      msg: 'count: ' + state.counter,
      flg: !state.flg
    }));
  }

  render(){
    return(
      <div>
        <h1>React</h1>
    　　 { this.state.flg ? <p>count: {this.state.msg}</p> : <p>{this.state.msg}です。</p>}
        <button onClick={this.doAction}>Click</button>
      </div>
    );
  }
}

export default App;
