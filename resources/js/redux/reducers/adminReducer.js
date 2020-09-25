import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_ADMIN_INITIAL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_ADMIN_INITIAL_RESPONSE:

            return {
                ...state,
                isLoading: false,
                data: action.data
            };

        case ACTIONS.GET_ADMIN_INITIAL_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        default: return state;
    }
}
