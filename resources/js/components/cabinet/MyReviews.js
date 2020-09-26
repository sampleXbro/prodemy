import React, {useEffect, useState} from 'react';
import {deleteReview, getReviewsByUserId} from "../../redux/actions/actionCreators";
import Image from "../images/Image";
import moment from "moment";
import {Link} from "react-router-dom";
import {Title} from "../titles/Title";
import {FlatButton} from "../buttons/FlatButton";
import {useDispatch} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";


export const MyReviews = React.memo(({id, reviews}) => {
    const [modal, setModal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_REVIEWS});
    }, []);

    if(reviews.length < 1) return <Title size={'16px'} margin={'5px'} textAlign={'center'} text={'Похоже, отзывов ещё нет...'}/>;

    const handleCloseModalClick = () => {
        setModal('')
    };

    const handleDeleteReviewClick = (reviewId) => {
        dispatch(deleteReview(reviewId));
        setModal('');
    };

    const handleCeilClick = (id) => {
        const fullReview = [];

        reviews.map((review) => {
            if(review.id === id){
                fullReview.push(
                    <div key={id} className='modal-window'>
                        <Image size={'300px'} path={review.course.image} />
                        <Title size={'18px'} margin={'5px'} textAlign={'center'} text={review.course.title.toUpperCase()}/>
                        <Title size={'16px'} margin={'5px'} textAlign={'center'} text={'Автор: ' + review.author.name}/>
                        <Title size={'16px'} margin={'5px'} textAlign={'center'} text={'Ваш отзыв: ' + review.review} weight={300}/>
                        <Title size={'32px'} margin={'5px'} textAlign={'center'} text={'Вы поставили: ' + review.rev_rating + ' из 5'} weight={400}/>
                        <div className='d-flex justify-content-between w-100'>
                            <FlatButton onClick={() => handleDeleteReviewClick(id)} name={'Удалить отзыв'} isActive={true}/>
                            <FlatButton onClick={handleCloseModalClick} name={'Закрыть'}/>
                        </div>

                    </div>
                )
            }
        });

        setModal(
            <div className={'modal-container'}>
                {fullReview}
            </div>
        );
    };

    const reviewsJsx = reviews.map((review, i) => {
        const color = review.rev_rating === 5 ? 'table-success'
            : review.rev_rating === 4 ? 'table-warning'
                : review.rev_rating < 4 ? 'table-danger' : '';
        return (
            <tr key={review.id} className={color} onClick={() => handleCeilClick(review.id)}>
                <th scope="row">{i+1}</th>
                <td><Link to={`/portal/course/${review.course.id}`}>{review.course.title}</Link></td>
                <td>{review.rev_rating} з 5</td>
                <td>{moment(review.created_at).format('DD.MM.YYYY')}</td>
            </tr>
        )
    });

    return (
        <>
            {modal}

            <div className='cabinet-page-container'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Курс</th>
                        <th scope="col">Оценкаа</th>
                        <th scope="col">Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                     {reviewsJsx.reverse()}
                    </tbody>
                </table>
            </div>
        </>
    )
});
