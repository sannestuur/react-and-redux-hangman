import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  guessedLetters: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GUESSED_LETTER:
      let guesses = Object.assign({}, state);
      guesses.guessedLetters = state.guessedLetters.concat(action.payload);
      return guesses;

    default:
      return state;
  }
}
