import React, { Component } from 'react';

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      firstName: "first name",
      lastName: "last name"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({ [e.target.name] : e.target.value})
  }

  render(){
    return(
      <div>
        <form>
          <label>
            First name
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
          </label>
          <label>
            Last name
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
          </label>
        </form>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>

    )

  }
}

export default App
