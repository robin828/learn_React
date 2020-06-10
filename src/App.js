import React, {useState} from 'react'

export default function App() {
    const nameStateVariable = useState("Rahul");
    const clicked = () => {
        nameStateVariable[1]("Robin");
    }
    
    return <React.Fragment>
            <h1>{nameStateVariable[0]}</h1>
            <button type="button" onClick={clicked}>Change</button>
    </React.Fragment>
        
    
}
