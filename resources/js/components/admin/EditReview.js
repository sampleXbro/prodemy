import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import {FlatButton} from "../buttons/FlatButton";
import {Preloader} from "../preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {deleteReview, updateReview} from "../../redux/actions/actionCreators";

export function EditReview({review, setModal}) {
    const {users, isLoading} = useSelector(store => store.userReducer);
    const {courses} = useSelector(store => store.coursesReducer);
    const [localState, setLocalState] = useState({
        review: '',
        course_id: '',
        rev_rating: '',
        author_id: '',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_USERS});
        dispatch({type: actionTypes.GET_ALL_COURSES});
    }, []);

    if(isLoading) return <Preloader/>;

    const handleSaveClick = () => {
        dispatch(updateReview(review.id, localState));
        setModal('')
    };

    const handleDeleteClick = () => {
        dispatch(deleteReview(review.id));
        setModal('')
    };
    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                Автор:
                <select
                    defaultValue={review.author_id}
                    onChange={e => setLocalState({...localState, author_id: e.target.value})}>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
                Отзыв:
                <textarea
                    style={{minHeight: '200px'}}
                    defaultValue={review.review}
                    onChange={e => setLocalState({...localState, review: e.target.value})}
                />
                Оценка:
                <StarRatings
                    rating = {localState.rev_rating || review.rev_rating}
                    starRatedColor = "#F38300"
                    starHoverColor = "#F38300"
                    starDimension = '25px'
                    starSpacing = '1px'
                    numberOfStars = {5}
                    name = 'rating'
                    changeRating={(rtg) => {setLocalState({...localState, rev_rating: rtg})}}
                />
                К курсу:
                <select
                    defaultValue={review.course_id}
                    onChange={e => setLocalState({...localState, course_id: e.target.value})}>
                    {courses.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
                </select>
                <div className='d-flex justify-content-between align-items-center h-100'>
                    <FlatButton name='Удалить отзыв' width='160px' height='40px' className='m-auto' onClick={handleDeleteClick} colorInactive='#e3342f'/>
                    <FlatButton name='Сохранить' width='160px' height='40px' className='m-auto' onClick={handleSaveClick}/>
                </div>
            </div>

        </div>
    )
}

EditReview.propTypes = {
    review: PropTypes.object,
    setModal: PropTypes.func
};
