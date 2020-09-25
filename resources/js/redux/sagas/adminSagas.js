import { put } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getAdminInitial(action) {
    yield put({ type: actions.GET_ADMIN_INITIAL_REQUEST });

    try {
        const { data } = yield api.getAdminInitial();

        yield put({
            type: actions.GET_ADMIN_INITIAL_RESPONSE,
            data
        });
    } catch (e) {
        yield put({type: actions.GET_ADMIN_INITIAL_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
