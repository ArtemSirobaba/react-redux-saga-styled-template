import { all } from "redux-saga/effects";
import counter from "./counter/sagas";

function* rootSaga() {
  yield all([...counter]);
}

export default rootSaga;
