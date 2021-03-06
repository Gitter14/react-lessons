import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClassFunctionToConfigure';
import Aux from '../../../hoc/Auxilery';
import PropTypes from 'prop-types';

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
        return <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and have {this.props.age} years!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        // return [ 
        //     <p key="1">I'm {this.props.name} and have {this.props.age} years!</p>,
        //      <p key="2">{this.props.children}</p>,
        //      <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ];
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);