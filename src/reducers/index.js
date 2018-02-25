import { ADD_GUESSED_LETTER } from "../constants/action-types";

const initialState = {
  guessed_letters: [],
  number_of_guesses: 0
};

const rootReducer = (state = initialState, action) => {
switch (action.type){
  case ADD_GUESSED_LETTER:
    return {...state, guessed_letters: [...state.guessed_letters, action.payload]};
  default:
      return state;
  }
};


export default rootReducer;
