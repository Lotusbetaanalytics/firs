import axios from "axios";
import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAIL,
  GET_DASHBOARD_SUCCESS,
} from "../../constants";

export const getDashboard = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: GET_DASHBOARD,
      });
      const res = axios.get(
        "https://firs-vms-backend.herokuapp.com/api/v1/logs"
      );
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
