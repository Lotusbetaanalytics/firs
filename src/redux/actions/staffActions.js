import {
  STAFF_LOGIN_REQUEST,
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAIL,
  STAFF_LOGOUT,
  MYVISITORS_SUCCESS,
  MYVISITORS_REQUEST,
  MYVISITORS_FAIL,
  STAFF_PREBOOK_FAIL,
  STAFF_PREBOOK_REQUEST,
  STAFF_PREBOOK_SUCCESS,
  GSTAFF_PREBOOK_FAIL,
  GSTAFF_PREBOOK_REQUEST,
  GSTAFF_PREBOOK_SUCCESS,
  STAFF_LOGS_SUCCESS,
  STAFF_LOGS_REQUEST,
  STAFF_LOGS_FAIL,
  STAFF_PENDING_SUCCESS,
  STAFF_PENDING_REQUEST,
  STAFF_PENDING_FAIL,
} from "../constants/staffConstants";
import axios from "axios";

export const staffAuth = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: STAFF_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const { data } = await axios.post(
      `/api/v1/employee/login`,
      { email, password },
      config
    );

    dispatch({
      type: STAFF_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("staffInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: STAFF_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const staffLogout = () => (dispatch) => {
  localStorage.removeItem("staffInfo");
  dispatch({ type: STAFF_LOGOUT });
};

export const getMyVisitors = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MYVISITORS_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/staff/visitors`, config);

    dispatch({
      type: MYVISITORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MYVISITORS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPrebookedVisitors = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GSTAFF_PREBOOK_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/staff/prebook`, config);

    dispatch({
      type: GSTAFF_PREBOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GSTAFF_PREBOOK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const staffPrebookedVisitors =
  (fullname, company, email, mobile, timeIn, date) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: STAFF_PREBOOK_REQUEST });

      const {
        staffLogin: { staffInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${staffInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/v1/prebook/staff`,
        { fullname, company, email, mobile, timeIn, date },
        config
      );

      dispatch({
        type: STAFF_PREBOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STAFF_PREBOOK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getMyLogs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_LOGS_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/staff/logs`, config);

    dispatch({
      type: STAFF_LOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_LOGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPendingLogs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_PENDING_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/staff/pending`, config);

    dispatch({
      type: STAFF_PENDING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_PENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
