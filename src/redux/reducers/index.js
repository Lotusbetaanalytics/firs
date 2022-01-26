import { combineReducers } from "redux";
import { getDashboardReducer } from "./dashboardReducers/dashboard.reducers";
import { preBookReducer } from "./prebookReducers/prebook.reducers";
import { userTokenReducer } from "./TokenReducer";

export const rootReducer = combineReducers({
  preBookReducer,
  dashboard: getDashboardReducer,
  tokenUser: userTokenReducer,
});
