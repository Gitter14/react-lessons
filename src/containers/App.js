import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      {id: 'feay12', name: 'Max', age: 27},
      {id: 'feay1', name: 'Manu', age: 29},
      {id: 'feay34', name: 'Stephany', age: 26}
    ],
    showPersons: false
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
    this.setState({showPersons: !doesShow});
  }

  render() {

    let person = null;

    if (this.state.showPersons) {  
      person = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonsHandler} 
            changed={this.nameChangedHandler}
          />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {person}
        </div>
    );
  }
}

export default App;
