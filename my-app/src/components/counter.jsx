import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
        imageUrl: "https://picsum.photos/200"
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""></img>
            <h1>Hello world</h1>
            <span style={this.styles}>{this.state.count}</span>
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <span>{2 + 2}</span>
            <button className="btn btn-seconday ">Increment</button>
        </React.Fragment>
        
        );
    }

    formatCount() {
        const {count} = this.state
        return count === 0? 'ZERO' : count;
    }

}
 
export default Counter;