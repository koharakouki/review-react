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
      message: "Hello, " + this.input + "!!"
    });
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <Message title="Children">
          これはコンポーネント内のコンテンツです。
          マルでテキストを分割し、リストにして表示します。
          改行は必要ありません。
        </Message>
      </div>
    );
  }
}

class Message extends Component {
  render() {
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim != '') [
        arr2.push(arr[i]);
      ]
    }
    let list = arr2.map((value, key) => (
      <li key={key}>{value}.</li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default App;
