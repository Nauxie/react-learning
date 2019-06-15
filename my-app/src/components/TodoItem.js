import React, {Component} from "react"


function TodoItem(props) {
    return (
        <div className = "todo-item">
            <input type="checkbox" checked={props.list.completed}/>
            <p>{props.list.text}</p>
        </div>

    )
   
}
export default TodoItem