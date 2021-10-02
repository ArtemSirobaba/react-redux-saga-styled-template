import * as actionTypes from "./action-types";

export const setResetCounter = () => ({
  type: actionTypes.SET_RESET_COUNTER,
});

export const setIncrementCounter = () => ({
  type: actionTypes.SET_INCREMENT_COUNTER,
});

export const setDecrementCounter = () => ({
  type: actionTypes.SET_DECREMENT_COUNTER,
});

export const getRandomNumber = () => ({
  type: actionTypes.GET_RANDOM_NUMBER,
});

export const setRandomNumber = (data) => ({
  type: actionTypes.SET_RANDOM_NUMBER,
  payload: data,
});
