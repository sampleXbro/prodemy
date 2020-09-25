import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import Image from "../images/Image";
import moment from 'moment'
import {Link} from "react-router-dom";
import {Preloader} from "../courses/Preloader";
import {EditComment} from "./EditComment";

export function Comments({scrollMultiplier, search}) {
    const [modal, setModal] = useState(null);
    const {comments, isLoading} = useSelector(store => store.commentsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_COMMENTS});
    }, []);

    const commentsJsx = comments
        .filter((comment) => (comment.id.toString().includes(search)
            || comment.author.name.toLowerCase().includes(search)
            || comment.comment.toLowerCase().includes(search)
            || comment.post.title.toLowerCase().includes(search)))
        .map((comment, i) => {
        if(i > scrollMultiplier * 10) return ;
        return (
            <tr key={comment.id}>
                <th scope="row">{comment.id}</th>
                <td><Image path={comment.author.avatar} size='80px' title={comment.author.name} /></td>
                <td onClick={() => setModal(<EditComment comment={comment} setModal={setModal}/>)}>
                    <h5 className="fas fa-edit text-warning"/>
                </td>
                <td>{comment.author.name}</td>
                <td>{comment.comment}</td>
                <td><Link to={`/portal/post/${comment.post_id}`} target='_blank'>{comment.post.title}</Link></td>
                <td>{moment(comment.created_at).format('DD-MM-YYYY HH:mm')}</td>
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
                        <th scope="col">Коммент</th>
                        <th scope="col">Пост</th>
                        <th scope="col">Когда написан</th>
                    </tr>
                </thead>
                <tbody>
                    {commentsJsx}
                </tbody>
            </table>
        </>
    )
}
