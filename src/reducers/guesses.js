import { ADD_GUESSED_LETTER } from "../actions/addguessedletter";

const initialState = {
  guessed_letters: [],
  number_of_guesses: 0,
  target_word: "kittens"
};

export default function (state = initialState, action) {
switch (action.type){
  case ADD_GUESSED_LETTER:
     state.guessed_letters = state.guessed_letters.concat(action.payload);
     state.number_of_guesses++;
    return state;
    // const guesses = Object.assign({}, state);
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
