import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {
    userReducer,
    feedbackReducer,
    menuReducer,
    callReducer,
    usersReducer,
    adminReducer,
    submitUserReducer,
    breakfastUserReducer,
    lunchUserReducer,
    snacksUserReducer,
    dinnerUserReducer
} from "./reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
    feedback: feedbackReducer,
    menu: menuReducer,
    call: callReducer,
    users: usersReducer,
    submitUsers: submitUserReducer,
    breakfastUsers: breakfastUserReducer,
    lunchUsers: lunchUserReducer,
    snacksUsers: snacksUserReducer,
    dinnerUsers: dinnerUserReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;