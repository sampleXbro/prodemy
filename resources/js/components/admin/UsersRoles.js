import React, {useEffect, useState} from 'react';
import {Title} from "../titles/Title";
import {Input} from "../inputs/Input";
import {FlatButton} from "../buttons/FlatButton";
import {Preloader} from "../preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {addRole, updateRole} from "../../redux/actions/actionCreators";

export function UsersRoles() {
    const[modal, setModal] = useState(false);
    const[input, setInput] = useState('');
    const {roles, isLoading} = useSelector(store => store.rolesReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_ROLES});
    }, []);

    const onDoubleClickHandler = (e) => {
        const innerText = e.target.innerText;
        if(e.target.tagName === 'TD'){
            e.target.innerHTML = `<input type='text' value="${innerText}"/>`;
            e.target.children[0].focus();
        }
    };

    const onBlurHandler = (e, roleId) => {
        const innerText = e.target.value;
        dispatch(updateRole(roleId, {role: innerText}));
        e.target.parentNode.innerHTML = innerText;
    };

    const handleSendClick = () => {
        dispatch(addRole({role: input}));
        setModal(false);
    };

    const rolesJsx = roles.map((role, i) => {
        return (
            <tr key={role.id}>
                <th scope="row">{role.id}</th>
                <td onDoubleClick={onDoubleClickHandler} onBlur={(e) => onBlurHandler(e, role.id)}>{role.role}</td>
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
                        <Title text='ДОБАВИТЬ НОВУЮ РОЛЬ' size='22px' margin='20px 0'/>
                        <Input width='85%' onChange={(e) => setInput(e.target.value)} margin='30px 0' placeholder='Введите новую роль для пользователей'/>
                        <Title text={input} size='46px' margin='50px 0'/>
                        <FlatButton name='Добавить' width='250px' height='40px' className='m-auto' onClick={handleSendClick}/>
                    </div>
                </div>
            </div>
            }
            <div className={'addButton'} onClick={() => {setModal(true)}}>
                <h3 className="fas fa-plus" style={{margin: 0}}/>
            </div>
            <table className='table table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Роль</th>
                    </tr>
                </thead>
                <tbody>
                    {rolesJsx}
                </tbody>
            </table>
        </>
    )
}
