import ACTIONS from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    messages: [],
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTIONS.GET_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.GET_CHAT_MESSAGES_RESPONSE:

            return {
                ...state,
                isLoading: false,
                messages: action.messages
            };

        case ACTIONS.GET_CHAT_MESSAGES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };

        case ACTIONS.SEND_CHAT_MESSAGE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ACTIONS.SEND_CHAT_MESSAGE_RESPONSE:

            return {
                ...state,
                isLoading: false,
                messages: action.messages
            };

        case ACTIONS.SEND_CHAT_MESSAGE_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.message
            };


        default: return state;
    }
}
