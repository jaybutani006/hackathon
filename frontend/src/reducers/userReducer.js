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
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_FAIL,
    CLEAR_ERRORS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case UPDATE_POINTS_REQUEST:
        case FEEDBACK_COUNT_REQUEST:
        case ANSWER_COUNT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_POINTS_SUCCESS:
        case FEEDBACK_COUNT_SUCCESS:
        case ANSWER_COUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case UPDATE_POINTS_FAIL:
        case FEEDBACK_COUNT_FAIL:
        case ANSWER_COUNT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const feedbackReducer = (state = { feedback: {} }, action) => {
    switch (action.type) {
        case CREATE_FEEDBACK_REQUEST:
        case GET_FEEDBACK_REQUEST:
            return {
                loading: true,
            };
        case CREATE_FEEDBACK_SUCCESS:
        case GET_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                feedback: action.payload,
            };
        case GET_FEEDBACK_FAIL:
        case CREATE_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                feedback: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const menuReducer = (state = { menu: {} }, action) => {
    switch (action.type) {
        case CREATE_MENU_REQUEST:
        case GET_MENU_REQUEST:
            return {
                loading: true,
            };
        case CREATE_MENU_SUCCESS:
        case GET_MENU_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                menu: action.payload,
            };
        case CREATE_MENU_FAIL:
        case GET_MENU_FAIL:
            return {
                ...state,
                loading: false,
                menu: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const usersReducer = (state = { users: {} }, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                users: action.payload,
            };
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                users: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const adminReducer = (state = { customers: {} }, action) => {
    switch (action.type) {
        case UPDATE_CUSTOMER_REQUEST:
            return {
                loading: true,
            };
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                customers: action.payload,
            };
        case UPDATE_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false,
                customers: null,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const callReducer = (state = { call: {} }, action) => {
    switch (action.type) {
        case CALLING_REQUEST:
            return {
                loading: true,
            };
        case CALLING_SUCCESS:
            return {
                ...state,
                loading: false,
                call: action.payload,
            };

        case CALLING_FAIL:
            return {
                ...state,
                loading: false,
                call: null,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};