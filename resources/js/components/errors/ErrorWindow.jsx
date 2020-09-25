import React from 'react'
import {Title} from "../titles/Title";
import {history} from '../../utils/history'
import {useSelector} from "react-redux";

export const  ErrorWindow = () => {
    const errors = useSelector(store => [
        store.commentsReducer.error,
        store.coursesReducer.error,
        store.postsReducer.error,
        store.privateMessagesReducer.error,
        store.reviewsReducer.error,
        store.softwareReducer.error,
        store.userReducer.error,
        store.chatReducer.error,
        store.adminReducer.error,
        store.coursesLevelsReducer.error,
        store.rolesReducer.error,
        store.softwareReducer.error,
        store.usersLevelsReducer.error,
        store.postsTypesReducer.error,
    ]);

    if(!errors.some(error => !!error)) return null;

    const error = errors.find((error) => !!error);

    const handleReload = () => {
        history.go(0)
    };

    return <div className='error-window-container'>
        <div className='error-window-small'>
            <h3 className="fas fa-exclamation-triangle text-danger"/>
            <Title color='#e3342f' text={error} margin='0 15px 15px 15px' textAlign='center'/>
            <h3 className="fas fa-sync-alt text-success" style={{cursor: 'pointer'}} onClick={handleReload}/>
        </div>
    </div>
};
