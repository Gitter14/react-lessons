import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilery';
import withClass from '../hoc/withClassFunctionToConfigure';

class App extends PureComponent {

constructor (props) {
  super(props);
  console.log('[App.js] Inside constructor',props)
  this.state = {
    persons : [
      {id: 'feay12', name: 'Max', age: "27"},
      {id: 'feay1', name: 'Manu', age: 29},
      {id: 'feay34', name: 'Stephany', age: 26}
    ],
    showPersons: false,
    toggleClicked: 0   
  }
}

componentWillMount () {
  console.log('[App.js] Inside componentWillMount()');
}

componentDidMount () {
  console.log('[App.js] inside componentDidMount()');
}

// shouldComponentUpdate (nextProps, nextState) {
//   console.log('[UPDATE App.js] Inside shouldComponentUpdate() ',nextProps,nextState);
//   return nextState.persons !== this.state.persons ||
//   nextState.showPersons !== this.state.showPersons;
// }

componentWillUpdate (nextProps, nextState) {
  console.log('[UPDATE App.js] Inside componentWillUpdate()',nextProps,nextState);
}

componentDidUpdate(){
  console.log('[UPDATE App.js] Inside componentDidUpdate()');
}

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //alternative:
    //const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked+1
      }
    });
  }

  render() {

    console.log('[App.js] Inside render()');
    let person = null;

    if (this.state.showPersons) {  
      person = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonsHandler} 
            changed={this.nameChangedHandler}
          />;
    }

    return (
        <Aux>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {person}
        </Aux>
    );
  }
}

export default withClass(App,classes.App);
