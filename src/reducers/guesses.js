import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  targetWord: "kittens",
  guessedLetters: [],
  guessedSoFar: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GUESSED_LETTER:
      let thisguess = Object.assign({}, state);
      thisguess.guessedLetters = state.guessedLetters.concat(action.payload);

      let answer = thisguess.targetWord.split("");

      for (let i = 0; i < answer.length; i++) {
        if (thisguess.guessedLetters.includes(answer[i])){
          thisguess.guessedSoFar.splice(i, 1, answer[i] + " ");
        }
        else thisguess.guessedSoFar.splice(i, 1, "_ ");
      }
      return thisguess;

    default:
      return state;
  }
}
