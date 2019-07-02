import React from "react"
import todosData from "./todosData.js"
import TodoItem from "./components/TodoItem.js"
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      todos: todosData
    }
  }
  handleChange(id) {
    var newtodo = this.state.todos;
    for (var i = 0; i < newtodo.length; i++) {
      if (id === newtodo[i].id) {
        newtodo[i].completed = !newtodo[i].completed;
      }
    }
    this.setState({
      todos: newtodo
    })
  }
  render() {
    const todosObject = this.state.todos.map(todos => {
      return (<TodoItem item={todos} key={todos.id} onClick={this.handleChange} />)
    })
    return (
      <div className="todo-list">
        {todosObject}
      </div>
    )
  }
}
export default App