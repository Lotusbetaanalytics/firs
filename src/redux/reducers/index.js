import { combineReducers } from "redux";
import { getDashboardReducer } from "./dashboardReducers/dashboard.reducers";
import { preBookReducer } from "./prebookReducers/prebook.reducers";

export const rootReducer = combineReducers({
  preBookReducer,
  dashboard: getDashboardReducer,
});
