import React, {Component} from "react"

class App extends Component {

constructor(){
  super()
  this.state = {
    count: 1
  }

  this.onDoubleClick = this.onDoubleClick.bind(this)

}

onDoubleClick(){
  this.setState((pState) => {
    return(
      {count:pState.count * 2}
    )
  })
}


render(){
  return(
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.onDoubleClick}>Double</button>
      <button>Half</button>
    </div>
  )
}

}

export default App