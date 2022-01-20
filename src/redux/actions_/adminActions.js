import { ADMIN_CHANGE_PASSWORD_FAIL,
     ADMIN_CHANGE_PASSWORD_REQUEST, 
     ADMIN_CHANGE_PASSWORD_SUCCESS, 
     ADMIN_DETAILS_FAIL, 
     ADMIN_DETAILS_REQUEST, 
     ADMIN_DETAILS_SUCCESS, 
     ADMIN_FORGET_PASSWORD_FAIL, 
     ADMIN_FORGET_PASSWORD_REQUEST, 
     ADMIN_FORGET_PASSWORD_SUCCESS, 
     ADMIN_LOGIN_FAIL, 
     ADMIN_LOGIN_REQUEST, 
     ADMIN_LOGIN_SUCCESS, 
     ADMIN_LOGOUT, 
     ADMIN_REGISTRATION_FAIL, 
     ADMIN_REGISTRATION_REQUEST, 
     ADMIN_REGISTRATION_SUCCESS } from "../constants_/adminConstants";

export const adminRegister =
  (firstName, lastName, email, phone, password, examType) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADMIN_REGISTRATION_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/candidate/",
        {
          firstName,
          lastName,
          email,
          phone,
          password,
          examType,
        },
        config
      );
      dispatch({
        type: ADMIN_REGISTRATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADMIN_REGISTRATION_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const loginADMIN = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/auth/",
      { email, password },
      config
    );
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({
    type: ADMIN_LOGOUT,
  });
};

export const adminDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_DETAILS_REQUEST });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/v1/auth/account", config);
    dispatch({
      type: ADMIN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const adminForgetpassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_FORGET_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/auth/forgotPassword",
      { email },
      config
    );
    dispatch({
      type: ADMIN_FORGET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADMIN_FORGET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const changePassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CHANGE_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/auth/resetPassword/:resettoken",
      { email },
      config
    );
    dispatch({
      type: ADMIN_CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADMIN_CHANGE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};