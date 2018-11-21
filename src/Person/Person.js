import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const styles = {
        '@media min-width: 500px': {
            width: '450px'
        }
    }

    return (
        <div className="Person" onClick={props.click} style={styles}>
            <p>I'm {props.name} and have {props.age} years!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);