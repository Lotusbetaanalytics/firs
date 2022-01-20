import {
    createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { adminDetailsReducer, adminLoginReducer, adminRegisterReducer } from "./reducers_/adminReducers";

const reducer = combineReducers({
    adminRegister: adminRegisterReducer,
    adminLogin: adminLoginReducer,
    adminDetails: adminDetailsReducer,
})
const userInfoFromStorage = localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null;

const initialState = {
    adminLogin: { adminInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;