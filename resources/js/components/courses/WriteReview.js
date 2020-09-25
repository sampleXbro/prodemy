import React, {useEffect, useState} from 'react';
import StarRatings from "react-star-ratings";
import {Title} from "../titles/Title";
import {useDispatch, useSelector} from "react-redux";
import {getCourseById, sendReview} from "../../redux/actions/actionCreators";

export function WriteReview({user, reviews}) {
    const course = useSelector(store => store.coursesReducer.currentCourse);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const isWrittenReview = reviews.some((review) => {
        return review.author.id === user.id
    });

    if (isWrittenReview) return (
        <Title text='Вы уже написали отзыв к этому курсу' textAlign='center' size={'18px'} margin='15px' weight={300}/>
        );

    const newReview = {
        review: review,
        course_id: course.id,
        rev_rating: rating,
        author_id: user.id
    };

    function handleReviewChange(e) {
        setReview(e.target.value);
        review.length > 2 && setError('')
    }

    function handleRatingChange(rating) {
        setRating(rating);
        rating > 0 && setError('')
    }

    function handleSendReview(e) {
        e.preventDefault();
        !rating && setError('Вы забыли оценить курс');
        review.length <= 3 && setError('Отзыв слишком короткий');

        if(rating > 0 && review.length > 3){
            dispatch(sendReview(newReview));
            //dispatch(getCourseById(id));
        }
    }

    return (
        <>
            <hr/>
            <div className={'d-flex flex-column p-4'}>

                <textarea
                    placeholder={'Напишите свой отзыв о курсе...'}
                    onChange={handleReviewChange}
                    value={review}
                    className={`form-control review-text-area ${error && 'is-invalid'}`}
                    id="writeReview"
                    rows="3"
                />
                <div className="invalid-feedback">
                    {error}
                </div>
                <div className='d-flex justify-content-end p-2'>
                    <StarRatings
                        rating = {rating}
                        starRatedColor = "#F38300"
                        starHoverColor = "#F38300"
                        starDimension = '25px'
                        starSpacing = '1px'
                        numberOfStars = {5}
                        name = 'rating'
                        changeRating={handleRatingChange}
                    />
                    <Title text={rating > 0 && rating + ' из 5'} weight={300} size={'16px'} fontStyle={'italic'} margin={'0 5px'}/>
                </div>
                <button
                    onClick={handleSendReview}
                    className='filter-button'
                    style={{width: '150px', margin: '15px', alignSelf: 'center'}}
                    disabled={!!error}
                >
                    Отправить отзыв
                </button>

            </div>
            <hr/>
        </>
    )
}
