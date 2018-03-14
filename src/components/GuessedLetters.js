import React, { Component } from "react";
import { connect } from "react-redux";
import "./GuessedLetters.css";

export class GuessedLetters extends Component {


    render() {

    let thisguess = this.props.guesses;
    let answer = thisguess.targetWord.split("");

    for (let i = 0; i < answer.length; i++) {
      if (thisguess.guessedLetters.includes(answer[i])){
        thisguess.guessedSoFar.splice(i, 1, answer[i] + " ");
      }
      else thisguess.guessedSoFar.splice(i, 1, "_ ");
    }

    return (
      <div className="GuessedLetters">
        <p> { thisguess.guessedSoFar } </p>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(GuessedLetters);
