import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
  USER_TOKEN_RESET,
  CHECKIN_TOKEN_REQUEST,
  CHECKIN_TOKEN_SUCCESS,
  CHECKIN_TOKEN_FAIL,
  CHECKOUT_TOKEN_REQUEST,
  CHECKOUT_TOKEN_SUCCESS,
  CHECKOUT_TOKEN_FAIL,
} from "../constants/userTokenContants";

// const initialState = {
//   loading: false,
//   success: false,
//   error: null,
//   getToken: {},
// };

// let tokenDetail = JSON.parse(localStorage.getItem("tokenInfo"));
export const userTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TOKEN_REQUEST:
      return { loading: true };
    case USER_TOKEN_SUCCESS:
      return {
        loading: false,
        success: true,
        getToken: action.payload.data,
        error: false,
      };
    case USER_TOKEN_FAIL:
      return {
        success: false,
        loading: false,
        error: action.payload,
      };
    case USER_TOKEN_RESET:
      return {};
    default:
      return state;
  }
};

//user successfully checked in
export const checkInTokenReducer = (state = { puttoken: [] }, action) => {
  switch (action.type) {
    case CHECKIN_TOKEN_REQUEST:
      return {
        ...state,
        puttoken: state.puttoken.filter((x) => x.token === action.payload),
        loading: true,
      };
    case CHECKIN_TOKEN_SUCCESS:
      return {
        loading: false,
        success: true,
        checkInToken: action.payload.data,
        error: false,
      };
    case CHECKIN_TOKEN_FAIL:
      return {
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const checkOutTokenReducer = (state = { puttoken: [] }, action) => {
  switch (action.type) {
    case CHECKOUT_TOKEN_REQUEST:
      return {
        ...state,
        puttoken: state.puttoken.filter((x) => x.token === action.payload),
        loading: true,
      };
    case CHECKOUT_TOKEN_SUCCESS:
      return {
        loading: false,
        success: true,
        checkOutToken: action.payload.data,
        error: false,
      };
    case CHECKOUT_TOKEN_FAIL:
      return {
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
