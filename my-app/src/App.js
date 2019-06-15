import React, { Component } from 'react';
import todos from "./todosData.js"
import TodoItem from "./components/TodoItem"
import './App.css';



class App extends Component {
  render() {
    //console.log(products)
    const todosList = todos.map(todo => {
      return (<TodoItem list = {todo} key= {todo.id}/>)
    })
      
    
    return (
      <div className="todo-list">
        {todosList}
      </div>
    );
  }
}

export default App
