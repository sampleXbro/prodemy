import React, {useEffect, useState} from 'react';
import moment from 'moment'
import PropTypes from "prop-types";
import Image from "../../components/images/Image";
import {Link} from "react-router-dom";
import {EditComment} from "./EditComment";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";

export function Comments({scrollMultiplier, search}) {
    const [selectedComment, setSelectedComment] = useState('');
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
                <td onClick={() => setSelectedComment(comment)}>
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
            {selectedComment && <EditComment comment={selectedComment} setModal={setSelectedComment}/>}
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

Comments.propTypes = {
    scrollMultiplier: PropTypes.number,
    search: PropTypes.string
};
