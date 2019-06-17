import React from "react"
import todosData from "./todosData.js"
import TodoItem from "./components/TodoItem.js"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }

  }
  render() {
    const todosObject = this.state.todos.map(todos => {
      return(<TodoItem item={todos} key={todos.id}/>)
    })


    return (
      <div className = "todo-list">
        {todosObject}
      </div>

    )
  }
}
export default App