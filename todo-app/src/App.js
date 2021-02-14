import React, { Component } from "react"
import TodoItem from "./TodoItem"
import "./style.css"
import todosData from "./todosData"

class App extends Component
{
    constructor(){
        super()
        this.state = {todosData}
    }

    render (){
        console.log(this.state)
        let todosHTML = this.state.todosData.map(function (todo) {
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

}

export default App