import React, { Component } from "react";
import { connect } from "react-redux";
import "./GuessedLetters.css";

export class GuessedLetters extends Component {


    render() {

    let thisguess = this.props.guesses;
    let answer = thisguess.targetWord.split("");
    let guessedSoFar = []

    for (let i = 0; i < answer.length; i++) {
      if (thisguess.guessedLetters.includes(answer[i])){
        guessedSoFar.splice(i, 1, answer[i] + " ");
      }
      else guessedSoFar.splice(i, 1, "_ ");
    }

    return (
      <div className="GuessedLetters">
        <p> { guessedSoFar } </p>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(GuessedLetters);
