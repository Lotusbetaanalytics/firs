import axios from "axios";
import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
} from "../../constants";

export const getDashboard = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DASHBOARD,
      });
      const res = await axios.get(
        "https://firs-vms-backend.herokuapp.com/api/v1/logs"
      );

      localStorage.setItem("dashboard", JSON.stringify(res.data));
      dispatch({
        type: GET_DASHBOARD_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_DASHBOARD_FAIL,
        payload: err.message,
      });
    }
  };
};
