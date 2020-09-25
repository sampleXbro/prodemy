import { put, select, all, call } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getUserById(action) {
    yield put({ type: actions.GET_USER_BY_ID_REQUEST });

    try {

        const {data} = yield api.getUserById(action.id);

        yield put({
            type: actions.GET_USER_BY_ID_RESPONSE,
            user: data,
        });
    } catch (e) {
        yield put({type: actions.GET_USER_BY_ID_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateUser(action) {
    yield put({ type: actions.UPDATE_USER_REQUEST });

    try {
        const { data } = yield api.updateUser(action.id, action.data);

        const {userReducer} = yield select();
        const current = (userReducer.currentUser.id === data.id) ? data : userReducer.currentUser;
        const users = [...userReducer.users].map((user) => {
            if(user.id === data.id) return data;
            return user;
        });

        yield put({
            type: actions.UPDATE_USER_RESPONSE,
            users: users,
            currentUser: current
        });
    } catch (e) {
        yield put({type: actions.UPDATE_USER_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* getCurrentUserSaga(action) {
    yield put({ type: actions.GET_CURRENT_USER_REQUEST });

    try {
        const { data } = yield api.getCurrentUser();

        yield put({
            type: actions.GET_CURRENT_USER_RESPONSE,
            currentUser: data,
        });
    } catch (e) {
        yield put({type: actions.GET_CURRENT_USER_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* getAllUsersSaga(action) {
    yield put({ type: actions.GET_ALL_USERS_REQUEST });

    try {
        const { data } = yield api.getAllUsers();
        yield put({
            type: actions.GET_ALL_USERS_RESPONSE,
            users: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_USERS_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* createStudiedCourseSaga(action) {
    yield put({ type: actions.CREATE_STUDIED_COURSE_REQUEST });

    try {
        const { data } = yield api.createStudiedCourse(action.data);

        yield put({
            type: actions.CREATE_STUDIED_COURSE_RESPONSE,
            data,
        });
    } catch (e) {
        yield put({type: actions.CREATE_STUDIED_COURSE_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateStudiedCourseSaga(action) {
    yield put({ type: actions.UPDATE_STUDIED_COURSE_REQUEST });

    try {
        const { data } = yield api.updateStudiedCourse(action.id, action.data);

        yield put({
            type: actions.UPDATE_STUDIED_COURSE_RESPONSE,
            data,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_STUDIED_COURSE_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* deleteStudiedCourseSaga(action) {
    yield put({ type: actions.DELETE_STUDIED_COURSE_REQUEST });

    try {
        const { data } = yield api.deleteStudiedCourse(action.id);

        yield put({
            type: actions.DELETE_STUDIED_COURSE_RESPONSE,
            data,
        });
    } catch (e) {
        yield put({type: actions.DELETE_STUDIED_COURSE_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
