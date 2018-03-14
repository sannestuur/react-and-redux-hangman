import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  targetWord: "kittens",
  guessedLetters: [],
  guessedSoFar: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GUESSED_LETTER:
      let thisguess = Object.assign({}, state);
      thisguess.guessedLetters = state.guessedLetters.concat(action.payload);
      return thisguess;
    default:
      return state;
  }
}
