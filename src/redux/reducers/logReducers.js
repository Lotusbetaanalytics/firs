import { LOG_FAIL, LOG_REQUEST, LOG_SUCCESS } from "../constants/logConstants";

export const logReducer = (
  state = {
    logs: {},
    newGuest: [],
    awaiting: [],
    today: [],
    allLogs: [],
    approved: [],
    rejected: [],
  },
  action
) => {
  switch (action.type) {
    case LOG_REQUEST:
      return { loading: true };
    case LOG_SUCCESS:
      return {
        loading: false,
        logs: action.payload,
        newGuest: action.payload.newGuest,
        awaiting: action.payload.awaiting,
        today: action.payload.today,
        allLogs: action.payload.allLogs,
        approved: action.payload.approved,
        rejected: action.payload.rejected,
        vin: action.payload.vin,
        out: action.payload.out,
        success: true,
      };
    case LOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
