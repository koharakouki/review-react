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
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input = event.target.value;
  }

  doSubmit(event){
    this.setState({
      message: 'Hello,' + this.input + "!!"
    });
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.doSubmit}>
          <label>
            <span></span>Message:
            <input type="text" onChange={this.doChange} required pattern="[A-Za-z _,.]+" />
          </label>
          <input type="submit" value="Click" />
        </form>
      </div>
    );
  }
}

export default App;
