import React from "react"
import TodoItem from "./TodoItem"
import "./style.css"
import todosData from "./todosData"

function App()
{
    let todosHTML = todosData.map(function (todo) {
        return (
            <TodoItem 
            key = {todo.id}    
            todoText = {todo.text}
            completed = {todo.completed}
                />
        )

    })
    return(
        <div>
            {todosHTML}
        </div>
    )
}

export default App