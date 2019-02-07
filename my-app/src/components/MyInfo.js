import React, { Component } from 'react';
import logo from '../logo.svg';
import navbar from './MyInfo.css';


  class MyInfo extends Component {
      render() {
        return (
            <div>
            <h1> Abhinav </h1>
            <header className = "navbar"> I am a high school student. I like to study physics, chemistry, programming, and geography. I am involved in Science Olympiad, Spanish Club, and several local coding competitions.</header>
            <h4> I would like to visit: </h4>
            <ul>
              <li> Tuscany, Italy </li>
              <li> Colonge, Germany </li>
              <li> Fort Lauderdale, Florida </li>
              <li> <img src = {logo} alt ="logo"/></li>

            </ul>  
            </div>
            )
      }
  }

  export default MyInfo;