import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  targetWord: "kittens",
  guessedLetters: [],
  wrongGuesses: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GUESSED_LETTER:
      let thisguess = Object.assign({}, state);
      thisguess.guessedLetters = state.guessedLetters.concat(action.payload);

      let answer = thisguess.targetWord.split("");
      if (!answer.includes(action.payload)){thisguess.wrongGuesses.push(action.payload)};
      return thisguess;
    default:
      return state;
  }
}
