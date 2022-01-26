import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";

const userInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const userTokenInfoFromStorage = localStorage.getItem("getToken")
  ? JSON.parse(localStorage.getItem("getToken"))
  : null;

const initialState = {
  adminLogin: { adminInfo: userInfoFromStorage },
  tokenUser: { getToken: userTokenInfoFromStorage },
};

const store = configureStore({ reducer: rootReducer }, initialState);
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
