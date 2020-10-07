import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {FlatButton} from "../../components/buttons/FlatButton";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {deleteComment, updateComment} from "../../redux/actions/actionCreators";

export function EditComment({comment, setModal}) {
    const {users, isLoading} = useSelector(store => store.userReducer);
    const {posts} = useSelector(store => store.postsReducer);
    const [localState, setLocalState] = useState({
        comment: '',
        post_id: '',
        author_id: '',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_USERS});
        dispatch({type: actionTypes.GET_ALL_POSTS});
    }, []);

    if(isLoading) return <Preloader/>;

    const handleSaveClick = () => {
        dispatch(updateComment(comment.id, localState));
        setModal('')
    };

    const handleDeleteClick = () => {
        dispatch(deleteComment(comment.id));
        setModal('')
    };
    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                Автор:
                <select
                    defaultValue={comment.author_id}
                    onChange={e => setLocalState({...localState, author_id: e.target.value})}>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
                Коммент:
                <textarea
                    style={{minHeight: '200px'}}
                    defaultValue={comment.comment}
                    onChange={e => setLocalState({...localState, comment: e.target.value})}
                />
                К посту:
                <select
                    defaultValue={comment.post_id}
                    onChange={e => setLocalState({...localState, post_id: e.target.value})}>
                    {posts.map(post => <option key={post.id} value={post.id}>{post.title}</option>)}
                </select>
                <div className='d-flex justify-content-between align-items-center h-100'>
                    <FlatButton name='Удалить комментарий' width='160px' height='40px' className='m-auto' onClick={handleDeleteClick} colorInactive='#e3342f'/>
                    <FlatButton name='Сохранить' width='160px' height='40px' className='m-auto' onClick={handleSaveClick}/>
                </div>
            </div>

        </div>
    )
}

EditComment.propTypes = {
    comment: PropTypes.object,
    setModal: PropTypes.func
};
