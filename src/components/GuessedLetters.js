import React, { Component } from "react";
import { connect } from "react-redux";
import "./GuessedLetters.css";

export class GuessedLetters extends Component {
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
