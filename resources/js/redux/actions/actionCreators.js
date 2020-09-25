import ACTIONS from './actionTypes';

export const getUserById = id => ({
    type: ACTIONS.GET_USER_BY_ID,
    id,
});

export const updateUser = (id, data) => ({
    type: ACTIONS.UPDATE_USER,
    id,
    data
});

export const getCourseById = id => ({
    type: ACTIONS.GET_COURSE_BY_ID,
    id,
});

export const addCourse = data => ({
    type: ACTIONS.ADD_COURSE,
    data,
});

export const updateCourse = (id, data) => ({
    type: ACTIONS.UPDATE_COURSE,
    id,
    data
});

export const sendReview = (review) => ({
    type: ACTIONS.SEND_REVIEW,
    review,
});

export const updateReview = (id, review) => ({
    type: ACTIONS.UPDATE_REVIEW,
    id,
    review,
});

export const deleteReview = id => ({
    type: ACTIONS.DELETE_REVIEW,
    id,
});

export const createStudiedCourse = data => ({
    type: ACTIONS.CREATE_STUDIED_COURSE,
    data,
});

export const updateStudiedCourse = (id, data) => ({
    type: ACTIONS.UPDATE_STUDIED_COURSE,
    id,
    data,
});

export const deleteStudiedCourse = id => ({
    type: ACTIONS.DELETE_STUDIED_COURSE,
    id,
});

export const sendChatMessage = message => ({
    type: ACTIONS.SEND_CHAT_MESSAGE,
    message,
});

export const sendPrivateMessage = (message, recipientId) => ({
    type: ACTIONS.SEND_PRIVATE_MESSAGE,
    recipient: recipientId,
    message,
});

export const getPostById = (id) => ({
    type: ACTIONS.GET_POST_BY_ID,
    id
});

export const addPost = (post) => ({
    type: ACTIONS.ADD_POST,
    post
});

export const updatePost = (id, post) => ({
    type: ACTIONS.UPDATE_POST,
    id,
    post
});

export const deletePost = (id) => ({
    type: ACTIONS.DELETE_POST,
    id
});

export const likePost = (id) => ({
    type: ACTIONS.LIKE_POST,
    id
});

export const dislikePost = (id) => ({
    type: ACTIONS.DISLIKE_POST,
    id
});

export const getCommentsByPostId = (id) => ({
    type: ACTIONS.GET_COMMENTS_BY_POST_ID,
    id
});

export const addComment = (comment) => ({
    type: ACTIONS.ADD_COMMENT,
    comment
});

export const updateComment = (id, comment) => ({
    type: ACTIONS.UPDATE_COMMENT,
    id,
    comment
});

export const deleteComment = (id) => ({
    type: ACTIONS.DELETE_COMMENT,
    id
});

export const addSoftware = (data) => ({
    type: ACTIONS.ADD_SOFTWARE,
    data
});

export const updateSoftware = (id, data) => ({
    type: ACTIONS.UPDATE_SOFTWARE,
    id,
    data
});

export const addRole = (data) => ({
    type: ACTIONS.ADD_ROLE,
    data
});

export const updateRole = (id, data) => ({
    type: ACTIONS.UPDATE_ROLE,
    id,
    data
});

export const addUserLevel = (data) => ({
    type: ACTIONS.ADD_USER_LEVEL,
    data
});

export const updateUserLevel = (id, data) => ({
    type: ACTIONS.UPDATE_USER_LEVEL,
    id,
    data
});

export const addCourseLevel = (data) => ({
    type: ACTIONS.ADD_COURSE_LEVEL,
    data
});

export const updateCourseLevel = (id, data) => ({
    type: ACTIONS.UPDATE_COURSE_LEVEL,
    id,
    data
});

export const updatePrivateMessage = (id, data) => ({
    type: ACTIONS.UPDATE_PRIVATE_MESSAGE,
    id,
    data
});
