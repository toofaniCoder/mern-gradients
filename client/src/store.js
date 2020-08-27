import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import firebase from "firebase/app";
import "firebase/auth";

const fbConfig = {
 YOUR_FIREBASE_CONFIG_HERE
};

firebase.initializeApp(fbConfig);

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
export default store;
