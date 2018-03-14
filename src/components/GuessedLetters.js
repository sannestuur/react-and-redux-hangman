import React, { Component } from "react";
import { connect } from "react-redux";
import "./GuessedLetters.css";
import { addGuessedLetter } from '../actions/addguessedletter'


export class GuessedLetters extends Component {

  componentWillMount() {
    addGuessedLetter(this.props.guesses.guessedLetters)
  }

  render() {
    return (
      <div className="GuessedLetters">
        <p> { this.props.guesses.guessedSoFar } </p>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(GuessedLetters);
