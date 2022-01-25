import axios from "axios";
import {
  PRE_BOOK_GUEST,
  PRE_BOOK_GUEST_FAIL,
  PRE_BOOK_GUEST_SUCCESS,
} from "../../constants";
const BASE_URL = "https://firs-vms-backend.herokuapp.com/api/v1";

export const preBookGuest = (...formData) => {
  const [name, email, phoneNumber, purpose, company, date, time] = formData;
  let token =
    JSON.parse(localStorage.getItem("token")) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTlhNmY2OTY3OWRlYjNmMjk0ZjU0NiIsImlhdCI6MTY0MjcwMzEzMSwiZXhwIjoxNjQ1Mjk1MTMxfQ.6q2lUQzkTWA-0irWlloOGc_HMgZi2ED6Rbd9lDnRuW4";
  return async (dispatch) => {
    try {
      let data = {
        name,
        email,
        phoneNumber,
        purpose,
        company,
        date,
        time,

        // timeIn: "1/20/2022, 11:12:40 AM",
        // timeOut: "1/20/2022, 11:12:40 AM",
        // isActive: true,
        // status: "Pending",
        // laptop: "hello",
      };

      var config = {
        method: "post",
        url: `${BASE_URL}/prebook`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      };
      // start the process of data submission action
      dispatch({
        type: PRE_BOOK_GUEST,
      });
      const res = await axios(config); //post data from the form

      dispatch({
        type: PRE_BOOK_GUEST_SUCCESS,
        payload: res.data, // assign received data to payload
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: PRE_BOOK_GUEST_FAIL,
        payload: err.message || err.message,
      });
    }
  };
};
