import React, { Component } from 'react';
// import Rect from './components/Rect'
import './App.css';

let data = {title: 'Title', message: 'this is sample message.'};

const SampleContext = React.createContext(data);

class App extends Component {
  newdata = { title: '新しいタイトル', message: "新しいメッセージ" };

  render(){
    return(
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render(){
    return(
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render(){
    return(
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default App;
