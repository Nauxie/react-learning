import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function MyInfo() {
  return (
  <div>
  <h1> Abhinav </h1>
  <p> I am a high school student. I like to study physics, chemistry, programming, and geography. I am involved in Science Olympiad, Spanish Club, and several local coding competitions.</p>
  <h4> I would like to visit: </h4>
  <ul>
    <li> Tuscany, Italy </li>
    <li> Colonge, Germany </li>
    <li> Fort Lauderdale, Florida </li>
  </ul>  
  </div>
  )
}

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
