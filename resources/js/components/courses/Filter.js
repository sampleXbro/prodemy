import React, {useEffect, useState} from 'react'
import {Title} from "../titles/Title";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";

export function Filter({setSoftwareId}){
    const {software} = useSelector(store => store.softwareReducer);
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');


    useEffect(() => {
        dispatch({type: actionTypes.GET_SOFTWARE})
    }, []);

    function handleFilterClick(item){
        setSoftwareId(item.id);
        setFilterText(<Title size={'16px'} weight={300} text={'Сбросить фильтр по ' + item.software} margin={0}/>);
    }

    function handleResetClick(){
        setSoftwareId('');
        setFilterText('');
    }

    const buttons = software.map((item) => (
        <button className={'filter-button'} key={item.id} onClick={() => handleFilterClick(item)}>{item.software}</button>
    ));

    const resetFilters = filterText ? <button style={{marginTop: '15px'}} className={'filter-button'} onClick={handleResetClick}>{filterText}</button> : '';

    return(
        <div className={'text-center dark-container mt-2'}>
            <div className='d-flex justify-content-around align-items-center'>
            {buttons}
            </div>
            {resetFilters}
        </div>
    )
}
