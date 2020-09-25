import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    courses: [],
    currentCourse: [],
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_ALL_COURSES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_COURSES_RESPONSE:
            return {
                ...state,
                isLoading: false,
                courses: action.courses
            };

        case ACTIONS.GET_ALL_COURSES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.GET_COURSE_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case ACTIONS.GET_COURSE_BY_ID_RESPONSE:
            return {
                ...state,
                isLoading: false,
                currentCourse: action.course
            };
        case ACTIONS.GET_COURSE_BY_ID_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_COURSE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case ACTIONS.UPDATE_COURSE_RESPONSE:
            return {
                ...state,
                isLoading: false,
                courses: action.courses
            };
        case ACTIONS.UPDATE_COURSE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
