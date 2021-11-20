import {
  STAFF_APPROVAL_FAIL,
  STAFF_APPROVAL_REQUEST,
  STAFF_APPROVAL_RESET,
  STAFF_APPROVAL_SUCCESS,
  STAFF_REJECT_FAIL,
  STAFF_REJECT_REQUEST,
  STAFF_REJECT_RESET,
  STAFF_REJECT_SUCCESS,
  STAFF_R_FAIL,
  STAFF_R_REQUEST,
  STAFF_R_RESET,
  STAFF_R_SUCCESS,
} from "../constants/sApprovalsConstants";

export const staffApprovalReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_APPROVAL_REQUEST:
      return { loading: true };
    case STAFF_APPROVAL_SUCCESS:
      return { loading: false, success: true };
    case STAFF_APPROVAL_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_APPROVAL_RESET:
      return {};
    default:
      return state;
  }
};

export const staffRejectReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_REJECT_REQUEST:
      return { loading: true };
    case STAFF_REJECT_SUCCESS:
      return { loading: false, success: true };
    case STAFF_REJECT_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_REJECT_RESET:
      return {};
    default:
      return state;
  }
};

export const staffResReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_R_REQUEST:
      return { loading: true };
    case STAFF_R_SUCCESS:
      return { loading: false, success: true };
    case STAFF_R_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_R_RESET:
      return {};
    default:
      return state;
  }
};
