import axios from "axios";
import {
  GET_SINGLEGUEST_FAIL,
  GET_SINGLEGUEST_SUCCESS,
  GET_SINGLEGUEST_REQUEST,
  NOTIFY_HOST_FAIL,
  NOTIFY_HOST_REQUEST,
  NOTIFY_HOST_SUCCESS,
  CHECKOUT_SUCCESS,
  CHECKOUT_REQUEST,
  CHECKOUT_FAIL,
  CHECKIN_SUCCESS,
  CHECKIN_REQUEST,
  CHECKIN_FAIL,
  PREBOOK_SUCCESS,
  PREBOOK_REQUEST,
  PREBOOK_FAIL,
  SPREBOOK_SUCCESS,
  SPREBOOK_REQUEST,
  SPREBOOK_FAIL,
} from "../constants/guestConstants";

export const getSingleGuest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SINGLEGUEST_REQUEST });

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
    const { data } = await axios.get(`/api/v1/frontdesk/guest/${id}`, config);

    dispatch({
      type: GET_SINGLEGUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLEGUEST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const notifyHost =
  (name, company, photo, host, id) => async (dispatch, getState) => {
    try {
      dispatch({ type: NOTIFY_HOST_REQUEST });

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
      const { data } = await axios.post(
        `/api/v1/frontdesk/guest/host`,
        { name, company, photo, host, id },
        config
      );

      dispatch({
        type: NOTIFY_HOST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOTIFY_HOST_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const checkinGuest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHECKIN_REQUEST });

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
    const { data } = await axios.post(
      `/api/v1/frontdesk/guest/checkin`,
      { id },
      config
    );

    dispatch({
      type: CHECKIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECKIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const checkoutGuest =
  (mobile, timeOut, date) => async (dispatch, getState) => {
    try {
      dispatch({ type: CHECKOUT_REQUEST });

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
      const { data } = await axios.post(
        `/api/v1/frontdesk/guest/checkout`,
        { mobile, timeOut, date },
        config
      );

      dispatch({
        type: CHECKOUT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CHECKOUT_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const prebookNewGuest =
  (fullname, company, email, mobile, host, timeIn, date) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PREBOOK_REQUEST });

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
      const { data } = await axios.post(
        `/api/v1/frontdesk/prebook`,
        { fullname, company, email, mobile, host, timeIn, date },
        config
      );

      dispatch({
        type: PREBOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PREBOOK_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const validatePrebook = (token) => async (dispatch, getState) => {
  try {
    dispatch({ type: SPREBOOK_REQUEST });

    const { data } = await axios.post(`/api/v1/prebook/checkin`, { token });

    dispatch({
      type: SPREBOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPREBOOK_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
