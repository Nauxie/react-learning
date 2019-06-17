import React, { Component } from 'react';
import todosData from "./todosData.js"
import TodoItem from "./components/TodoItem"
import './App.css';



class App extends Component {
constructor() {
  super()
  this.state = {
    todos: todosData
  }
}

  render() {
    const todosItems = this.state.todos.map(todo => {
      return (<TodoItem list = {todo} key= {todo.id}/>)
    })
    return (
      <div className="todo-list">
        {todosItems}
      </div>
    );
  }
}

export default App
