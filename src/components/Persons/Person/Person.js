import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor (props) {
        super(props);
        console.log('[Person.js] Inside constructor',props)
      }
      
      componentWillMount () {
        console.log('[Person.js] Inside componentWillMount()');
      }
      
      componentDidMount () {
        console.log('[Person.js] inside componentDidMount()');
      }

    render () {
        console.log('[Person.js] Inside render()');
        return <div className={classes.Person} onClick={this.props.click}>
            <p>I'm {this.props.name} and have {this.props.age} years!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    }
}

export default Person;