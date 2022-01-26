// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { uesrTokenReducer } from "./reducers/TokenReducer";
import { configureStore } from "@reduxjs/toolkit";

// const reducer = combineReducers({
//   tokenUser: uesrTokenReducer,
// });

const userInfoFromStorage = localStorage.getItem("getToken")
  ? JSON.parse(localStorage.getItem("getToken"))
  : null;

const initialState = {
  tokenUser: { getToken: userInfoFromStorage },
};

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );



import { rootReducer } from "./reducers/index";

const store = configureStore({ reducer: rootReducer }, initialState);
// The store now has redux-thunk added and the Redux DevTools Extension is turned on


export default store;
