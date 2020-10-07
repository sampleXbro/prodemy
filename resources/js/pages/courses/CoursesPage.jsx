import React, {useEffect, useState} from 'react';
import {Filter} from "../../components/filters/Filter";
import PropTypes from "prop-types";
import {Title} from "../../components/titles/Title";
import {Slider} from "../../components/slider/Slider";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/actions/actionTypes";
import {ItemsListWithInfiniteScroll} from "../../components/itemsList/ItemsListWithInfiniteScroll";

export function CoursesPage({courses}){
    const {isLoading} = useSelector(store => store.coursesReducer);
    const [softwareId, setSoftwareId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.GET_ALL_COURSES});
        document.title = 'prodemy - Обучающие курсы'
    },[]);

    return (
        <div className="container-fluid">
            {isLoading && <Preloader/>}
            <Title text='ОБУЧАЮЩИЕ КУРСЫ' textAlign='center' size='22px' margin='0 0 10px 0'/>
            <Slider items={courses} softwareId={softwareId}/>
            <Filter setSoftwareId={setSoftwareId}/>
            <ItemsListWithInfiniteScroll softwareId={softwareId} items={courses}/>
        </div>
    )
}

CoursesPage.propTypes = {
    courses: PropTypes.array,
};
