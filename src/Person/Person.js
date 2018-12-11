import React from 'react';
import classes from './Person.css';

const person = (props) => {
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong.');
        
    // }
    return (
        <div className={classes.Person} onClick={props.click}>
            <p>I'm {props.name} and have {props.age} years!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;