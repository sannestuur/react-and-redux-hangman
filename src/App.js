import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Image from './components/Image';
import WrongGuesses from './components/WrongGuesses';

import GuessedLetters from './components/GuessedLetters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
          <h1 className="App">HANGMAN</h1>
          </span>
        </header>
        <p> Guess a letter. You can have six wrong guesses.</p>
        <WrongGuesses />
        <Image />
        <GuessedLetters />
        <h2>Take a guess:</h2>
        <Form />
      </div>
    );
  }
}

export default App;
