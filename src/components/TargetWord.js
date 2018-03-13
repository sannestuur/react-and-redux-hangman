import React, { Component } from "react";
import { connect } from "react-redux";

export class TargetWord extends Component {
  render() {
    return (
      <div className="TargetWord">
        <p> state.target_word </p>
      </div>
    );
  }
}

//insert in div:
// <p>{this.props.GuessedLetters} </p>


const mapStateToProps = state => {
  return { target_word: state.target_word };
};
//
// const Array_of_guesses = guessed_letters;
//
// const Guessedletters = connect(mapStateToProps)(Array_of_guesses);
//
export default connect(mapStateToProps)(TargetWord);
