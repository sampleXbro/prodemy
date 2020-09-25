import {put, select} from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getSoftwareSaga(action) {
    yield put({ type: actions.GET_SOFTWARE_REQUEST });

    try {
        const { data } = yield api.getSoftwareTypes();
        yield put({
            type: actions.GET_SOFTWARE_RESPONSE,
            software: data,
        });
    } catch (e) {
        yield put({type: actions.GET_SOFTWARE_ERROR, message: 'Что- то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* addSoftwareSaga(action) {
    yield put({ type: actions.ADD_SOFTWARE_REQUEST });

    try {
        const { data } = yield api.addSoftware(action.data);

        const {softwareReducer} = yield select();
        const software = [...softwareReducer.software, data];

        yield put({
            type: actions.ADD_SOFTWARE_RESPONSE,
            software: software,
        });
    } catch (e) {
        yield put({type: actions.ADD_SOFTWARE_ERROR, message: 'Что- то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateSoftwareSaga(action) {
    yield put({ type: actions.UPDATE_SOFTWARE_REQUEST });

    try {
        const { data } = yield api.updateSoftware(action.id, action.data);

        const {softwareReducer} = yield select();
        const software = [...softwareReducer.software].map((soft) => {
            if(soft.id === data.id) return data;
            return soft;
        });

        yield put({
            type: actions.UPDATE_SOFTWARE_RESPONSE,
            software: software,
        });
    } catch (e) {
        yield put({type: actions.GET_SOFTWARE_ERROR, message: 'Что- то пошло не так. Попробуйте ещё раз.'})
    }
}

