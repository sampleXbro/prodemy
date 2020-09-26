import React, {useEffect, useState} from 'react';
import {Slider} from "../slider/Slider";
import {Filter} from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/actions/actionTypes";
import {ItemsList} from "../itemsList/ItemsList";
import {Preloader} from "../preloaders/Preloader";
import {Title} from "../titles/Title";

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
            <ItemsList softwareId={softwareId} items={courses}/>
        </div>
    )
}
