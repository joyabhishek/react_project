import React from "react"

function TodoItem(props) {

    //let checkedAttr = props.completed && "checked";
    let styles = {
        textDecoration: props.todo.completed? "line-through" : "blink",
    }
    return(
        <div>
            <input type="checkbox" checked={props.todo.completed} onChange={() => {
                props.onChangeFunc(props.todo.id) 
            }} onMouseOver={props.onHoverEvent} ></input>
            <label style={styles} onClick={props.onClickEvent}>{props.todo.text}</label><br></br>
        </div>
    );
}

export default TodoItem;