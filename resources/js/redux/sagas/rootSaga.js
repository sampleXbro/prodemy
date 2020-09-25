import { takeLatest } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import * as coursesSagas from './coursesSagas';
import * as userSagas from './userSagas';
import * as reviewsSagas from './reviewsSagas';
import * as messagesSagas from './messagesSagas';
import * as postsSagas from './postsSagas';
import * as commentsSagas from './commentsSagas';
import * as adminSagas from './adminSagas';
import * as rolesSagas from './rolesSagas';
import * as usersLevelsSagas from './usersLevelsSagas';
import * as coursesLevelsSagas from './coursesLevelsSagas';
import * as softwareSagas from './softwareSagas';
import * as postsTypesSagas from './postsTypesSagas';


function* rootSaga() {
    yield takeLatest(actions.GET_ALL_COURSES, coursesSagas.getAllCoursesSaga);
    yield takeLatest(actions.GET_COURSE_BY_ID, coursesSagas.getCourseByIdSaga);
    yield takeLatest(actions.ADD_COURSE, coursesSagas.addCourse);
    yield takeLatest(actions.UPDATE_COURSE, coursesSagas.updateCourse);

    yield takeLatest(actions.GET_SOFTWARE, softwareSagas.getSoftwareSaga);
    yield takeLatest(actions.ADD_SOFTWARE, softwareSagas.addSoftwareSaga);
    yield takeLatest(actions.UPDATE_SOFTWARE, softwareSagas.updateSoftwareSaga);

    yield takeLatest(actions.GET_CURRENT_USER, userSagas.getCurrentUserSaga);
    yield takeLatest(actions.GET_ALL_USERS, userSagas.getAllUsersSaga);
    yield takeLatest(actions.GET_USER_BY_ID, userSagas.getUserById);
    yield takeLatest(actions.UPDATE_USER, userSagas.updateUser);

    yield takeLatest(actions.SEND_REVIEW, reviewsSagas.sendReviewSaga);
    yield takeLatest(actions.UPDATE_REVIEW, reviewsSagas.updateReviewSaga);
    yield takeLatest(actions.DELETE_REVIEW, reviewsSagas.deleteReview);
    yield takeLatest(actions.GET_ALL_REVIEWS, reviewsSagas.getAllReviewsSaga);

    yield takeLatest(actions.CREATE_STUDIED_COURSE, userSagas.createStudiedCourseSaga);
    yield takeLatest(actions.UPDATE_STUDIED_COURSE, userSagas.updateStudiedCourseSaga);
    yield takeLatest(actions.DELETE_STUDIED_COURSE, userSagas.deleteStudiedCourseSaga);

    yield takeLatest(actions.GET_CHAT_MESSAGES, messagesSagas.getChatMessagesSaga);
    yield takeLatest(actions.SEND_CHAT_MESSAGE, messagesSagas.sendChatMessageSaga);

    yield takeLatest(actions.GET_PRIVATE_MESSAGES, messagesSagas.getPrivateMessagesSaga);
    yield takeLatest(actions.SEND_PRIVATE_MESSAGE, messagesSagas.sendPrivateMessageSaga);
    yield takeLatest(actions.UPDATE_PRIVATE_MESSAGE, messagesSagas.updatePrivateMessageSaga);

    yield takeLatest(actions.GET_ALL_POSTS, postsSagas.getAllPostsSaga);
    yield takeLatest(actions.GET_POST_BY_ID, postsSagas.getPostByIdSaga);
    yield takeLatest(actions.ADD_POST, postsSagas.addPostSaga);
    yield takeLatest(actions.UPDATE_POST, postsSagas.updatePostSaga);
    yield takeLatest(actions.DELETE_POST, postsSagas.deletePostSaga);

    yield takeLatest(actions.LIKE_POST, postsSagas.likePostSaga);
    yield takeLatest(actions.DISLIKE_POST, postsSagas.dislikePostSaga);

    yield takeLatest(actions.GET_ALL_COMMENTS, commentsSagas.getAllCommentsSaga);
    yield takeLatest(actions.GET_COMMENTS_BY_POST_ID, commentsSagas.getCommentsByPostIdSaga);
    yield takeLatest(actions.ADD_COMMENT, commentsSagas.addCommentSaga);
    yield takeLatest(actions.UPDATE_COMMENT, commentsSagas.updateCommentSaga);
    yield takeLatest(actions.DELETE_COMMENT, commentsSagas.deleteCommentSaga);

    yield takeLatest(actions.GET_ADMIN_INITIAL, adminSagas.getAdminInitial);

    yield takeLatest(actions.GET_ALL_ROLES, rolesSagas.getAllRoles);
    yield takeLatest(actions.ADD_ROLE, rolesSagas.addRoleSaga);
    yield takeLatest(actions.UPDATE_ROLE, rolesSagas.updateRoleSaga);

    yield takeLatest(actions.GET_ALL_USERS_LEVELS, usersLevelsSagas.getAllUsersLevels);
    yield takeLatest(actions.ADD_USER_LEVEL, usersLevelsSagas.addUserLevelSaga);
    yield takeLatest(actions.UPDATE_USER_LEVEL, usersLevelsSagas.updateUserLevelSaga);

    yield takeLatest(actions.GET_ALL_COURSES_LEVELS, coursesLevelsSagas.getCoursesLevels);
    yield takeLatest(actions.ADD_COURSE_LEVEL, coursesLevelsSagas.addCoursesLevelsSaga);
    yield takeLatest(actions.UPDATE_COURSE_LEVEL, coursesLevelsSagas.updateCoursesLevelsSaga);

    yield takeLatest(actions.GET_POSTS_TYPES, postsTypesSagas.getPostsTypesSaga);
}

export default rootSaga;
