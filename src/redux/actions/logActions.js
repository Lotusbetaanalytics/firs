import axios from "axios";
import { LOG_SUCCESS, LOG_REQUEST, LOG_FAIL } from "../constants/logConstants";

export const getlogs = (date) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOG_REQUEST });

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
      `/api/v1/frontdesk/flow`,
      { date },
      config
    );

    dispatch({
      type: LOG_SUCCESS,
      payload: data,
    });
    localStorage.setItem("logs", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOG_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
