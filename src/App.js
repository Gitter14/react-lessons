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
    console.log("Worked!");
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const styles = {
      bacgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPersons) {
      
      person = (
        <div>
          {this.state.persons.map((item,index) => {
            return <Person
            // the same as below:
            //click={() => this.deletePersonsHandler(index)}
            click={this.deletePersonsHandler.bind(this,index)}
            name={item.name} 
            age={item.age}
            key={item.id}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>This is really working!!!</p>
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

export default App;
