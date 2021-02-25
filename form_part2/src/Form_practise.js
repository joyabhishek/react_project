import React, { Component } from 'react';

class Form_practise extends Component{
    constructor(){
        super()
        this.state={
            firstName : "first name"
        } 
    }

    handleChange(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <form>

                <label>
                    First name:
                    <input type="text" onChange={this.handleChange}></input>
                </label>

            </form>
        )
    }

}

export default Form_practise