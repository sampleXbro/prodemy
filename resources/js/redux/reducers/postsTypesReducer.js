import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    types: [],
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTIONS.GET_POSTS_TYPES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_POSTS_TYPES_RESPONSE:

            return {
                ...state,
                isLoading: false,
                types: action.types
            };

        case ACTIONS.GET_POSTS_TYPES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
