import { ADD_GUESSED_LETTER } from "../constants/action-types";

export const addGuessedLetter = guessed_letter => ({ type: "ADD_GUESSED_LETTER", payload: guessed_letter });
