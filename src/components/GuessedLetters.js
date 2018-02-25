import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { guessed_letters: state.guessed_letters };
};

const Array_of_guesses = guessed_letters;

const Guessedletters = connect(mapStateToProps)(Array_of_guesses);

export default GuessedLetters;
