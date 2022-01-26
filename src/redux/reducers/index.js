import { combineReducers } from "redux";
import { getDashboardReducer } from "./dashboardReducers/dashboard.reducers";
import { preBookReducer } from "./prebookReducers/prebook.reducers";
import { userTokenReducer } from "./TokenReducer";
import {
  adminDetailsReducer,
  adminForgetPasswordReducer,
  adminLoginReducer,
  adminRegisterReducer,
} from "../reducers_/adminReducers";
import { logReducer } from "../reducers_/logReducer";

export const rootReducer = combineReducers({
  preBookReducer,
  dashboard: getDashboardReducer,
  tokenUser: userTokenReducer,
  adminRegister: adminRegisterReducer,
  adminLogin: adminLoginReducer,
  getAdminDetails: adminDetailsReducer,
  getlog: logReducer,
  forgetPassword: adminForgetPasswordReducer,
});
