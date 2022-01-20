import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
} from "../../constants";

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  data: [],
};

export const getDashboardReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_DASHBOARD:
      return {};
    default:
      return state;
  }
};
