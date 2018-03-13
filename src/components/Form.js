import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { addGuessedLetter } from "../actions/addguessedletter";

//change 'title' and 'article' to my guesses etc.

class ConnectedForm extends Component {

  state = {}

  // constructor() {
  //   super();
  //   this.state = {
  //     guesses: []
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    // const { guess } = this.state;
    ///const id = uuidv1(); CHANGE TO DIFFERENT ID!
    this.props.addGuessedLetter(this.state.guess);
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="guess"
            id="guess"
            value={this.state.guess}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">
          Submit Guess
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addGuessedLetter: guessed_letter => dispatch(addGuessedLetter(guessed_letter))
  };
};

export default connect (null, mapDispatchToProps)(ConnectedForm);
