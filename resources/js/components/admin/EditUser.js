import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserById, updateUser} from "../../redux/actions/actionCreators";
import Image from "../images/Image";
import actionTypes from "../../redux/actions/actionTypes";
import {Preloader} from "../courses/Preloader";
import {FlatButton} from "../buttons/FlatButton";

export function EditUser({id, setModal}) {
    const {user, isLoading} = useSelector(store => store.userReducer);
    const {roles} = useSelector(store => store.rolesReducer);
    const {levels} = useSelector(store => store.usersLevelsReducer);
    const [localState, setLocalState] = useState({
        name: '',
        file: '',
        role_id: '',
        level_id: '',
        additional: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById(id));
        dispatch({type: actionTypes.GET_ALL_ROLES});
        dispatch({type: actionTypes.GET_ALL_USERS_LEVELS});
    }, []);

    if(isLoading) return <Preloader/>;

    const handleFileChange = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        const reader = new FileReader();
        reader.onload = (e) => {
            setLocalState({...localState, file:e.target.result})
        };
        reader.readAsDataURL(file[0]);
    };

    const handleSaveClick = () => {
        dispatch(updateUser(user.id, localState));
        setModal('')
    };

    const roleSelector = <select defaultValue={user.role_id} onChange={e => setLocalState({...localState, role_id: e.target.value})}>
        {roles.map(role => (
            <option key={role.id} value={role.id}>
                {role.role}
            </option>))}
    </select>;

    const levelSelector = <select defaultValue={user.level_id} onChange={e => setLocalState({...localState, level_id: e.target.value})}>
        {levels.map(level => (<option key={level.id} value={level.id} >
            {level.user_level}
        </option>))}
    </select>;

    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                <div className='d-flex align-items-center'>
                    <Image path={localState.file || user.avatar} size='150px' margin='0 20px 0 0'/>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                Имя:
                <input type="text" defaultValue={user.name} onChange={e => setLocalState({...localState, name: e.target.value})}/>
                Роль:
                {roleSelector}
                Уровень:
                {levelSelector}
                Дополнительно:
                <textarea cols="30" rows="3" defaultValue={user.additional} onChange={e => setLocalState({...localState, additional: e.target.value})}/>
                <FlatButton name='Сохранить' width='160px' height='40px' className='m-auto' onClick={handleSaveClick}/>
            </div>

        </div>
    )
}
