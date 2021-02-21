import React, { Component } from "react"
import TodoItem from "./TodoItem"
import "./style.css"
import todosData from "./todosData"

class App extends Component
{
    constructor(){
        super()
        this.state = {todosData:todosData}
        this.handleChange = this.handleChange.bind(this)
        this.hoverHandle = this.hoverHandle.bind(this)
        this.TestingHandle = this.TestingHandle.bind(this)
    }

    hoverHandle(){
        console.log("hovered")
    }

    TestingHandle(id){ 
        console.log("Changed",id)
    }

    handleChange(id){
        
        this.setState(function (prevState) {
            let newToDoList = prevState.todosData.map(function (td) {
                if (td.id == id){
                    td.completed = !td.completed
                }
                return(td)
            })
            return({todosData:newToDoList})
        }) 
        //console.log("Changed",id)
    }

    render (){

        let todosHTML = this.state.todosData.map((todo) => {
            return (
                <TodoItem 
                key = {todo.id}    
                todo = {todo}
                onChangeFunc = {this.handleChange}
                onHoverEvent = {this.hoverHandle}
                onClickEvent = {this.TestingHandle}
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