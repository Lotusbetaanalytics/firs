import {
  GET_SINGLEGUEST_FAIL,
  GET_SINGLEGUEST_REQUEST,
  GET_SINGLEGUEST_SUCCESS,
  NOTIFY_HOST_SUCCESS,
  NOTIFY_HOST_REQUEST,
  NOTIFY_HOST_FAIL,
  NOTIFY_HOST_RESET,
  CHECKIN_FAIL,
  CHECKIN_REQUEST,
  CHECKIN_RESET,
  CHECKIN_SUCCESS,
  CHECKOUT_FAIL,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_RESET,
  PREBOOK_FAIL,
  PREBOOK_REQUEST,
  PREBOOK_RESET,
  PREBOOK_SUCCESS,
  SPREBOOK_FAIL,
  SPREBOOK_REQUEST,
  SPREBOOK_RESET,
  SPREBOOK_SUCCESS,
} from "../constants/guestConstants";

export const singleGuestReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLEGUEST_REQUEST:
      return { loading: true };
    case GET_SINGLEGUEST_SUCCESS:
      return { loading: false, info: action.payload.data };
    case GET_SINGLEGUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const notifyHostReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTIFY_HOST_REQUEST:
      return { loading: true };
    case NOTIFY_HOST_SUCCESS:
      return { loading: false, success: true };
    case NOTIFY_HOST_FAIL:
      return { loading: false, error: action.payload };
    case NOTIFY_HOST_RESET:
      return {};
    default:
      return state;
  }
};

export const checkinReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECKIN_REQUEST:
      return { loading: true };
    case CHECKIN_SUCCESS:
      return { loading: false, success: true };
    case CHECKIN_FAIL:
      return { loading: false, error: action.payload };
    case CHECKIN_RESET:
      return {};
    default:
      return state;
  }
};

export const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return { loading: true };
    case CHECKOUT_SUCCESS:
      return { loading: false, success: true };
    case CHECKOUT_FAIL:
      return { loading: false, error: action.payload };
    case CHECKOUT_RESET:
      return {};
    default:
      return state;
  }
};

export const prebookReducer = (state = {}, action) => {
  switch (action.type) {
    case PREBOOK_REQUEST:
      return { loading: true };
    case PREBOOK_SUCCESS:
      return { loading: false, success: true };
    case PREBOOK_FAIL:
      return { loading: false, error: action.payload };
    case PREBOOK_RESET:
      return {};
    default:
      return state;
  }
};

export const sprebookReducer = (state = {}, action) => {
  switch (action.type) {
    case SPREBOOK_REQUEST:
      return { loading: true };
    case SPREBOOK_SUCCESS:
      return { loading: false, success: true, booked: action.payload.data };
    case SPREBOOK_FAIL:
      return { loading: false, error: action.payload };
    case SPREBOOK_RESET:
      return {};
    default:
      return state;
  }
};
