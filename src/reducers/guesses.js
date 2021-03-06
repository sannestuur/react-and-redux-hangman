import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";
import { words } from '../data/words';

const randomWord = words[Math.floor(Math.random() * words.length)];

const initialState = {
  targetWord: randomWord,
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
