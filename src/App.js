import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Timer from './demos/Timer'
import Todo from './demos/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react demos 11/3</h2>
        </div>


        <div className="demos">
          <Timer />
          <Todo />
        </div>

      </div>
    );
  }
}

export default App;
