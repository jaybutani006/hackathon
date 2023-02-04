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
    CLEAR_ERRORS,
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
            `/api/v1/admin/createMenu`, { breakfast, lunch, snacks, dinner, id },
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