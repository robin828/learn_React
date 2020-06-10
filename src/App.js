import React, { Component } from 'react';

// One way of passing Arguments
/*
class Student extends Component{
        state = {
            id: {
                Standard:"Second",
                Freind:"Virat",
                Home:"Rohini"
            },
            name:"Rahul",
        };
    clicked = (id, e) => {
        console.log(id.Home);
        console.log(id.Standard);
        console.log(id.Freind);
        console.log(e);
    };

    clickedArg = e => { 
        this.clicked(this.state.id, e);
    }
    render(){
        return( <div>
                    <h1>Hello, {this.state.name}</h1>
                    <button onClick={this.clickedArg}>Delete</button>
                 </div>
                );
    }
}

export default Student;
 */

 //Second Way to pass Arguments

 /*

class Student extends Component{
    state = {
        id: {
            Standard:"Second",
            Freind:"Virat",
            Home:"Rohini"
        },
        name:"Rahul",
    };
clicked = (id, e) => {
    console.log(id.Home);
    console.log(id.Standard);
    console.log(id.Freind);
    console.log(e);
};

render(){
    return( <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={e => { 
                    this.clicked(this.state.id, e);
                }}>Delete</button>
             </div>
            );
}
}

export default Student;

*/


class Student extends Component{
    state = {
        id: {
            Standard:"Second",
            Freind:"Virat",
            Home:"Rohini"
        },
        name:"Rahul",
    };
clicked = (id, e) => {
    console.log(id.Home);
    console.log(id.Standard);
    console.log(id.Freind);
    console.log(e);
};

render(){
    return( <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.clicked.bind(this, this.state.id)}>Delete</button>
             </div>
            );
}
}

export default Student;
