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
    UPDATE_RESPONSE_REQUEST,
    UPDATE_RESPONSE_SUCCESS,
    UPDATE_RESPONSE_FAIL,
    GET_BREAKFAST_USERS_REQUEST,
    GET_BREAKFAST_USERS_SUCCESS,
    GET_BREAKFAST_USERS_FAIL,
    GET_LUNCH_USERS_REQUEST,
    GET_LUNCH_USERS_SUCCESS,
    GET_LUNCH_USERS_FAIL,
    GET_SNACKS_USERS_REQUEST,
    GET_SNACKS_USERS_SUCCESS,
    GET_SNACKS_USERS_FAIL,
    GET_DINNER_USERS_REQUEST,
    GET_DINNER_USERS_SUCCESS,
    GET_DINNER_USERS_FAIL,
    GET_SUBMIT_USERS_REQUEST,
    GET_SUBMIT_USERS_SUCCESS,
    GET_SUBMIT_USERS_FAIL,
    SEARCH_BREAKFAST_USERS_REQUEST,
    SEARCH_BREAKFAST_USERS_SUCCESS,
    SEARCH_BREAKFAST_USERS_FAIL,
    SEARCH_LUNCH_USERS_REQUEST,
    SEARCH_LUNCH_USERS_SUCCESS,
    SEARCH_LUNCH_USERS_FAIL,
    SEARCH_SNACKS_USERS_REQUEST,
    SEARCH_SNACKS_USERS_SUCCESS,
    SEARCH_SNACKS_USERS_FAIL,
    SEARCH_DINNER_USERS_REQUEST,
    SEARCH_DINNER_USERS_SUCCESS,
    SEARCH_DINNER_USERS_FAIL,
    SEARCH_USERS_REQUEST,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAIL,
    SEARCH_SUBMIT_USERS_REQUEST,
    SEARCH_SUBMIT_USERS_SUCCESS,
    SEARCH_SUBMIT_USERS_FAIL,
    CLEAR_ERRORS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
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

// update response
export const updateResponse =
    (breakfastYes, lunchYes, snacksYes, dinnerYes, id) => async(dispatch) => {
        try {
            dispatch({ type: UPDATE_RESPONSE_REQUEST });

            const config = { headers: { "Content-Type": "multipart/form-data" } };

            const { data } = await axios.put(
                `/api/v1/giveans`, { breakfastYes, lunchYes, snacksYes, dinnerYes, id },
                config
            );
            dispatch({ type: UPDATE_RESPONSE_SUCCESS, payload: data.user });
        } catch (error) {
            dispatch({
                type: UPDATE_RESPONSE_FAIL,
                payload: error.response.data.error,
            });
        }
    };

// update menu
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

// get all feedback
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

// get breakfast users
export const getBreakfastUsers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_BREAKFAST_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/breakfast/users`
        );
        dispatch({ type: GET_BREAKFAST_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_BREAKFAST_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// search breakfast users
export const searchBreakfastUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_BREAKFAST_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/breakfast/users/${key}`
        );
        dispatch({ type: SEARCH_BREAKFAST_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_BREAKFAST_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// get lunch users
export const getLunchUsers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_LUNCH_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/lunch/users`
        );
        dispatch({ type: GET_LUNCH_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_LUNCH_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// search lunch users
export const searchLunchfastUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_LUNCH_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/lunch/users/${key}`
        );
        dispatch({ type: SEARCH_LUNCH_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_LUNCH_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// search submit users
export const searchSubmitUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_SUBMIT_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/submit/users/${key}`
        );
        dispatch({ type: SEARCH_SUBMIT_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_SUBMIT_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// get snacks users
export const getSnacksUsers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_SNACKS_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/snacks/users`
        );
        dispatch({ type: GET_SNACKS_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_SNACKS_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// get snacks users
export const deleteUser = (id) => async(dispatch) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });

        const { data } = await axios.delete(
            `/api/v1/user/delete/${id}`
        );
        dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data,
        });
    }
};

// search snacks users
export const searchSnacksUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_SNACKS_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/snacks/users/${key}`
        );
        dispatch({ type: SEARCH_SNACKS_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_SNACKS_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// get dinner users
export const getDinnerUsers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_DINNER_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/dinner/users`
        );
        dispatch({ type: GET_DINNER_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_DINNER_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// search dinner users
export const searchDinnerUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_DINNER_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/dinner/users/${key}`
        );
        dispatch({ type: SEARCH_DINNER_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_DINNER_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};
// get submit users
export const getSubmitUsers = () => async(dispatch) => {
    try {
        dispatch({ type: GET_SUBMIT_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/submit/users`
        );
        dispatch({ type: GET_SUBMIT_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_SUBMIT_USERS_FAIL,
            payload: error.response.data.error,
        });
    }
};

// Load User
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

// get menu
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

// get all points
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
// get dinner users
export const searchUsers = (key) => async(dispatch) => {
    try {
        dispatch({ type: SEARCH_USERS_REQUEST });

        const { data } = await axios.get(
            `/api/v1/users/${key}`
        );
        dispatch({ type: SEARCH_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: SEARCH_USERS_FAIL,
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