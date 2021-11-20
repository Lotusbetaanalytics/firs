import {
  STAFF_LOGIN_REQUEST,
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAIL,
  STAFF_LOGOUT,
  MYVISITORS_FAIL,
  MYVISITORS_REQUEST,
  MYVISITORS_SUCCESS,
  STAFF_PREBOOK_FAIL,
  STAFF_PREBOOK_REQUEST,
  STAFF_PREBOOK_RESET,
  STAFF_PREBOOK_SUCCESS,
  GSTAFF_PREBOOK_FAIL,
  GSTAFF_PREBOOK_REQUEST,
  GSTAFF_PREBOOK_SUCCESS,
  STAFF_LOGS_FAIL,
  STAFF_LOGS_REQUEST,
  STAFF_LOGS_SUCCESS,
  STAFF_PENDING_FAIL,
  STAFF_PENDING_REQUEST,
  STAFF_PENDING_SUCCESS,
} from "../constants/staffConstants";

export const staffLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_LOGIN_REQUEST:
      return { loading: true };
    case STAFF_LOGIN_SUCCESS:
      return { loading: false, staffInfo: action.payload };
    case STAFF_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const pendingReducer = (state = { visitor: [] }, action) => {
  switch (action.type) {
    case STAFF_PENDING_REQUEST:
      return { loading: true };
    case STAFF_PENDING_SUCCESS:
      return { loading: false, visitor: action.payload.data };
    case STAFF_PENDING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const myVisitorReducer = (state = { visitors: [] }, action) => {
  switch (action.type) {
    case MYVISITORS_REQUEST:
      return { loading: true };
    case MYVISITORS_SUCCESS:
      return { loading: false, visitors: action.payload.data };
    case MYVISITORS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const staffPrebookReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_PREBOOK_REQUEST:
      return { loading: true };
    case STAFF_PREBOOK_SUCCESS:
      return { loading: false, success: true };
    case STAFF_PREBOOK_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_PREBOOK_RESET:
      return {};
    default:
      return state;
  }
};

export const getPrebookReducer = (state = {}, action) => {
  switch (action.type) {
    case GSTAFF_PREBOOK_REQUEST:
      return { loading: true };
    case GSTAFF_PREBOOK_SUCCESS:
      return { loading: false, success: true, data: action.payload.data };
    case GSTAFF_PREBOOK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getStaffLogsReducer = (
  state = { unique: 0, pending: 0, approved: 0, rejected: 0, prebooked: 0 },
  action
) => {
  switch (action.type) {
    case STAFF_LOGS_REQUEST:
      return { loading: true };
    case STAFF_LOGS_SUCCESS:
      return {
        loading: false,
        success: true,
        unique: action.payload.unique,
        approved: action.payload.approved,
        rejected: action.payload.rejected,
        prebooked: action.payload.prebooked,
        pending: action.payload.pending,
      };
    case STAFF_LOGS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
