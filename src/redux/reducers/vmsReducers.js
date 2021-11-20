import {
  FIRST_TIME_GUEST_FAIL,
  FIRST_TIME_GUEST_REQUEST,
  FIRST_TIME_GUEST_SUCCESS,
  FIRST_TIME_GUEST_RESET,
  RETURNING_GUEST_FAIL,
  RETURNING_GUEST_REQUEST,
  RETURNING_GUEST_SUCCESS,
  RETURNING_GUEST_RESET,
  PREBOOKED_GUEST_FAIL,
  PREBOOKED_GUEST_REQUEST,
  PREBOOKED_GUEST_RESET,
  PREBOOKED_GUEST_SUCCESS,
  ADDRETURNING_GUEST_SUCCESS,
  ADDRETURNING_GUEST_REQUEST,
  ADDRETURNING_GUEST_FAIL,
  ADDRETURNING_GUEST_RESET,
  CHECK_GUEST_FAIL,
  CHECK_GUEST_REQUEST,
  CHECK_GUEST_RESET,
  CHECK_GUEST_SUCCESS,
} from "../constants/vmsConstants";

export const guestReducer = (state = {}, action) => {
  switch (action.type) {
    case FIRST_TIME_GUEST_REQUEST:
      return { loading: true };
    case FIRST_TIME_GUEST_SUCCESS:
      return { loading: false, guestInfo: action.payload, success: true };
    case FIRST_TIME_GUEST_FAIL:
      return { loading: false, error: action.payload };
    case FIRST_TIME_GUEST_RESET:
      return {};
    default:
      return state;
  }
};

export const returningGuestReducer = (state = { returning: {} }, action) => {
  switch (action.type) {
    case RETURNING_GUEST_REQUEST:
      return { loading: true };
    case RETURNING_GUEST_SUCCESS:
      return {
        loading: false,
        returning: action.payload.data,
        success: true,
      };
    case RETURNING_GUEST_FAIL:
      return { loading: false, error: action.payload };
    case RETURNING_GUEST_RESET:
      return {};
    default:
      return state;
  }
};

export const bookedGuestReducer = (state = { booked: {} }, action) => {
  switch (action.type) {
    case PREBOOKED_GUEST_REQUEST:
      return { loading: true };
    case PREBOOKED_GUEST_SUCCESS:
      return { loading: false, booked: action.payload, success: true };
    case PREBOOKED_GUEST_FAIL:
      return { loading: false, error: action.payload };
    case PREBOOKED_GUEST_RESET:
      return {};
    default:
      return state;
  }
};

export const addReturningGuestReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRETURNING_GUEST_REQUEST:
      return { loading: true };
    case ADDRETURNING_GUEST_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADDRETURNING_GUEST_FAIL:
      return { loading: false, error: action.payload };
    case ADDRETURNING_GUEST_RESET:
      return {};
    default:
      return state;
  }
};

export const checkGuestReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_GUEST_REQUEST:
      return { loading: true };
    case CHECK_GUEST_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CHECK_GUEST_FAIL:
      return { loading: false, error: action.payload };
    case CHECK_GUEST_RESET:
      return {};
    default:
      return state;
  }
};
