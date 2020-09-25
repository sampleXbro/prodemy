import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    software: [],
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTIONS.GET_SOFTWARE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_SOFTWARE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                software: action.software
            };

        case ACTIONS.GET_SOFTWARE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.ADD_SOFTWARE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.ADD_SOFTWARE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                software: action.software
            };

        case ACTIONS.ADD_SOFTWARE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_SOFTWARE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_SOFTWARE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                software: action.software
            };

        case ACTIONS.UPDATE_SOFTWARE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
