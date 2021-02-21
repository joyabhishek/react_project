import React from 'react';
import CondRender from "./CondRender"
import LoggedIn from "./loggedIn";

class App extends React.Component{

  constructor(){
    super()
    this.onLogIn = this.onLogIn.bind(this)
    this.state = {
      isLoading: true,
      isLoggedIn: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState(
        {isLoading: false}
      )
    },1500)
  }

 onLogIn(){
   this.setState((prevState) => {
    return({
      isLoggedIn : !prevState.isLoggedIn
    })
   })
 }

  render() {
    return (
      <div>
        <CondRender isLoading= {this.state.isLoading} />
        <LoggedIn isLoggedIn={this.state.isLoggedIn} onLogEvent={this.onLogIn}/>
      </div>

    );
  }

}

export default App
