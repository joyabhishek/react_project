import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
        imageUrl: "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 50, // Converted by react to 50px
        fontWeight: "bold"
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>No Tags</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
    }

    constructor(){
        super();
        this.func = this.func.bind(this);
        //console.log("Constructor", this);
    }

    func(){
        //this.state.count++;
        this.setState({count: this.state.count +1})// To tell react we have updated the state
    };

    render() {  
        // this.func();
        //console.log("render Cons", this);
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""></img>
            <h1>Hello world</h1>
            <span style={this.styles}>{this.state.count}</span>
            <span style={{ fontSize: 50}}>{this.state.count}</span>
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <span>{2 + 2}</span>
            <button onClick={this.func} className="btn btn-seconday ">Increment</button>
            <ul>
                { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
            </ul>
            <div>{this.renderTags()}</div>            
        </React.Fragment>
        
        );
    }

    formatCount() {
        const {count} = this.state
        return count === 0? 'ZERO' : count;
    }

}
 
export default Counter;