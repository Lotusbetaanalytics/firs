import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkInTokenReducer, uesrTokenReducer } from "./reducers/TokenReducer";

const reducer = combineReducers({
  tokenUser: uesrTokenReducer,
  userT: checkInTokenReducer,
});

const userInfoFromStorage = localStorage.getItem("getToken")
  ? JSON.parse(localStorage.getItem("getToken"))
  : null;

const initialState = {
  tokenUser: { getToken: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
