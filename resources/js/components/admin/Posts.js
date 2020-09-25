import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import Image from "../images/Image";
import moment from 'moment'
import {truncateText} from "../../utils/truncateText";
import {Preloader} from "../courses/Preloader";
import {EditPost} from "./EditPost";
import {Link} from "react-router-dom";
import {AddPost} from "./AddPost";

export function Posts({scrollMultiplier, search, currentUser}) {
    const {posts, isLoading} = useSelector(store => store.postsReducer);
    const [modal, setModal] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_POSTS});
    }, []);

    const postsJsx = posts
        .filter((post) => (post.id.toString().includes(search)
            || post.title.toLowerCase().includes(search)
            || post.description.toLowerCase().includes(search)
            || post.author.name.toLowerCase().includes(search)
            || post.software.software.toLowerCase().includes(search)
            || post.type.post_type.toLowerCase().includes(search)))
        .map((post, i) => {
        if(i > scrollMultiplier * 10) return ;
        return (
            <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td><Image path={post.image} size='80px' title={post.title} /></td>
                <td onClick={() => setModal(<EditPost id={post.id} setModal={setModal}/>)}>
                    <h5 className="fas fa-edit text-warning"/>
                </td>
                <td><Link to={`/portal/post/${post.id}`} target='_blank'>{post.title}</Link></td>
                <td>{truncateText(post.description, 10)}</td>
                <td>{post.video_link}</td>
                <td>{post.author.name}</td>
                <td>{post.software.software}</td>
                <td>{post.is_recommended ? <h3 className="fas fa-check-circle text-success"/> : ''}</td>
                <td>{post.type.post_type.toUpperCase()}</td>
                <td>{moment(post.created_at).format('DD-MM-YYYY HH:mm')}</td>
            </tr>
        )
    });

    return (
        <>
            {isLoading && <Preloader/>}
            {modal}
            <div className={'addButton'} onClick={() => setModal(<AddPost setModal={setModal} currentUser={currentUser}/>)}>
                <h3 className="fas fa-plus" style={{margin: 0}}/>
            </div>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Изобр.</th>
                        <th scope="col">Ред.</th>
                        <th scope="col">Название</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Ссылка на видео</th>
                        <th scope="col">Автор</th>
                        <th scope="col">ПО</th>
                        <th scope="col">Рекоменд.</th>
                        <th scope="col">Тип</th>
                        <th scope="col">Создан</th>
                    </tr>
                </thead>
                <tbody>
                    {postsJsx}
                </tbody>
            </table>
        </>
    )
}
