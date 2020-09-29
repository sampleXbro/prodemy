import * as api from '../../api/api';
import actions from '../actions/actionTypes';
import {put, select} from 'redux-saga/effects';


export function* getAllCoursesSaga(action) {
    yield put({ type: actions.GET_ALL_COURSES_REQUEST });

    try {
        const { data } = yield api.getCoursesWithReviews();
        yield put({
            type: actions.GET_ALL_COURSES_RESPONSE,
            courses: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_COURSES_ERROR, message: 'Ошибка при получении курсов. Попробуйте ещё раз.'})
    }
}

export function* getCourseByIdSaga(action) {
    yield put({ type: actions.GET_COURSE_BY_ID_REQUEST });

    try {
        const { data } = yield api.getCourseById(action.id);
        yield put({
            type: actions.GET_COURSE_BY_ID_RESPONSE,
            course: data,
        });
    } catch (e) {
        yield put({type: actions.GET_COURSE_BY_ID_ERROR, message: 'Ошибка при получении курса. Попробуйте ещё раз.'})
    }
}

export function* addCourse(action) {
    yield put({ type: actions.ADD_COURSE_REQUEST});

    try {
        const { data } = yield api.addCourse(action.data);

        const {coursesReducer} = yield select();
        const courses = [...coursesReducer.courses, data];

        yield put({
            type: actions.ADD_COURSE_RESPONSE,
            courses: courses,
        });
    } catch (e) {
        yield put({type: actions.ADD_COURSE_ERROR, message: 'Ошибка при добавлении курса. Попробуйте ещё раз.'})
    }
}

export function* updateCourse(action) {
    yield put({ type: actions.UPDATE_COURSE_REQUEST });

    try {
        const { data } = yield api.updateCourse(action.id, action.data);

        const {coursesReducer} = yield select();
        const courses = [...coursesReducer.courses].map((course) => {
            if(course.id === data.id) return data;
            return course;
        });

        yield put({
            type: actions.UPDATE_COURSE_RESPONSE,
            courses: courses,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_COURSE_ERROR, message: 'Ошибка при обновлении курса. Попробуйте ещё раз.'})
    }
}



