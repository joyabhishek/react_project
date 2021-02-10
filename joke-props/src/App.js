import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"
function App () {

  let jokeJSX = jokesData.map(function(joke) {
    return (
      <Joke question ={joke.question} answer={joke.answer} />
    )
  })


  return (
    <div>
      <h1>DIrectly passing values</h1>
      <Joke 
      question = "Why do most married men die before their wives?"
      answer = "Because they want to."/>
      <Joke 
      question = "What do diapers and Politicians have in common?"
      answer = "They both need changing regularly - for exactly the same reason."/>
      <Joke 
      question = "What is the definition of the early evening news?"
      answer = " It starts with the words Good evening then spends the next half an hour tellling you why it isn't one."/>
      <Joke 
      answer = "I went to the zoo the other day. There was only a dog in it – it was a shihtzu."/>


    <h1>By using higher order function</h1>
    {jokeJSX}

    </div>
    )
}

export default App;
