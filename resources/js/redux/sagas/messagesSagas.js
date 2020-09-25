import { put, select } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getChatMessagesSaga(action) {
    yield put({ type: actions.GET_CHAT_MESSAGES_REQUEST });

    try {

        const { data } = yield api.getChatMessages();

        yield put({
            type: actions.GET_CHAT_MESSAGES_RESPONSE,
            messages: data,
        });
    } catch (e) {
        yield put({type: actions.GET_CHAT_MESSAGES_ERROR, message: 'Ошибка при получении сообщений . Попробуйте ещё раз.'})
    }
}

export function* sendChatMessageSaga(action) {
    yield put({ type: actions.SEND_CHAT_MESSAGE_REQUEST });

    try {
        const { data } = yield api.sendChatMessage({message: action.message});
        const {chatReducer} = yield select();
        const messages = [data, ...chatReducer.messages];

        yield put({
            type: actions.SEND_CHAT_MESSAGE_RESPONSE,
            messages: messages,
        });
    } catch (e) {
        yield put({type: actions.SEND_CHAT_MESSAGE_ERROR, message: 'Ошибка при отправке сообщения. Попробуйте ещё раз.'})
    }
}

export function* getPrivateMessagesSaga(action) {
    yield put({ type: actions.GET_PRIVATE_MESSAGES_REQUEST });

    try {

        const { data } = yield api.getPrivateMessages();

        yield put({
            type: actions.GET_PRIVATE_MESSAGES_RESPONSE,
            messages: data,
        });
    } catch (e) {
        yield put({type: actions.GET_PRIVATE_MESSAGES_ERROR, message: 'Ошибка при получении сообщений. Попробуйте ещё раз.'})
    }
}

export function* sendPrivateMessageSaga(action) {
    yield put({ type: actions.SEND_PRIVATE_MESSAGE_REQUEST });

    try {
        const { data } = yield api.sendPrivateMessage({message: action.message, recipient: action.recipient});
        const {privateMessagesReducer} = yield select();
        const messages = [data, ...privateMessagesReducer.messages];

        yield put({
            type: actions.SEND_PRIVATE_MESSAGE_RESPONSE,
            messages: messages,
        });
    } catch (e) {
        yield put({type: actions.SEND_PRIVATE_MESSAGE_ERROR, message: 'Ошибка при отправке сообщения. Попробуйте ещё раз.'})
    }
}

export function* updatePrivateMessageSaga(action) {
    yield put({ type: actions.UPDATE_PRIVATE_MESSAGE_REQUEST });

    try {
        const { data } = yield api.updatePrivateMessage(action.id, action.data);

        const {privateMessagesReducer} = yield select();
        const messages = [...privateMessagesReducer.messages].map(message => {
            if (message.id === data.id) return data;
            return message;
        });

        yield put({
            type: actions.UPDATE_PRIVATE_MESSAGE_RESPONSE,
            messages: messages,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_PRIVATE_MESSAGE_ERROR, message: 'Ошибка при отправке сообщения. Попробуйте ещё раз.'})
    }
}
