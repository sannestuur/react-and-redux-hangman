import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  guessedLetters: [],
  numberOfGuesses: 0,
  targetWord: "kittens"
};

export default function (state = initialState, action) {
switch (action.type){
  case ADD_GUESSED_LETTER:
    // return {...state,
    //     guessedLetters: state.guessedLetters.concat(action.payload)
    //   }
    let guesses = Object.assign({}, state);
     guesses.guessedLetters = state.guessedLetters.concat(action.payload);
     guesses.numberOfGuesses = state.numberOfGuesses++;
     return guesses;
  //   const guessed_letter = guesses.find(
  //   i => i === action.payload.guessed_letter
  //   );
  //   if (guessed_letter === undefined) {
  //   guesses = guesses.concat({
  //     action.payload.guessed_letter
  //   });
  //   } else {
  //   return guesses;}
  //   return guesses;
  //   // return {...state, guessed_letters: [...state.guessed_letters, action.payload]};
  default:
      return state;
  }
};
