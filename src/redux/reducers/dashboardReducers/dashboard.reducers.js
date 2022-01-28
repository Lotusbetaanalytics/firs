import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
} from "../../constants";

// let dat = JSON.parse(localStorage.getItem("dashboard")) || [];

export const getDashboardReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_DASHBOARD:
      return { loading: true };
    case GET_DASHBOARD_FAIL:
      return { loading: false, success: false, error: payload };
    case GET_DASHBOARD_SUCCESS:
      return { loading: false, success: true, data: payload };
    default:
      return state;
  }
};
