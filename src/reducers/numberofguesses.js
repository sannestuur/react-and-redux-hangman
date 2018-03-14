import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  numberOfGuesses: 0,
};

export default function (state = initialState, action) {
switch (action.type){
  case ADD_GUESSED_LETTER:

    let guesses = Object.assign({}, state);
     guesses.numberOfGuesses = state.numberOfGuesses++;

     return guesses;

  default:
      return state;
  }
};
