import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo.js';


class App extends Component {
  render() {
    return (
      <div>
        <MyInfo/>
      </div>
    );
  }
}

export default App;
