import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    posts: [],
    currentPost: [],
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_ALL_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_POSTS_RESPONSE:
            return {
                ...state,
                isLoading: false,
                posts: action.posts
            };

        case ACTIONS.GET_ALL_POSTS_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.GET_POST_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_POST_BY_ID_RESPONSE:

            return {
                ...state,
                isLoading: false,
                currentPost: action.post
            };

        case ACTIONS.GET_POST_BY_ID_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.ADD_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.ADD_POST_RESPONSE:

            return {
                ...state,
                isLoading: false,
                posts: action.posts
            };

        case ACTIONS.ADD_POST_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_POST_RESPONSE:
            return {
                ...state,
                isLoading: false,
                posts: action.posts
            };

        case ACTIONS.UPDATE_POST_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.DELETE_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.DELETE_POST_RESPONSE:

            return {
                ...state,
                isLoading: false,
                posts: action.posts
            };

        case ACTIONS.DELETE_POST_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.LIKE_POST_REQUEST:
            return {
                ...state,
                error: null
            };

        case ACTIONS.LIKE_POST_RESPONSE:

            return {
                ...state,
                currentPost: action.post
            };

        case ACTIONS.LIKE_POST_ERROR:

            return {
                ...state,
                error: action.message
            };

        case ACTIONS.DISLIKE_POST_REQUEST:
            return {
                ...state,
                error: null
            };

        case ACTIONS.DISLIKE_POST_RESPONSE:

            return {
                ...state,
                currentPost: action.post
            };

        case ACTIONS.DISLIKE_POST_ERROR:

            return {
                ...state,
                error: action.message
            };


        default: return state;
    }
}
