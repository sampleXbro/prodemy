import { put, select } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as api from '../../api/api';


export function* getAllCommentsSaga(action) {
    yield put({ type: actions.GET_ALL_COMMENTS_REQUEST });

    try {

        const { data } = yield api.getAllComments();

        yield put({
            type: actions.GET_ALL_COMMENTS_RESPONSE,
            comments: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_COMMENTS_ERROR, message: 'Ошибка при получении комментариев. Попробуйте ещё раз.'})
    }
}

export function* getCommentsByPostIdSaga(action) {
    yield put({ type: actions.GET_COMMENTS_BY_POST_ID_REQUEST });

    try {

        const { data } = yield api.getCommentsByPostId(action.id);

        yield put({
            type: actions.GET_COMMENTS_BY_POST_ID_RESPONSE,
            comments: data,
        });
    } catch (e) {
        yield put({type: actions.GET_COMMENTS_BY_POST_ID_ERROR, message: 'Ошибка при получении комментариев. Попробуйте ещё раз.'})
    }
}

export function* addCommentSaga(action) {
    yield put({ type: actions.ADD_COMMENT_REQUEST });

    try {
        const { data } = yield api.addComment(action.comment);
        const {commentsReducer} = yield select();
        const comments = [...commentsReducer.comments, data];

        yield put({
            type: actions.ADD_COMMENT_RESPONSE,
            comments: comments,
        });
    } catch (e) {
        yield put({type: actions.ADD_COMMENT_ERROR, message: 'Ошибка при добавлении комментария. Попробуйте ещё раз.'})
    }
}

export function* updateCommentSaga(action) {
    yield put({ type: actions.UPDATE_COMMENT_REQUEST });

    try {
        const { data } = yield api.updateComment(action.id, action.comment);
        const {commentsReducer} = yield select();
        const comments = yield [...commentsReducer.comments].map((comment) => {
            if(comment.id === data.id) return data;
            return comment;
        });

        yield put({
            type: actions.UPDATE_COMMENT_RESPONSE,
            comments: comments,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_COMMENT_ERROR, message: 'Ошибка при обновлении комментария. Попробуйте ещё раз.'})
    }
}

export function* deleteCommentSaga(action) {
    yield put({ type: actions.DELETE_COMMENT_REQUEST });

    try {
        const { data } = yield api.deleteComment(action.id);
        const {commentsReducer} = yield select();
        const comments = yield [...commentsReducer.comments].filter((comment) => (comment.id !== data.id));

        yield put({
            type: actions.DELETE_COMMENT_RESPONSE,
            comments: comments,
        });
    } catch (e) {
        yield put({type: actions.DELETE_COMMENT_ERROR, message: 'Ошибка при удалении комментария. Попробуйте ещё раз.'})
    }
}
