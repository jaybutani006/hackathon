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
    SEARCH_SUBMIT_USERS_REQUEST,
    SEARCH_SUBMIT_USERS_SUCCESS,
    SEARCH_SUBMIT_USERS_FAIL,
    SEARCH_USERS_REQUEST,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
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
        case UPDATE_RESPONSE_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload.success,
                message: action.payload.message,
            };
        case UPDATE_POINTS_SUCCESS:
        case FEEDBACK_COUNT_SUCCESS:
        case ANSWER_COUNT_SUCCESS:
        case UPDATE_RESPONSE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case UPDATE_POINTS_FAIL:
        case FEEDBACK_COUNT_FAIL:
        case ANSWER_COUNT_FAIL:
        case UPDATE_RESPONSE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_USER_RESET:
            return {
                ...state,
                isDeleted: false,
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
        case SEARCH_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_ALL_USERS_SUCCESS:
        case SEARCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                users: action.payload,
            };
        case GET_ALL_USERS_FAIL:
        case SEARCH_USERS_FAIL:
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

export const breakfastUserReducer = (state = { breakfastUsers: {} }, action) => {
    switch (action.type) {
        case GET_BREAKFAST_USERS_REQUEST:
        case SEARCH_BREAKFAST_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_BREAKFAST_USERS_SUCCESS:
        case SEARCH_BREAKFAST_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                breakfastUsers: action.payload,
            };

        case GET_BREAKFAST_USERS_FAIL:
        case SEARCH_BREAKFAST_USERS_FAIL:
            return {
                ...state,
                loading: false,
                breakfastUsers: null,
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

export const lunchUserReducer = (state = { lunchUsers: {} }, action) => {
    switch (action.type) {
        case GET_LUNCH_USERS_REQUEST:
        case SEARCH_LUNCH_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_LUNCH_USERS_SUCCESS:
        case SEARCH_LUNCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                lunchUsers: action.payload,
            };

        case GET_LUNCH_USERS_FAIL:
        case SEARCH_LUNCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                lunchUsers: null,
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

export const snacksUserReducer = (state = { snacksUsers: {} }, action) => {
    switch (action.type) {
        case GET_SNACKS_USERS_REQUEST:
        case SEARCH_SNACKS_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_SNACKS_USERS_SUCCESS:
        case SEARCH_SNACKS_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                snacksUsers: action.payload,
            };

        case GET_SNACKS_USERS_FAIL:
        case SEARCH_SNACKS_USERS_FAIL:
            return {
                ...state,
                loading: false,
                snacksUsers: null,
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

export const dinnerUserReducer = (state = { dinnerUsers: {} }, action) => {
    switch (action.type) {
        case GET_DINNER_USERS_REQUEST:
        case SEARCH_DINNER_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_DINNER_USERS_SUCCESS:
        case SEARCH_DINNER_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                dinnerUsers: action.payload,
            };

        case GET_DINNER_USERS_FAIL:
        case SEARCH_DINNER_USERS_FAIL:
            return {
                ...state,
                loading: false,
                dinnerUsers: null,
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

export const submitUserReducer = (state = { submitUsers: {} }, action) => {
    switch (action.type) {
        case GET_SUBMIT_USERS_REQUEST:
        case SEARCH_SUBMIT_USERS_REQUEST:
            return {
                loading: true,
            };
        case GET_SUBMIT_USERS_SUCCESS:
        case SEARCH_SUBMIT_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                submitUsers: action.payload,
            };

        case GET_SUBMIT_USERS_FAIL:
        case SEARCH_SUBMIT_USERS_FAIL:
            return {
                ...state,
                loading: false,
                submitUsers: null,
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