import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Max', age: 27},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 26}
    ]
  }

  switchNameHandler=(newName)=>{
    // console.log('Hello: switchNameHandler!');
    // Don't DO THIS: this.state.persons[0].name = 'Maximilian' !!!;
    this.setState({
      persons : [
        {name: newName, age: 127},
        {name: 'ManuScript', age: 129},
        {name: 'StepANY', age: 126}
      ]
    })
  }

  nameChangedHandler=(event)=>{
    this.setState({
      persons : [
        {name: 'Maximilian', age: 27},
        {name: event.target.value, age: 29},
        {name: 'StepANY', age: 26}
      ]
    })
  }

  render() {

    const styles = {
      bacgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>This is really working!!!</p>
        <button style={styles} onClick={() => this.switchNameHandler('Maksio!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
            Moje hobby: jeżdżenie rowerem.
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Maxxx!!!')}
          changed={this.nameChangedHandler.bind(this,)}>
          {this.state.persons[1].name}
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
  }
}

export default App;
