import React from 'react';

class Test extends Component {
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

    render(){
        if (this.state.swData ){
            return <h1>Fetching ....</h1>
        }else{
            let output = this.swData.map((data) => {
                return <p>data</p>
            })
            return (<div>
                output
            </div>)
        }
    }

}