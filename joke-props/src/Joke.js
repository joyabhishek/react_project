import React from "react"
let i= 0
function Joke (prop) {    
    return (
        <div>
            <h2>Joke: {++i}</h2>
            {prop.question && <h3>Question: {prop.question}</h3>}
            <h3 style={{color: !prop.question && 'gray'}}>{prop.question && <span>Answer:</span>} {prop.answer}</h3>
            <hr></hr>
        </div>
    )
}

export default Joke;