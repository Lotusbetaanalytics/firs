import { LOG_FAIL, LOG_REQUEST, LOG_SUCCESS } from "../constants_/logConstants";

export const logReducer = (state = [], action) => {
    switch (action.type) {
      case LOG_REQUEST:
        return {...state, loading: true };
      case LOG_SUCCESS:
        return { loading: false, success: true, data: action.payload.data.allPrebooks };
      case LOG_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };