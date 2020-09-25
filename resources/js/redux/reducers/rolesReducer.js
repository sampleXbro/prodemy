import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    roles: [],
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTIONS.GET_ALL_ROLES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ALL_ROLES_RESPONSE:

            return {
                ...state,
                isLoading: false,
                roles: action.roles
            };

        case ACTIONS.GET_ALL_ROLES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.ADD_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.ADD_ROLE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                roles: action.roles
            };

        case ACTIONS.ADD_ROLE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.UPDATE_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.UPDATE_ROLE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                roles: action.roles
            };

        case ACTIONS.UPDATE_ROLE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
