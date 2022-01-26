
// import {
//     createStore,
//     combineReducers,
//     applyMiddleware,
// } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { adminDetailsReducer, adminForgetPasswordReducer, adminLoginReducer, adminRegisterReducer } from "./reducers_/adminReducers";
// import { logReducer } from "./reducers_/logReducer";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
// const reducer = combineReducers({
//     adminRegister: adminRegisterReducer,
//     adminLogin: adminLoginReducer,
//     getAdminDetails: adminDetailsReducer,
//     getlog: logReducer,
//     forgetPassword:adminForgetPasswordReducer
// })
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
// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { uesrTokenReducer } from "./reducers/TokenReducer";


// const reducer = combineReducers({
//   tokenUser: uesrTokenReducer,
// });



// const initialState = {
//   tokenUser: { getToken: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );



const store = configureStore({ reducer: rootReducer }, initialState);
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;

