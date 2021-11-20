import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_RESET,
  ADMIN_DETAILS_REQUEST,
  ADMIN_DETAILS_SUCCESS,
  ADMIN_DETAILS_FAIL,
  ADMIN_DETAILS_RESET,
  STAFF_REG_REQUEST,
  STAFF_REG_SUCCESS,
  STAFF_REG_FAIL,
  STAFF_REG_RESET,
  STAFF_REQUEST,
  STAFF_SUCCESS,
  STAFF_FAIL,
} from "../constants/adminConstants";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const adminDetailsReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case ADMIN_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ADMIN_DETAILS_SUCCESS:
      return { loading: false, admin: action.payload };
    case ADMIN_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_DETAILS_RESET:
      return { admin: {} };
    default:
      return state;
  }
};

export const addStaffReducer = (state = { staff: {} }, action) => {
  switch (action.type) {
    case STAFF_REG_REQUEST:
      return { ...state, loading: true };
    case STAFF_REG_SUCCESS:
      return { loading: false, success: true, staff: action.payload.data };
    case STAFF_REG_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_REG_RESET:
      return {};
    default:
      return state;
  }
};

export const getStaffReducer = (state = { staff: [] }, action) => {
  switch (action.type) {
    case STAFF_REQUEST:
      return { ...state, loading: true };
    case STAFF_SUCCESS:
      return { loading: false, staff: action.payload.data };
    case STAFF_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
