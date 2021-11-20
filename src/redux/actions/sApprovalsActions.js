import {
  STAFF_APPROVAL_FAIL,
  STAFF_APPROVAL_REQUEST,
  STAFF_APPROVAL_SUCCESS,
  STAFF_REJECT_FAIL,
  STAFF_REJECT_REQUEST,
  STAFF_REJECT_SUCCESS,
  STAFF_R_FAIL,
  STAFF_R_REQUEST,
  STAFF_R_SUCCESS,
} from "../constants/sApprovalsConstants";
import axios from "axios";

export const approveMyV = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_APPROVAL_REQUEST });

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
    const { data } = await axios.post(`/api/v1/staff/approve`, { id }, config);

    dispatch({
      type: STAFF_APPROVAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_APPROVAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const rejectMyV = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_REJECT_REQUEST });

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
    const { data } = await axios.post(`/api/v1/staff/reject`, { id }, config);

    dispatch({
      type: STAFF_REJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_REJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resMyV = (id, date, timeIn) => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_R_REQUEST });

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
      `/api/v1/staff/res`,
      { id, date, timeIn },
      config
    );

    dispatch({
      type: STAFF_R_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STAFF_R_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
