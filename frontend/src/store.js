import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {
    userReducer,
    feedbackReducer,
    menuReducer,
    callReducer,
    usersReducer,
    adminReducer
} from "./reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
    feedback: feedbackReducer,
    menu: menuReducer,
    call: callReducer,
    users: usersReducer,
    customers: adminReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;