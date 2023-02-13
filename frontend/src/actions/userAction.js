import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_SUCCESS,
    CREATE_FEEDBACK_FAIL,
    GET_FEEDBACK_REQUEST,
    GET_FEEDBACK_SUCCESS,
    GET_FEEDBACK_FAIL,
    CREATE_MENU_REQUEST,
    CREATE_MENU_SUCCESS,
    CREATE_MENU_FAIL,
    CALLING_REQUEST,
    CALLING_SUCCESS,
    CALLING_FAIL,
    UPDATE_POINTS_REQUEST,
    UPDATE_POINTS_SUCCESS,
    UPDATE_POINTS_FAIL,
    GET_MENU_REQUEST,
    GET_MENU_SUCCESS,
    GET_MENU_FAIL,
    FEEDBACK_COUNT_REQUEST,
    FEEDBACK_COUNT_SUCCESS,
    FEEDBACK_COUNT_FAIL,
    ANSWER_COUNT_REQUEST,
    ANSWER_COUNT_SUCCESS,
    ANSWER_COUNT_FAIL,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    CLEAR_ERRORS,
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

// Login
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/login`, { email, password },
            config
        );

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
    }
};

// Register
export const register = (rollNumber, email, password) => async(dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `/api/v1/register`, { rollNumber, email, password },
            config
        );
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.error,
        });
    }
};

// create feedback
export const createFeedback = (comment, ratings) => async(dispatch) => {
    try {
        dispatch({ type: CREATE_FEEDBACK_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `/api/v1/createfeedback`, { comment, ratings },
            config
        );
        dispatch({ type: CREATE_FEEDBACK_SUCCESS, payload: data.feedback });
    } catch (error) {
        dispatch({
            type: CREATE_FEEDBACK_FAIL,
            payload: error.response.data.error,
        });
    }
};

// create feedback
export const createMenu = (breakfast, lunch, snacks, dinner, id) => async(dispatch) => {
    try {
        dispatch({ type: CREATE_MENU_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(
            `/api/v1/admin/createmenu`, { breakfast, lunch, snacks, dinner, id },
            config
        );
        dispatch({ type: CREATE_MENU_SUCCESS, payload: data.menu });
    } catch (error) {
        dispatch({
            type: CREATE_MENU_FAIL,
            payload: error.response.data.error,
        });
    }
};

// create feedback
export const getAllFeedbacks = () => async(dispatch) => {
    try {
        dispatch({ type: GET_FEEDBACK_REQUEST });

        const { data } = await axios.get(
            `/api/v1/getfeedbacks`
        );
        dispatch({ type: GET_FEEDBACK_SUCCESS, payload: data.feedbacks });
    } catch (error) {
        dispatch({
            type: GET_FEEDBACK_FAIL,
            payload: error.response.data.error,
        });
    }
};

// // Load User
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/me`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
    }
};

// // Logout User
export const logout = () => async(dispatch) => {
    try {
        await axios.get(`/api/v1/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

// update points
export const updatePoints = (id, points) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_POINTS_REQUEST });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(`/api/v1/points`, { id, points }, config);
        dispatch({ type: UPDATE_POINTS_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: UPDATE_POINTS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// update points
export const getMenu = () => async(dispatch) => {
    try {
        dispatch({ type: GET_MENU_REQUEST });
        const { data } = await axios.get(`/api/v1/getmenu`);
        dispatch({ type: GET_MENU_SUCCESS, payload: data.menu });
    } catch (error) {
        dispatch({
            type: GET_MENU_FAIL,
            payload: error.response.data.error,
        });
    }
};

// update points
export const getusers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_ALL_USERS_REQUEST });
        const { data } = await axios.get(`/api/v1/users`);
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// update feedback count
export const updateFeedbackCount = (id) => async(dispatch) => {
    try {
        dispatch({ type: FEEDBACK_COUNT_REQUEST });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(
            `/api/v1/onefeedback`, { id },
            config
        );
        dispatch({ type: FEEDBACK_COUNT_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: FEEDBACK_COUNT_FAIL,
            payload: error.response.data.error,
        });
    }
};

// update feedback count
export const updateAnswerCount = (id) => async(dispatch) => {
    try {
        dispatch({ type: ANSWER_COUNT_REQUEST });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(`/api/v1/oneanswer`, { id }, config);
        dispatch({ type: ANSWER_COUNT_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: ANSWER_COUNT_FAIL,
            payload: error.response.data.error,
        });
    }
};

// update customer count
export const updateCustomers = (userId, userName) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_CUSTOMER_REQUEST });
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(
            `/api/v1/customers`, { userId, userName },
            config
        );
        dispatch({
            type: UPDATE_CUSTOMER_SUCCESS,
            payload: data.customers,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CUSTOMER_FAIL,
            payload: error.response.data.error,
        });
    }
};

// message sending
export const callall = () => async(dispatch) => {
    try {
        dispatch({ type: CALLING_REQUEST });

        const { data } = await axios.get(`/api/v1/calling`);
        dispatch({ type: CALLING_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: CALLING_FAIL,
            payload: error.response.data.error,
        });
    }
};