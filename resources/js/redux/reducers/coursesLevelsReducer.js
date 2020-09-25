import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    levels: [],
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTIONS.GET_ALL_COURSES_LEVELS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_COURSES_LEVELS_RESPONSE:

            return {
                ...state,
                isLoading: false,
                levels: action.levels
            };

        case ACTIONS.GET_ALL_COURSES_LEVELS_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.ADD_COURSE_LEVEL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.ADD_COURSE_LEVEL_RESPONSE:

            return {
                ...state,
                isLoading: false,
                levels: action.levels
            };

        case ACTIONS.ADD_COURSE_LEVEL_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_COURSE_LEVEL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_COURSE_LEVEL_RESPONSE:

            return {
                ...state,
                isLoading: false,
                levels: action.levels
            };

        case ACTIONS.UPDATE_COURSE_LEVEL_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
