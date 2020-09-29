import * as api from '../../api/api';
import actions from '../actions/actionTypes';
import { put, select } from 'redux-saga/effects';


export function* getAllRoles(action) {
    yield put({ type: actions.GET_ALL_ROLES_REQUEST });

    try {
        const { data } = yield api.getAllRoles();

        yield put({
            type: actions.GET_ALL_ROLES_RESPONSE,
            roles: data
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_ROLES_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* addRoleSaga(action) {
    yield put({ type: actions.ADD_ROLE_REQUEST });

    try {
        const { data } = yield api.addRole(action.data);

        const {rolesReducer} = yield select();
        const roles = [...rolesReducer.roles, data];

        yield put({
            type: actions.ADD_ROLE_RESPONSE,
            roles: roles
        });
    } catch (e) {
        yield put({type: actions.ADD_ROLE_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateRoleSaga(action) {
    yield put({ type: actions.UPDATE_ROLE_REQUEST });

    try {
        const { data } = yield api.updateRole(action.id, action.data);

        const {rolesReducer} = yield select();
        const roles = [...rolesReducer.roles].map(role => {
            if(role.id === data.id) return data;
            return role;
        });

        yield put({
            type: actions.UPDATE_ROLE_RESPONSE,
            roles: roles
        });
    } catch (e) {
        yield put({type: actions.UPDATE_ROLE_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
