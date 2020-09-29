import * as api from '../../api/api';
import actions from '../actions/actionTypes';
import { put, select } from 'redux-saga/effects';


export function* getAllUsersLevels(action) {

    yield put({ type: actions.GET_ALL_USERS_LEVELS_REQUEST });

    try {
        const { data } = yield api.getAllUsersLevels();

        yield put({
            type: actions.GET_ALL_USERS_LEVELS_RESPONSE,
            levels: data
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_USERS_LEVELS_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
export function* addUserLevelSaga(action) {

    yield put({ type: actions.ADD_USER_LEVEL_REQUEST });

    try {
        const { data } = yield api.addUserLevel(action.data);

        const {usersLevelsReducer} = yield select();
        const levels = [...usersLevelsReducer.levels, data];

        yield put({
            type: actions.ADD_USER_LEVEL_RESPONSE,
            levels: levels
        });
    } catch (e) {
        yield put({type: actions.ADD_USER_LEVEL_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateUserLevelSaga(action) {

    yield put({ type: actions.UPDATE_USER_LEVEL_REQUEST });

    try {
        const { data } = yield api.updateUserLevel(action.id, action.data);

        const {usersLevelsReducer} = yield select();
        const levels = [...usersLevelsReducer.levels].map((level) => {
            if(level.id === data.id) return data;
            return level;
        });

        yield put({
            type: actions.UPDATE_USER_LEVEL_RESPONSE,
            levels: levels
        });
    } catch (e) {
        yield put({type: actions.UPDATE_USER_LEVEL_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
