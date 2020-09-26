import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Image from "../images/Image";
import actionTypes from "../../redux/actions/actionTypes";
import {Preloader} from "../preloaders/Preloader";
import {FlatButton} from "../buttons/FlatButton";
import {Title} from "../titles/Title";
import {addPost} from "../../redux/actions/actionCreators";
import ReactPlayer from "react-player";

export function AddPost({setModal, currentUser}) {
    const {types} = useSelector(store => store.postsTypesReducer);
    const {software} = useSelector(store => store.softwareReducer);
    const {users, isLoading} = useSelector(store => store.userReducer);
    const [error, setError] = useState('');
    const [localState, setLocalState] = useState({
        title: '',
        description: '',
        video_link: '',
        text: '',
        file: '',
        author_id: currentUser.id,
        software_id: '',
        is_recommended: '',
        type_id: '',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_POSTS_TYPES});
        dispatch({type: actionTypes.GET_SOFTWARE});
        dispatch({type: actionTypes.GET_ALL_USERS});
    }, []);

    if(isLoading) return <Preloader/>;

    const handleFileChange = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        const reader = new FileReader();
        reader.onload = (e) => {
            setLocalState({...localState, file: e.target.result})
        };
        reader.readAsDataURL(file[0]);
    };

    const handleSaveClick = () => {
        if(Object.values(localState).some(val => !val)){
            setError('Заполните все поля');
        } else{
            if(ReactPlayer.canPlay(localState.link)){
                setModal(false);
                dispatch(addPost(localState));
            } else {
                setError('Ссылка на видео не верна или видео недоступно')
            }
        }
    };

    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                <div className='d-flex align-items-center'>
                    <Image path={localState.file} size='150px' margin='0 20px 0 0'/>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                Название:
                <input
                    type="text"
                    onChange={e => setLocalState({...localState, title: e.target.value})}
                />
                Описание:
                <textarea
                    style={{minHeight: '100px'}}
                    onChange={e => setLocalState({...localState, description: e.target.value})}
                />
                Ссылка на видео:
                <input
                    type="text"
                    onChange={e => setLocalState({...localState, video_link: e.target.value})}
                />
                Текст:
                <textarea
                    style={{minHeight: '200px'}}
                    onChange={e => setLocalState({...localState, text: e.target.value})}
                />
                Рекомендован:
                <select
                    onChange={e => setLocalState({...localState, is_recommended: e.target.value})}
                    defaultValue='DEFAULT'
                >
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    <option value="0">Обычный</option>
                    <option value="1">Рекоммендованый</option>
                </select>
                Тип:
                <select
                    onChange={e => setLocalState({...localState, type_id: e.target.value})}
                    defaultValue='DEFAULT'
                >
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    {types.map(type => <option key={type.id} value={type.id}>{type.post_type.toUpperCase()}</option>)}
                </select>
                Софт:
                <select
                    onChange={e => setLocalState({...localState, software_id: e.target.value})}
                    defaultValue='DEFAULT'
                >
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    {software.map(soft => <option key={soft.id} value={soft.id}>{soft.software}</option>)}
                </select>
                Автор:
                <select
                    defaultValue={currentUser.id}
                    onChange={e => setLocalState({...localState, author_id: e.target.value})}>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
                <div className='d-flex justify-content-center'>
                    <Title text={error} color='red'/>
                </div>
                <FlatButton name='Добавить' width='160px' height='40px' className='m-auto' onClick={handleSaveClick}/>
            </div>
        </div>
    )
}
