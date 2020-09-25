import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    reviews: [],
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_ALL_REVIEWS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_REVIEWS_RESPONSE:

            return {
                ...state,
                isLoading: false,
                reviews: action.reviews
            };

        case ACTIONS.GET_ALL_REVIEWS_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.SEND_REVIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.SEND_REVIEW_RESPONSE:

            return {
                ...state,
                isLoading: false,
                reviews: action.reviews
            };

        case ACTIONS.SEND_REVIEW_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_REVIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_REVIEW_RESPONSE:

            return {
                ...state,
                isLoading: false,
                reviews: action.reviews
            };

        case ACTIONS.UPDATE_REVIEW_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.DELETE_REVIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.DELETE_REVIEW_RESPONSE:

            return {
                ...state,
                isLoading: false,
                reviews: action.reviews
            };

        case ACTIONS.DELETE_REVIEW_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
