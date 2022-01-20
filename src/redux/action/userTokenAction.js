import axios from "axios";
import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
} from "../constants/userTokenContants";

export const userToken = (token) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_TOKEN_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/prebook/${token}`, {}, config);
    dispatch({
      type: USER_TOKEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_TOKEN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
