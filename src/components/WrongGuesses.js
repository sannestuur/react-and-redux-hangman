import React, { Component } from "react";
import { connect } from "react-redux";


export class WrongGuesses extends Component {


  render() {

    let numberOfWrongGuesses = this.props.guesses.wrongGuesses.length;
    let message

    if (numberOfWrongGuesses < 7){ message = `You currently have: ${numberOfWrongGuesses} letters guessed wrongly.`}
    else {message = `Game over! Refresh the page to try again!`}

    return (
      <div className="WrongGuesses">
      <p> {message} </p>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(WrongGuesses);
