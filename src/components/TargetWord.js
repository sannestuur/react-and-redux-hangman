import React, { Component } from "react";
import { connect } from "react-redux";
import "./TargetWord.css";

export class TargetWord extends Component {
  render() {
    return (
      <div className="TargetWord">
        <p> { this.props.guessedSoFar } </p>
      </div>
    );
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(TargetWord);
