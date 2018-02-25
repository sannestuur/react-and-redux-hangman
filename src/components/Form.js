import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { addGuessedLetter } from "../actions/index";


const mapDispatchToProps = dispatch => {
  return {
    addGuessedLetter: guessed_letter => dispatch(addGuessedLetter(guessed_letter))
  };
};


//change 'title' and 'article' to my guesses etc.

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      guesses: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { guess } = this.state;
    ///const id = uuidv1(); CHANGE TO DIFFERENT ID!
    this.props.addGuessedLetter();
    this.setState({ guess: [] });
  }
  render() {
    const { guess } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="guess"
            value={guess}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Submit Guess
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
