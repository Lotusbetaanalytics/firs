import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";

const userInfoFromStorage = localStorage.getItem("getToken")
  ? JSON.parse(localStorage.getItem("getToken"))
  : null;

const initialState = {
  tokenUser: { getToken: userInfoFromStorage },
};

const store = configureStore({ reducer: rootReducer }, initialState);
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
