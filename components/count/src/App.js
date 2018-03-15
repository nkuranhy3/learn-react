import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";
import Users from "./Users";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Users />
      </div>
    );
  }
}

export default App;
