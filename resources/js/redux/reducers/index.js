import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import userReducer from './userReducer';
import reviewsReducer from './reviewsReducer';
import chatReducer from './chatReducer';
import privateMessagesReducer from './privateMessagesReducer';
import postsReducer from './postsReducer';
import softwareReducer from './softwareReducer';
import commentsReducer from './commentsReducer';
import adminReducer from './adminReducer';
import rolesReducer from './rolesReducer';
import usersLevelsReducer from './usersLevelsReducer';
import coursesLevelsReducer from './coursesLevelsReducer';
import postsTypesReducer from './postsTypesReducer';


const appReducer = combineReducers({
    coursesReducer,
    userReducer,
    reviewsReducer,
    chatReducer,
    privateMessagesReducer,
    postsReducer,
    softwareReducer,
    commentsReducer,
    adminReducer,
    rolesReducer,
    usersLevelsReducer,
    coursesLevelsReducer,
    postsTypesReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
