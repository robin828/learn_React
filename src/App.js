import React, { Component } from 'react';

/*


// Class Type Event Handling


// in console we see that this is undefined we solve this in 2 ways below
// this can be used to implement state in our page
class Student extends Component{
    clicked(){
        console.log("Button Clicked", this);
    }
    render(){
        return( <div>
                    <h1>Button Below</h1>
                    <button onClick={this.clicked}>Click Me</button>
                 </div>
                );
    }
}

// First Way to resolve 'this' error is make arrow function. In arrow function , arrow function bind this keyword and 
 // return object

class Student extends Component{
    clicked = () => {
        console.log("Button Clicked", this);
    }
    render(){
        return( <div>
                    <h1>Button Below</h1>
                    <button onClick={this.clicked}>Click Me</button>
                 </div>
                );
    }
}

// Second is way is to bind this keyword manually using Constructor

class Student extends Component{
    constructor(props){
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        console.log("Button Clicked", this);
    }
    render(){
        return( <div>
                    <h1>Button Below</h1>
                    <button onClick={this.clicked}>Click Me</button>
                 </div>
                );
    }
}

*/

// Function Type Event Handling

function Student(props){
    const clicked = () => {
        console.log("Button Clicked");
    }
    return( <div>
                <h1>Button Below</h1>
                <button onClick={clicked}>Click Me</button>
             </div>
            );
    }





export default Student;