export const ADD_GUESSED_LETTER = "ADD_GUESSED_LETTER";

export const addGuessedLetter = guessed_letter => {
  return dispatch => {
    dispatch({
      type: "ADD_GUESSED_LETTER",
      payload: guessed_letter
    });
  };
};
