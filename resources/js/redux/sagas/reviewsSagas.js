import * as api from '../../api/api';
import actions from '../actions/actionTypes';
import {put, select} from 'redux-saga/effects';


export function* getAllReviewsSaga(action) {
    yield put({ type: actions.GET_ALL_REVIEWS_REQUEST });
    try {

        const { data } = yield api.getAllReviews();

        yield put({
            type: actions.GET_ALL_REVIEWS_RESPONSE,
            reviews: data,
        });
    } catch (e) {
        yield put({type: actions.GET_ALL_REVIEWS_ERROR, message: 'Ошибка при получении отзывов. Попробуйте ещё раз.'})
    }
}

export function* sendReviewSaga(action) {
    yield put({ type: actions.SEND_REVIEW_REQUEST });
    try {
        const { data } = yield api.sendReview(action.review);
        const {reviewsReducer} = yield select();
        const reviews = [...reviewsReducer.reviews, data];

        yield put({
            type: actions.SEND_REVIEW_RESPONSE,
            reviews: reviews,
        });
    } catch (e) {
        yield put({type: actions.SEND_REVIEW_ERROR, message: 'Ошибка при отправке отзыва. Попробуйте ещё раз.'})
    }
}

export function* updateReviewSaga(action) {
    yield put({ type: actions.UPDATE_REVIEW_REQUEST });
    try {
        const { data } = yield api.updateReview(action.id, action.review);
        const {reviewsReducer} = yield select();
        const reviews = [...reviewsReducer.reviews].map(review => {
            if(review.id === data.id) return data;
            return review;
        });

        yield put({
            type: actions.UPDATE_REVIEW_RESPONSE,
            reviews: reviews,
        });
    } catch (e) {
        yield put({type: actions.UPDATE_REVIEW_ERROR, message: 'Ошибка при обновлении отзыва. Попробуйте ещё раз.'})
    }
}

export function* deleteReview(action) {
    yield put({ type: actions.DELETE_REVIEW_REQUEST });
    try {

        const { data } = yield api.deleteReview(action.id);
        const {reviewsReducer} = yield select();
        const reviews = [...reviewsReducer.reviews].filter(review => review.id !== data.id);

        yield put({
            type: actions.DELETE_REVIEW_RESPONSE,
            reviews
        });
    } catch (e) {
        yield put({type: actions.DELETE_REVIEW_ERROR, message: 'Ошибка при удалении отзыва. Попробуйте ещё раз.'})
    }
}

