import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = {
            swData : null
        }
    }

    componentDidMount(){
        let swaAPI = "https://swapi.dev/api/people/1";

        fetch(swaAPI)
        .then((response) => response.json())
        .then((data) => this.setState({swData : data}))
        .catch(err => console.log(err))

    }

    arrayToList(arr){
        let list = arr.map((e) => {
            return <li>{e}</li>
        })
        return <ul>{list}</ul>
    }

    render(){
        if (!this.state.swData ){
            return <h1>Fetching ....</h1>
        }else{
            let output = Object.keys(this.state.swData).map((key, i) => {
                return(
                    <p id={i}>
                    <b>{key}: </b>
                    {Array.isArray(this.state.swData[key])? <p>{this.arrayToList(this.state.swData[key])}</p> : <span>{this.state.swData[key]}</span>}                    
                  </p>
                )

        })
        //TODO print proprly if a value is list in the json
            return (<div>
                {output}
            </div>)
        }
    }

}

export default App
