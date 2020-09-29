import * as api from '../../api/api';
import actions from '../actions/actionTypes';
import { put, select } from 'redux-saga/effects';

export function* getAllPostsSaga(action) {
    yield put({ type: actions.GET_ALL_POSTS_REQUEST });

    try {
        const { data } = yield api.getAllPosts();
        yield put({
            type: actions.GET_ALL_POSTS_RESPONSE,
            posts: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_POSTS_ERROR, message: 'Ошибка при получении постов. Попробуйте ещё раз.'})
    }
}

export function* getPostByIdSaga(action) {
    yield put({ type: actions.GET_POST_BY_ID_REQUEST });
    try {

        const { data } = yield api.getPostById(action.id);

        yield put({
            type: actions.GET_POST_BY_ID_RESPONSE,
            post: data,
        });
    } catch (e) {
        yield put({type: actions.GET_POST_BY_ID_ERROR, message: 'Ошибка при получении поста. Попробуйте ещё раз.'})
    }
}

export function* addPostSaga(action) {
    yield put({ type: actions.ADD_POST_REQUEST });
    try {
        const { data } = yield api.addPost(action.post);
        const {postsReducer} = yield select();
        const posts = [...postsReducer.posts, data];

        yield put({
            type: actions.ADD_POST_RESPONSE,
            posts: posts,
        });
    } catch (e) {
        yield put({type: actions.ADD_POST_ERROR, message: 'Ошибка при добавлении поста. Попробуйте ещё раз.'})
    }
}

export function* updatePostSaga(action) {
    yield put({ type: actions.UPDATE_POST_REQUEST });
    try {
        const { data } = yield api.updatePost(action.id, action.post);
        const {postsReducer} = yield select();
        const posts = [...postsReducer.posts].map((post) => {
            if(post.id === data.id)  return data;
            return post;
        });

        yield put({
            type: actions.UPDATE_POST_RESPONSE,
            posts: posts,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_POST_ERROR, message: 'Ошибка при обновлении поста. Попробуйте ещё раз.'})
    }
}

export function* deletePostSaga(action) {
    yield put({ type: actions.DELETE_POST_REQUEST });
    try {

        const { data } = yield api.deletePost(action.id);
        const {postsReducer} = yield select();
        const posts = [...postsReducer.posts].filter((post) => (post.id !== data.id));

        yield put({
            type: actions.DELETE_POST_RESPONSE,
            posts: posts,
        });
    } catch (e) {
        yield put({type: actions.DELETE_POST_ERROR, message: 'Ошибка при удалении поста. Попробуйте ещё раз.'})
    }
}

export function* likePostSaga(action) {
    yield put({ type: actions.LIKE_POST_REQUEST });
    try {

        const { data } = yield api.likePost(action.id);

        yield put({
            type: actions.LIKE_POST_RESPONSE,
            post: data,
        });
    } catch (e) {
        yield put({type: actions.LIKE_POST_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}

export function* dislikePostSaga(action) {
    yield put({ type: actions.DISLIKE_POST_REQUEST });
    try {

        const { data } = yield api.dislikePost(action.id);

        yield put({
            type: actions.DISLIKE_POST_RESPONSE,
            post: data,
        });
    } catch (e) {
        yield put({type: actions.DISLIKE_POST_ERROR, message: 'Что-то пошло не так. Попробуйте ещё раз.'})
    }
}
