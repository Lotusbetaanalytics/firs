import { combineReducers } from "redux";
import { preBookReducer } from "./prebookReducers/prebook.reducers";

export const rootReducer = combineReducers({
  preBookReducer,
});
