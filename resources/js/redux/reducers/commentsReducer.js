import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    comments: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_COMMENTS_RESPONSE:

            return {
                ...state,
                isLoading: false,
                comments: action.comments
            };

        case ACTIONS.GET_ALL_COMMENTS_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.GET_COMMENTS_BY_POST_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_COMMENTS_BY_POST_ID_RESPONSE:

            return {
                ...state,
                isLoading: false,
                comments: action.comments
            };

        case ACTIONS.GET_COMMENTS_BY_POST_ID_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.ADD_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.ADD_COMMENT_RESPONSE:

            return {
                ...state,
                isLoading: false,
                comments: action.comments
            };

        case ACTIONS.ADD_COMMENT_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_COMMENT_RESPONSE:
            return {
                ...state,
                isLoading: false,
                comments: action.comments
            };

        case ACTIONS.UPDATE_COMMENT_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.DELETE_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.DELETE_COMMENT_RESPONSE:

            return {
                ...state,
                isLoading: false,
                comments: action.comments
            };

        case ACTIONS.DELETE_COMMENT_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
