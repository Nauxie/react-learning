import React, { Component } from 'react';
import logo from '../logo.svg';
import navbar from './MyInfo.css';


  class MyInfo extends Component {
      render() {
        return (
            <div>
            <h1> Abhinav </h1>
            <header className = "navbar"> Hi APCS! This is React! </header>
            
            <img src = {logo} alt ="logo" height = "260"/>  
            </div>
            )
      }
  }

  export default MyInfo;