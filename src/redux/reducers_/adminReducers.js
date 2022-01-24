import { ADMIN_CHANGE_PASSWORD_FAIL,
        ADMIN_CHANGE_PASSWORD_REQUEST,
        ADMIN_CHANGE_PASSWORD_SUCCESS, 
        ADMIN_DETAILS_FAIL, 
        ADMIN_DETAILS_REQUEST,
        ADMIN_DETAILS_SUCCESS,
        ADMIN_FORGET_PASSWORD_FAIL, 
        ADMIN_FORGET_PASSWORD_REQUEST,
        ADMIN_FORGET_PASSWORD_SUCCESS, 
        ADMIN_LOGIN_FAIL,
        ADMIN_LOGIN_REQUEST,
        ADMIN_LOGIN_RESET,
        ADMIN_LOGIN_SUCCESS,
        ADMIN_LOGOUT,
        ADMIN_REGISTRATION_FAIL,
        ADMIN_REGISTRATION_REQUEST,
        ADMIN_REGISTRATION_RESET,
        ADMIN_REGISTRATION_SUCCESS } from "../constants_/adminConstants";

export const adminRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_REGISTRATION_REQUEST:
        return { loading: true };
      case ADMIN_REGISTRATION_SUCCESS:
        return { loading: false, success: true };
      case ADMIN_REGISTRATION_FAIL:
        return { loading: false, error: action.payload };
      case ADMIN_REGISTRATION_RESET:
        return {};
        case ADMIN_LOGIN_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
        return { loading: true };
      case ADMIN_LOGIN_SUCCESS:
        return { loading: false, success: true, adminInfo: action.payload };
      case ADMIN_LOGIN_FAIL:
        return { loading: false, error: action.payload };
        case ADMIN_LOGIN_RESET:
        return {};
      case ADMIN_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const adminDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_DETAILS_REQUEST:
        return { loading: true };
      case ADMIN_DETAILS_SUCCESS:
        return { loading: false, success: true, adminInfo: action.payload.data };
      case ADMIN_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const adminForgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_FORGET_PASSWORD_REQUEST:
        return { loading: true };
      case ADMIN_FORGET_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case ADMIN_FORGET_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const adminChangePasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_CHANGE_PASSWORD_REQUEST:
        return { loading: true };
      case ADMIN_CHANGE_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case ADMIN_CHANGE_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };