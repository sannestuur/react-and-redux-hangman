import React, { Component } from 'react';
import './App.css';
import hangman from './hangman.jpg';
import Form from './components/Form';
import GuessedLetters from './components/GuessedLetters.js'

class App extends Component {
  render() {
    return [
      <div className="App">
        <header className="App-header">
          <h1 className="App">Hangman!</h1>
        </header>
        <img src={hangman} alt="hangman"/>
      </div>
      <div className="GuessedLetters">
        <GuessedLetters />
        <h2>Take a guess:</h2>
        <Form />
      </div>
    ];
  }
}

export default App;
