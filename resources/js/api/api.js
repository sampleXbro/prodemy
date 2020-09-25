import axios from 'axios'

export const getCoursesWithReviews = () => axios.get('/api/courses');
export const getCourseById = (id) => axios.get(`/api/course/${id}`);
export const addCourse = (data) => axios.post('/api/course', data);
export const updateCourse = (id, data) => axios.put(`/api/course/${id}`, data);

export const getSoftwareTypes = () => axios.get('/api/software');
export const addSoftware = (data) => axios.post('/api/software', data);
export const updateSoftware = (id, data) => axios.put(`/api/software/${id}`, data);

export const getUserById = (id) => axios.get(`/api/user/${id}`);
export const updateUser = (id, data) => axios.put(`/api/user/${id}`, data);
export const getCurrentUser = () => axios.get('/api/current-user');
export const getAllUsers = () => axios.get('/api/users');

export const getAllReviews = () => axios.get('/api/reviews');
export const sendReview = (review) => axios.post('/api/review', review);
export const updateReview = (id, data) => axios.put(`/api/review/${id}`, data);
export const deleteReview = (id) => axios.delete(`/api/review/${id}`);

export const createStudiedCourse = (data) => axios.post('/api/studied-course', data);
export const updateStudiedCourse = (id, data) => axios.put(`/api/studied-course/${id}`, data);
export const deleteStudiedCourse = (id) => axios.delete(`/api/studied-course/${id}`);

export const sendNoteViaMail = (data) => axios.post('/api/send-note-via-mail', data);

export const sendChatMessage = (message) => axios.post('/api/message', message);
export const getChatMessages = () => axios.get('/api/messages');
export const sendPrivateMessage = (data) => axios.post('/api/private-message', data);
export const getPrivateMessages = () => axios.get('/api/private-messages');
export const updatePrivateMessage = (id, data) => axios.put(`/api/private-message/${id}`, data);

export const getAllPosts = () => axios.get('/api/posts');
export const getPostById = (id) => axios.get(`/api/post/${id}`);
export const addPost = (data) => axios.post('/api/post', data);
export const updatePost = (id, data) => axios.put(`/api/post/${id}`, data);
export const deletePost = (id) => axios.delete(`/api/post/${id}`);

export const getPostsTypes = () => axios.get('/api/posts-types');

export const likePost = (id) => axios.get(`/api/like-post/${id}`);
export const dislikePost = (id) => axios.get(`/api/dislike-post/${id}`);

export const getAllComments = () => axios.get('/api/comments');
export const getCommentsByPostId = (id) => axios.get(`/api/comments/${id}`);
export const addComment = (data) => axios.post('/api/comment', data);
export const updateComment = (id, data) => axios.put(`/api/comment/${id}`, data);
export const deleteComment = (id) => axios.delete(`/api/comment/${id}`);

export const getAdminInitial = () => axios.get(`/api/admin-initial`);

export const getAllRoles = () => axios.get('/api/roles');
export const addRole = (data) => axios.post('/api/role', data);
export const updateRole = (id, data) => axios.put(`/api/role/${id}`, data);

export const getAllUsersLevels = () => axios.get('/api/users-levels');
export const addUserLevel = (data) => axios.post('/api/user-level', data);
export const updateUserLevel = (id, data) => axios.put(`/api/user-level/${id}`, data);

export const getAllCoursesLevels = () => axios.get(`/api/courses-levels`);
export const addCourseLevel = (data) => axios.post('/api/course-level', data);
export const updateCourseLevel = (id, data) => axios.put(`/api/course-level/${id}`, data);
