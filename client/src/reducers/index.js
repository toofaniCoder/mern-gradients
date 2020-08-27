import { combineReducers } from "redux";
import GradientReducer from "./gradientReducer";

import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  firebase: firebaseReducer,
  gradient: GradientReducer,
});
