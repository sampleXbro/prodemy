import React, {useEffect, useState} from 'react';
import {Slider} from "../slider/Slider";
import {Filter} from "../courses/Filter";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {ItemsList} from "../itemsList/ItemsList";
import {Preloader} from "../preloaders/Preloader";
import {Title} from "../titles/Title";

export const BasicsPage = () => {
    const {posts, isLoading} = useSelector(store => store.postsReducer);
    const [softwareId, setSoftwareId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_POSTS});
        document.title = 'prodemy - Базовые сведения'
    }, []);

    const filteredPosts = posts.filter((post) => ((softwareId ? post.software_id === softwareId : post) && post.type.post_type === 'basic'));

    return (
        <div className="container-fluid">
            {isLoading && <Preloader/>}
            <Title text='БАЗОВЫЕ СВЕДЕНИЯ' textAlign='center' size='22px' margin='0 0 10px 0'/>
            <Slider items={filteredPosts} itemType='post' softwareId={softwareId}/>
            <Filter setSoftwareId={setSoftwareId}/>
            <ItemsList items={filteredPosts} softwareId={softwareId} itemType='post'/>
        </div>
    )
};
