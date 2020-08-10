import React, { Component } from 'react';
// import Rect from './components/Rect'
import './App.css';


class App extends Component {
  input = '';

  constructor(props){
    super(props);
    this.state = {
      message: 'type your name.'
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event){
    alert(event.target.value + "は長すぎます。")
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <Message maxlengh="10" onCheck={this.doCheck} />
      </div>
    );
  }
}

class Message extends Component {
  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e){
    if (e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value = 
      e.target.value.substr(0, this.props.maxlength);
    }
  }

  render(){
    return(
      <input type="text" onChange={this.doChange} />
    );
  }
}

export default App;
