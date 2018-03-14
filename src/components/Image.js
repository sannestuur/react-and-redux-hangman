import React, { Component } from "react";
import { connect } from "react-redux";

const baseUrl = "http://dinder.de/images/hangman/";

export class Image extends Component {

  render() {

    let numberOfWrongGuesses = this.props.guesses.wrongGuesses.length + 0;

    return (
      <div className="Image">
      <img src={baseUrl + numberOfWrongGuesses + ".png"} alt={numberOfWrongGuesses}/>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(Image);
