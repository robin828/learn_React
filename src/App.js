import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
class Apps extends Component{
    render(){
        return <Fragment>

                    <h1>hi hello abey chal</h1>
                    <h1>how are you</h1>
                    <h1>Tell about yourself</h1>
                </Fragment>
    }
}

const Student = (props) => {
    return <>
                <h1>hi hello {props.name}</h1>
                <h1>hi {props.clas}</h1>
                <h1>hi {props.lang}</h1>
            </>
}

const Teacher = (props) => {
    return <>
                <Apps/>
                <Student name="Robin" clas="twelth" lang="english"/>
                <h1>hi Teacher {props.name}</h1>
                <h1>hi {props.clas}</h1>
                <h1>hi {props.lang}</h1>
            </>
}
Teacher.propTypes = {
    name: PropTypes.string,
    lang: PropTypes.string,
    clas: PropTypes.string
};

 
export default Teacher;
