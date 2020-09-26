import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {Preloader} from "../preloaders/Preloader";
import {addSoftware, updateSoftware} from "../../redux/actions/actionCreators";
import {Title} from "../titles/Title";
import {Input} from "../inputs/Input";
import {FlatButton} from "../buttons/FlatButton";

export function Software() {
    const[modal, setModal] = useState(false);
    const[input, setInput] = useState('');
    const {software, isLoading} = useSelector(store => store.softwareReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_SOFTWARE});
    }, []);

    const onDoubleClickHandler = (e) => {
        const innerText = e.target.innerText;
        if(e.target.tagName === 'TD'){
            e.target.innerHTML = `<input type='text' value="${innerText}"/>`;
            e.target.children[0].focus();
        }
    };

    const onBlurHandler = (e, softId) => {
        const innerText = e.target.value;
        dispatch(updateSoftware(softId, {software: innerText}));
        e.target.parentNode.innerHTML = innerText;
    };

    const handleSendClick = () => {
        dispatch(addSoftware({software: input}));
        setModal(false);
    };

    const softwareJsx = software.map((soft, i) => {
        return (
            <tr key={soft.id}>
                <th scope="row">{soft.id}</th>
                <td onDoubleClick={onDoubleClickHandler} onBlur={(e) => onBlurHandler(e, soft.id)}>{soft.software}</td>
            </tr>
        )
    });

    return (
        <>
            {isLoading && <Preloader/>}
            {modal &&
            <div className='big-modal-container'>
                <div className='big-modal-window'>
                    <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => {setModal(false); setInput('')}}/>
                    <div className='d-flex flex-column align-items-center'>
                        <Title text='ДОБАВИТЬ НОВЫЙ СОФТ' size='22px' margin='20px 0'/>
                        <Input width='85%' onChange={(e) =>setInput(e.target.value)} margin='30px 0' placeholder='Введите название софта'/>
                        <Title text={input} size='46px' margin='50px 0'/>
                        <FlatButton name='Добавить' width='250px' height='40px' className='m-auto' onClick={handleSendClick}/>
                    </div>
                </div>
            </div>
            }
            <div className={'addButton'} onClick={() => setModal(true)}>
                <h3 className="fas fa-plus" style={{margin: 0}}/>
            </div>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Приложение</th>
                    </tr>
                </thead>
                <tbody>
                    {softwareJsx}
                </tbody>
            </table>
        </>
    )
}
