import React, { Component } from "react";
import { connect } from "react-redux";
import "./GuessedLetters.css";

export class GuessedLetters extends Component {
  render() {
    return (
      <div className="GuessedLetters">
        <p> _ _ _ _ _ </p>
      </div>
    );
  }
}

//insert in div:
// <p>{this.props.GuessedLetters} </p>


// const mapStateToProps = state => {
//   return { guessed_letters: state.guessed_letters };
// };
//
// const Array_of_guesses = guessed_letters;
//
// const Guessedletters = connect(mapStateToProps)(Array_of_guesses);
//
export default connect()(GuessedLetters);
