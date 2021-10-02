import * as actionTypes from "./action-types";

const initialState = {
  count: 0,
  randomNumber: null,
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_RANDOM_NUMBER: {
      return {
        ...state,
        randomNumber: action.payload,
      };
    }
    case actionTypes.SET_INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.SET_DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.SET_RESET_COUNTER:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}
