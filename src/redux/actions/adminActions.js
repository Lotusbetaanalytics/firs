import axios from "axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_DETAILS_REQUEST,
  ADMIN_DETAILS_SUCCESS,
  ADMIN_DETAILS_FAIL,
  STAFF_REG_REQUEST,
  STAFF_REG_SUCCESS,
  STAFF_REG_FAIL,
  STAFF_REQUEST,
  STAFF_SUCCESS,
  STAFF_FAIL,
} from "../constants/adminConstants";

export const auth = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const { data } = await axios.post(
      `/api/v1/frontdesk/login`,
      { email, password },
      config
    );

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: ADMIN_LOGOUT });
};

export const register =
  (firstname, lastname, email, password) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const { data } = await axios.post(
        `/api/v1/frontdesk`,
        { firstname, lastname, email, password },
        config
      );

      dispatch({
        type: ADMIN_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ADMIN_REGISTER_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const getAdminDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_DETAILS_REQUEST });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/frontdesk/me`, config);

    dispatch({
      type: ADMIN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewEmployee =
  (firstname, lastname, state, mobile, email, password) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: STAFF_REG_REQUEST });
      const { data } = await axios.post(`/api/v1/employee`, {
        firstname,
        lastname,
        state,
        mobile,
        email,
        password,
      });

      dispatch({
        type: STAFF_REG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STAFF_REG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getNewEmployee = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_REQUEST });

    const { data } = await axios.get(`/api/v1/employee`);

    dispatch({
      type: STAFF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
