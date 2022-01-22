import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
  USER_TOKEN_RESET,
} from "../constants/userTokenContants";

// const initialState = {
//   loading: false,
//   success: false,
//   error: null,
//   getToken: {},
// };

export const uesrTokenReducer = (state = {}, action) => {
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
