import {
  PRE_BOOK_GUEST,
  PRE_BOOK_GUEST_FAIL,
  PRE_BOOK_GUEST_SUCCESS,
} from "../../constants";

const INITIAL_STATE = {
  loading: false,
  error: null,
  success: false,
};

export const preBookReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PRE_BOOK_GUEST:
      return {
        ...state,
        loading: true,
      };
    case PRE_BOOK_GUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case PRE_BOOK_GUEST_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
      };
    default:
      return state;
  }
};
