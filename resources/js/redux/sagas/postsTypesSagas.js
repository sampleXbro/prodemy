import { put } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getPostsTypesSaga(action) {

    yield put({ type: actions.GET_POSTS_TYPES_REQUEST });

    try {
        const { data } = yield api.getPostsTypes();

        yield put({
            type: actions.GET_POSTS_TYPES_RESPONSE,
            types: data
        });
    } catch (e) {
        yield put({type: actions.GET_POSTS_TYPES_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
