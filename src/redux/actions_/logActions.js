import { LOG_FAIL, LOG_REQUEST, LOG_SUCCESS } from "../constants_/logConstants";

export const logAction = () => async (dispatch, getState) => {
    try {
      dispatch({ type: LOG_REQUEST });
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.get("/api/v1/logs/", config);
      dispatch({
        type: LOG_SUCCESS,
        payload: data,
      });
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