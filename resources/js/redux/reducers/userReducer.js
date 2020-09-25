import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    currentUser: {},
    users: [],
    user: [],
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_CURRENT_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_CURRENT_USER_RESPONSE:

            return {
                ...state,
                isLoading: false,
                currentUser: action.currentUser
            };

        case ACTIONS.GET_CURRENT_USER_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.GET_USER_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_USER_BY_ID_RESPONSE:

            return {
                ...state,
                isLoading: false,
                user: action.user
            };

        case ACTIONS.GET_USER_BY_ID_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_USER_RESPONSE:

            return {
                ...state,
                isLoading: false,
                users: action.users,
                currentUser: action.currentUser
            };

        case ACTIONS.UPDATE_USER_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_USERS_RESPONSE:

            return {
                ...state,
                isLoading: false,
                users: action.users
            };

        case ACTIONS.GET_ALL_USERS_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.CREATE_STUDIED_COURSE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.CREATE_STUDIED_COURSE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                currentUser: action.data
            };

        case ACTIONS.CREATE_STUDIED_COURSE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_STUDIED_COURSE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_STUDIED_COURSE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                currentUser: action.data
            };

        case ACTIONS.UPDATE_STUDIED_COURSE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.DELETE_STUDIED_COURSE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.DELETE_STUDIED_COURSE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                currentUser: action.data
            };

        case ACTIONS.DELETE_STUDIED_COURSE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
