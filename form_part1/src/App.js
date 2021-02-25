import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {
      firstName: "First Name",
      lastName: "Last Name"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState(
      {[name]: value}
      ) 
  }

  handleSubmit(event){
    
    console.log("The typed test is: "+this.state.firstName);
    alert("The typed test is: "+this.state.firstName);
    event.preventDefault();
  }

  render(){

    console.log(this.state.firstName)

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>

    )

  }

}

export default App;
