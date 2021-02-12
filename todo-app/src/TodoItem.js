import React from "react"

function TodoItem(props) {

    //let checkedAttr = props.completed && "checked";

    return(
        <div>
            <input type="checkbox" checked={props.completed}></input>
            <label className="todo_item"> {props.todoText}</label><br></br>
        </div>
    );
}

export default TodoItem;