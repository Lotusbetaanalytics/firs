import axios from "axios";
import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
  CHECKIN_TOKEN_REQUEST,
  CHECKIN_TOKEN_SUCCESS,
  CHECKIN_TOKEN_FAIL,
  CHECKOUT_TOKEN_REQUEST,
  CHECKOUT_TOKEN_SUCCESS,
  CHECKOUT_TOKEN_FAIL,
} from "../constants/userTokenContants";

export const userToken = (token, navigate) => async (dispatch) => {
  try {
    dispatch({ type: USER_TOKEN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const { data } = await axios.get(`/api/v1/prebook/${token}`, config);
    dispatch({
      type: USER_TOKEN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("getToken", JSON.stringify(data));

    navigate("/gettokeninfo");
  } catch (error) {
    dispatch({
      type: USER_TOKEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//user successfully checked in
export const userCheckInToken = (token, navigate) => async (dispatch) => {
  try {
    dispatch({ type: CHECKIN_TOKEN_REQUEST });
    const adminToken = JSON.parse(localStorage.getItem("adminInfo"));
    var config = {
      method: "put",
      url: `https://firs-vms-backend.herokuapp.com/api/v1/prebook/${token}`,
      headers: {
        Authorization: `Bearer ${adminToken.token}`,
        "Content-Type": "application/json",
      },
      data: {},
    };
    const { data } = await axios(config);
    dispatch({
      type: CHECKIN_TOKEN_SUCCESS,
      payload: data,
    });
    navigate("/tokensuccess");
  } catch (error) {
    dispatch({
      type: CHECKIN_TOKEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userCheckOutToken = (token, navigate) => async (dispatch) => {
  try {
    const adminToken = JSON.parse(localStorage.getItem("adminInfo"));
    dispatch({ type: CHECKOUT_TOKEN_REQUEST });
    var config = {
      method: "put",
      url: `https://firs-vms-backend.herokuapp.com/api/v1/prebook/${token}`,
      headers: {
        Authorization: `Bearer ${adminToken.token}`,
        "Content-Type": "application/json",
      },
      data: {},
    };
    const { data } = await axios(config);
    dispatch({
      type: CHECKOUT_TOKEN_SUCCESS,
      payload: data,
    });
    navigate("/checkoutsuccess");
  } catch (error) {
    dispatch({
      type: CHECKOUT_TOKEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
