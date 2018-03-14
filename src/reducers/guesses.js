import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  targetWord: "kittens",
  guessedSoFar: [],
  numberOfGuesses: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GUESSED_LETTER:
      let guesses = Object.assign({}, state);
      guesses.numberOfGuesses = state.numberOfGuesses++;

      let answer = guesses.targetWord.split("");
      for (let i = 0; i < answer.length; i++) {
        let index_in_targetWord = action.payload.indexOf(answer[i]);
        if (index_in_targetWord === -1) {
          guesses.guessedSoFar.splice(i, 0, "_ ");
        } else guesses.guessedSoFar.splice(i, 0, answer[i]);
      }

      return guesses;

    default:
      return state;
  }
}
