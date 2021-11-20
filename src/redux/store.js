import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addReturningGuestReducer,
  bookedGuestReducer,
  guestReducer,
  returningGuestReducer,
  checkGuestReducer,
} from "./reducers/vmsReducers";
import {
  adminDetailsReducer,
  adminLoginReducer,
  adminRegisterReducer,
  addStaffReducer,
  getStaffReducer,
} from "./reducers/adminReducers";
import { logReducer } from "./reducers/logReducers";
import {
  checkinReducer,
  checkoutReducer,
  notifyHostReducer,
  prebookReducer,
  sprebookReducer,
  singleGuestReducer,
} from "./reducers/guestReducers";
import {
  getPrebookReducer,
  getStaffLogsReducer,
  myVisitorReducer,
  pendingReducer,
  staffLoginReducer,
  staffPrebookReducer,
} from "./reducers/staffReducers";
import {
  staffApprovalReducer,
  staffRejectReducer,
  staffResReducer,
} from "./reducers/sApprovalsReducers";

const reducer = combineReducers({
  newGuest: guestReducer,
  returningGuest: returningGuestReducer,
  aGuest: addReturningGuestReducer,
  verify: checkGuestReducer,
  bookedGuest: bookedGuestReducer,
  adminLogin: adminLoginReducer,
  staffLogin: staffLoginReducer,
  profile: adminDetailsReducer,
  adminregister: adminRegisterReducer,
  vmslogs: logReducer,
  singleGuest: singleGuestReducer,
  notifyH: notifyHostReducer,
  checkin: checkinReducer,
  checkout: checkoutReducer,
  book: prebookReducer,
  sbook: sprebookReducer,
  addStaff: addStaffReducer,
  getStaff: getStaffReducer,
  myVisitors: myVisitorReducer,
  prebook: staffPrebookReducer,
  getPrebook: getPrebookReducer,
  staffLogs: getStaffLogsReducer,
  staffApprove: staffApprovalReducer,
  staffReject: staffRejectReducer,
  staffR: staffResReducer,
  getPending: pendingReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const staffInfoFromStorage = localStorage.getItem("staffInfo")
  ? JSON.parse(localStorage.getItem("staffInfo"))
  : null;
const logsFromStorage = localStorage.getItem("logs")
  ? JSON.parse(localStorage.getItem("logs"))
  : null;

const initialState = {
  adminLogin: { adminInfo: userInfoFromStorage },
  staffLogin: { staffInfo: staffInfoFromStorage },
  vmslogs: { logs: logsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
