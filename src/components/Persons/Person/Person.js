import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person} onClick={props.click}>
            <p>I'm {props.name} and have {props.age} years!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;