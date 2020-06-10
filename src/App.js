import React, { Component } from 'react';

// when setState methord takes object as argument
/*

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Rahul",
            roll:this.props.roll
        }
    }
    clicked = () => {
        this.setState({name:"Jai"})
    }
    render(){
        return( <div>
                    <h1>Hello GeekyShows</h1>
                    <h1>Hello,{this.state.name} Your Roll No. is {this.state.roll}</h1>
                    <button onClick={this.clicked}>Click Me</button>
                 </div>
                );
    }
}

export default Student;

*/

// when setState methord takes function as argument


class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Rahul",
            roll:this.props.roll
        }
    }
    clicked = () => {
        this.setState(function(state,props){
            console.log(state.name);
        });
    }
    render(){
        return( <div>
                    <h1>Hello GeekyShows</h1>
                    <h1>Hello,{this.state.name} Your Roll No. is {this.state.roll}</h1>
                    <button onClick={this.clicked}>Click Me</button>
                 </div>
                );
    }
}

export default Student;