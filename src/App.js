import React, { Component } from 'react';
import './App.css';
import hangman from './hangman.jpg';
import Form from './components/Form';
import GuessedLetters from './components/GuessedLetters'

class App extends Component {
  render() {
    return [
      <div className="App">
        <header className="App-header">
          <span>
          <h1 className="App">HANGMAN</h1>
          </span>
        </header>
        <img src={hangman} alt="hangman"/>
        <GuessedLetters />
        <h2>Take a guess:</h2>
        <Form />
      </div>
    ];
  }
}

export default App;

// Remove constants folder
//change actions file
//change store

//simplify form: only on submit
//change action file
//change reducer
