import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addComment} from "../../redux/actions/actionCreators";

export function WriteComment({user, currentPost}) {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const newComment = {
        comment: comment,
        post_id: currentPost.id,
        author_id: user.id
    };

    function handleReviewChange(e) {
        setComment(e.target.value);
        comment.length > 1 && setError('')
    }

    function handleSendReview(e) {
        e.preventDefault();
        comment.length < 1 && setError('Коммент слишком короткий');

        if(comment.length >= 1){
            dispatch(addComment(newComment));
            setComment('');
        }
    }

    return (
        <>
            <hr/>
            <div className={'d-flex flex-column p-4'}>

                <textarea
                    placeholder={'Напишите свой комментарий...'}
                    onChange={handleReviewChange}
                    value={comment}
                    className={`form-control review-text-area ${error && 'is-invalid'}`}
                    id="writeReview"
                    rows="3"
                />
                <div className="invalid-feedback">
                    {error}
                </div>

                <button
                    onClick={handleSendReview}
                    className='filter-button'
                    style={{width: '150px', margin: '15px', alignSelf: 'center'}}
                    disabled={!!error}
                >
                    Отправить
                </button>

            </div>
            <hr/>
        </>
    )
}
