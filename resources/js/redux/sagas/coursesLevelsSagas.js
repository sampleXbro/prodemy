import { put, select } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getCoursesLevels(action) {
    yield put({ type: actions.GET_ALL_COURSES_LEVELS_REQUEST });

    try {
        const { data } = yield api.getAllCoursesLevels();
        yield put({
            type: actions.GET_ALL_COURSES_LEVELS_RESPONSE,
            levels: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_COURSES_LEVELS_ERROR, message: 'Что- то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* addCoursesLevelsSaga(action) {

    yield put({ type: actions.ADD_COURSE_LEVEL_REQUEST });

    try {
        const { data } = yield api.addCourseLevel(action.data);

        const {coursesLevelsReducer} = yield select();
        const levels = [...coursesLevelsReducer.levels, data];

        yield put({
            type: actions.ADD_COURSE_LEVEL_RESPONSE,
            levels: levels
        });
    } catch (e) {
        yield put({type: actions.ADD_COURSE_LEVEL_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* updateCoursesLevelsSaga(action) {

    yield put({ type: actions.UPDATE_COURSE_LEVEL_REQUEST });

    try {
        const { data } = yield api.updateCourseLevel(action.id, action.data);

        const {coursesLevelsReducer} = yield select();
        const levels = [...coursesLevelsReducer.levels].map((level) => {
            if(level.id === data.id) return data;
            return level;
        });

        yield put({
            type: actions.UPDATE_COURSE_LEVEL_RESPONSE,
            levels: levels
        });
    } catch (e) {
        yield put({type: actions.UPDATE_COURSE_LEVEL_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
