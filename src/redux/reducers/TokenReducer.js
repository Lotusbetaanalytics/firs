import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
  USER_TOKEN_RESET,
} from "../constants/userTokenContants";

export const uesrTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TOKEN_REQUEST:
      return { loading: true };
    case USER_TOKEN_SUCCESS:
      return {
        loading: false,
        success: true,
        getToken: action.payload.data,
      };
    case USER_TOKEN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_TOKEN_RESET:
      return {};
    default:
      return state;
  }
};
