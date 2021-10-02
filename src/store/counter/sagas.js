import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import * as actionTypes from "./action-types";
import { randomImageLink } from "constants/links";
import { setRandomNumber } from "./action-creaters";

function* getRandomNumberGenerator() {
  try {
    const randomNumber = yield axios.get(randomImageLink, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    yield put(setRandomNumber(randomNumber));
  } catch (error) {
    yield put(setRandomNumber("error"));
    console.error(error.message);
  }
}

const index = [
  takeEvery(actionTypes.GET_RANDOM_NUMBER, getRandomNumberGenerator),
];

export default index;
