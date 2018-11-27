import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let person = null;

    if (this.state.showPersons) {
      
      person = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            // the same as below:
            //click={() => this.deletePersonsHandler(index)}
            click={this.deletePersonsHandler.bind(this,index)}
            //changed={this.nameChangedHandler.bind(this,person.id)}
            changed={(event) => this.nameChangedHandler(event,person.id)}
            name={person.name} 
            age={person.age}
            key={person.id}
            />
          })}
        </div>
      );

      styles.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello word!</h1>
          <p className={classes.join(' ')}>This is really working!!!</p>
          <button style={styles} 
          onClick={() => this.togglePersonsHandler()}>
            Show/Hide persons
          </button>
          {person}
        </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
  }
}

export default Radium(App);
