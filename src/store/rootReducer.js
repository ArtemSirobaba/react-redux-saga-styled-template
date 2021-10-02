import { combineReducers } from "redux";

import counter from "./counter/reducers";

const RootReducer = combineReducers({
  counter,
});

export default RootReducer;
