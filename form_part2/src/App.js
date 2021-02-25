import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      gender: "male",
      favColor: "green",
      progLang: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleProgLang = this.handleProgLang.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}):  this.setState({[name]: value}) 
  }

  handleProgLang(event){
    console.log(event.target.name)
    this.setState((prevState) => {
      if (prevState.progLang.includes(event.target.name)){
        prevState.progLang.pop(event.target.name)
        return {progLang : [...prevState.progLang]}
      }else{
        return {progLang : [...prevState.progLang, event.target.name]}
      } 
      
      //console.log(progLang)
      
    })
  }

  handleSubmit(event){
    
    console.log("The typed test is: "+this.state.firstName);
    alert("The typed test is: "+this.state.firstName);
    event.preventDefault();
  }

  render(){

    console.log(this.state)

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
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />is Friendly?
        </label>

        
        <br /><br />
        <label> Select the programming language you know </label>
          <input
            type="checkbox"
            name="C"
            checked={this.state.progLang.includes("C")}
            onChange={this.handleProgLang}
          />C
          <input
            type="checkbox"
            name="C++"
            checked={this.state.progLang.includes("C++")}
            onChange={this.handleProgLang}
          />C++
          <input
            type="checkbox"
            name="Java"
            checked={this.state.progLang.includes("Java")}
            onChange={this.handleProgLang}
          />Java
        <br /><br />
        
        
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />Female
        </label>
        <br /><br />
        <textarea 
          value = {"Some default value"}
        />
        <br />
        <label>Favourite Color</label>
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </select>
        <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h1>My favourite color is: {this.state.favColor}</h1>
        <h1>My favourite prog lang is: {this.state.progLang}</h1>
      </div>

    )

  }

}

export default App;

