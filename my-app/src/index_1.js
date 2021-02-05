import React  from "react";
import ReactDOM from 'react-dom';
import 'bootstrap\\dist\\css\\bootstrap.css';
import Counter from './components/counter'

let element = <div>
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
</div>
//ReactDOM.render(element, document.getElementById("root"))


function hiFunctionalComponent(){
return (<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>)
}
//If you give the functional component name starting with small letter it doesn't work
//Below doesn't work
ReactDOM.render(<hiFunctionalComponent />, document.getElementById("root"))


function HiFunctionalComponent(){
    return (<ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>)
    }
//This works
ReactDOM.render(<HiFunctionalComponent />, document.getElementById("root"))

//Below doesn't work
ReactDOM.render(<functionalComponent />, document.getElementById("root2"))