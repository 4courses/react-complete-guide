import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Mary', age: 13 }
    ],
    otherState: 'Hola!'
  };

  switchNameHandler = (id) => {
    const persons = this.state.persons.map(person => {
      if(person.id === id) return {...person, name: 'Caracas!'};
      return person;
    });
    this.setState({persons});
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {this.state.persons.map(person =>
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            switchNameHandler={this.switchNameHandler} />
        )}
      </div>
    );
  }
}

export default App;
