import React, {useEffect, useState} from 'react';
import {Title} from "../../components/titles/Title";
import {Slider} from "../../components/slider/Slider";
import {Filter} from "../../components/filters/Filter";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {ItemsListWithInfiniteScroll} from "../../components/itemsList/ItemsListWithInfiniteScroll";

export const AdvancedPage = () => {
    const {posts, isLoading} = useSelector(store => store.postsReducer);
    const [softwareId, setSoftwareId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_POSTS});
        document.title = 'prodemy - Продвинутые техники'
    }, []);

    const filteredPosts = posts.filter((post) => ((softwareId ? post.software_id === softwareId : post) && post.type.post_type === 'advanced'));

    return (
        <div className="container-fluid">
            {isLoading && <Preloader/>}
            <Title text='ПРОДВИНУТЫЕ ТЕХНИКИ' textAlign='center' size='22px' margin='0 0 10px 0'/>
            <Slider items={filteredPosts} itemType='post' sliderTitle = 'РЕКОМЕНДУЕМ ОЗНАКОМИТЬСЯ' softwareId={softwareId}/>
            <Filter setSoftwareId={setSoftwareId}/>
            <ItemsListWithInfiniteScroll items={filteredPosts} softwareId={softwareId} itemType='post'/>
        </div>
    )
};
