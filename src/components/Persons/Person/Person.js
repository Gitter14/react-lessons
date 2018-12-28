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
        // return [ 
        //     <p key="1">I'm {this.props.name} and have {this.props.age} years!</p>,
        //      <p key="2">{this.props.children}</p>,
        //      <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ];
    }
}

export default Person;