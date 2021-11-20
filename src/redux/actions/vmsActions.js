import Axios from "axios";
import {
  FIRST_TIME_GUEST_FAIL,
  FIRST_TIME_GUEST_REQUEST,
  FIRST_TIME_GUEST_SUCCESS,
  RETURNING_GUEST_FAIL,
  RETURNING_GUEST_REQUEST,
  RETURNING_GUEST_SUCCESS,
  ADDRETURNING_GUEST_FAIL,
  ADDRETURNING_GUEST_REQUEST,
  ADDRETURNING_GUEST_SUCCESS,
  CHECK_GUEST_SUCCESS,
  CHECK_GUEST_REQUEST,
  CHECK_GUEST_FAIL,
} from "../constants/vmsConstants";

export const addNewGuest =
  (
    fullname,
    company,
    email,
    mobile,
    laptop,
    lsn,
    host,
    purpose,
    appointment,
    photo,
    timeIn,
    date
  ) =>
  async (dispatch) => {
    dispatch({
      type: FIRST_TIME_GUEST_REQUEST,
    });
    try {
      const { data } = await Axios.post("api/v1/visitors", {
        fullname,
        company,
        email,
        mobile,
        laptop,
        lsn,
        host,
        purpose,
        appointment,
        photo,
        timeIn,
        date,
      });
      dispatch({
        type: FIRST_TIME_GUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIRST_TIME_GUEST_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const getReturningGuest = (mobile) => async (dispatch) => {
  dispatch({
    type: RETURNING_GUEST_REQUEST,
  });
  try {
    const { data } = await Axios.post("/api/v1/visitors/returning", {
      mobile,
    });
    dispatch({
      type: RETURNING_GUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RETURNING_GUEST_FAIL,
      payload:
        error.response && error.response.error
          ? error.response.error
          : error.message,
    });
  }
};

export const addReturningGuest =
  (user, laptop, lsn, host, purpose, appointment, photo, timeIn, date) =>
  async (dispatch) => {
    dispatch({
      type: ADDRETURNING_GUEST_REQUEST,
    });
    try {
      const { data } = await Axios.post("/api/v1/returning", {
        user,
        laptop,
        lsn,
        host,
        purpose,
        appointment,
        photo,
        timeIn,
        date,
      });
      dispatch({
        type: ADDRETURNING_GUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADDRETURNING_GUEST_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const checkGuest = (email, mobile) => async (dispatch) => {
  dispatch({
    type: CHECK_GUEST_REQUEST,
  });
  try {
    const { data } = await Axios.post("/api/v1/visitors/check", {
      email,
      mobile,
    });
    dispatch({
      type: CHECK_GUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_GUEST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
