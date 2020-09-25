import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import Image from "../images/Image";
import moment from 'moment'
import {Link} from "react-router-dom";
import {Preloader} from "../courses/Preloader";
import {EditReview} from "./EditReview";

export function Reviews({scrollMultiplier, search}) {
    const [modal, setModal] = useState(null);
    const {reviews, isLoading} = useSelector(store => store.reviewsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_REVIEWS});
    }, []);

    const reviewsJsx = reviews
        .filter((review) => (review.id.toString().includes(search)
            || review.author.name.toLowerCase().includes(search)
            || review.review.toLowerCase().includes(search)
            || review.course.title.toLowerCase().includes(search)))
        .map((review, i) => {
        if(i > scrollMultiplier * 10) return ;
        const color = review.rev_rating === 5 ? 'bg-success'
            : review.rev_rating === 4 ? 'bg-warning'
                : review.rev_rating < 4 ? 'bg-danger' : '';
        return (
            <tr key={review.id} className={color} style={{color: 'black'}}>
                <th scope="row">{review.id}</th>
                <td><Image path={review.author.avatar} size='80px' title={review.author.name} /></td>
                <td onClick={() => setModal(<EditReview review={review} setModal={setModal}/>)}>
                    <h5 className="fas fa-edit text-dark"/>
                </td>
                <td>{review.author.name}</td>
                <td>{review.review}</td>
                <td>{review.rev_rating}</td>
                <td><Link to={`/portal/course/${review.course.id}`} target='_blank'>{review.course.title}</Link></td>
                <td>{moment(review.created_at).format('DD-MM-YYYY HH:mm')}</td>
            </tr>
        )
    });

    return (
        <>
            {isLoading && <Preloader/>}
            {modal}
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Аватар юзера</th>
                        <th scope="col">Ред.</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отзыв</th>
                        <th scope="col">Рейтинг</th>
                        <th scope="col">Курс</th>
                        <th scope="col">Когда написан</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewsJsx}
                </tbody>
            </table>
        </>
    )
}
