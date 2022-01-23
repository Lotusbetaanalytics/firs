import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
} from "../../constants";

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: null,
  data: JSON.parse(localStorage.getItem("dashboard")),
};
let dat = JSON.parse(localStorage.getItem("dashboard"));

export const getDashboardReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case GET_DASHBOARD:
      return { loading: true, data: dat };
    case GET_DASHBOARD_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_DASHBOARD_SUCCESS:
      return { ...state, loading: false, success: true, data: payload };
    default:
      return state;
  }
};
