import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Image from "../images/Image";
import actionTypes from "../../redux/actions/actionTypes";
import {Preloader} from "../preloaders/Preloader";
import {FlatButton} from "../buttons/FlatButton";
import {addCourse} from "../../redux/actions/actionCreators";
import ReactPlayer from "react-player";
import {Title} from "../titles/Title";

export function AddCourse({setModal, currentUser}) {
    const {levels} = useSelector(store => store.coursesLevelsReducer);
    const {software} = useSelector(store => store.softwareReducer);
    const {users, isLoading} = useSelector(store => store.userReducer);
    const [error, setError] = useState('');
    const [localState, setLocalState] = useState({
        title: '',
        description: '',
        file: '',
        link: '',
        lessonsQty: '',
        fullDuration: 0,
        whatWillLearn: '',
        requirements: '',
        isRecommended: '',
        levelId: '',
        softwareId: '',
        views: 0,
        bonus: '',
        authorId: currentUser.id
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_COURSES_LEVELS});
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
                dispatch(addCourse(localState));
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
                Ссылка:
                <input
                    type="text"
                    onChange={e => setLocalState({...localState, link: e.target.value})}
                />
                {ReactPlayer.canPlay(localState.link) &&
                <div className={'d-flex justify-content-center border border-primary'}>
                    <ReactPlayer
                        url={localState.link}
                        controls={true}
                        width={'320px'}
                        height={'240px'}
                        config={{
                            enablejsapi: 1,
                            playerVars: { showinfo: 0 },
                            modestbranding: 1
                        }}
                    />
                </div>
                }
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
                Кол-во уроков:
                <input
                    type="number"
                    onChange={e => setLocalState({...localState, lessonsQty: e.target.value})}
                />
                Продолжительность, мин:
                <input
                    type="number"
                    onChange={e => setLocalState({...localState, fullDuration: e.target.value * 60})}
                />
                Чему научит:
                <textarea
                    style={{minHeight: '100px'}}
                    onChange={e => setLocalState({...localState, whatWillLearn: e.target.value})}
                />
                Требования:
                <textarea
                    style={{minHeight: '100px'}}
                    onChange={e => setLocalState({...localState, requirements: e.target.value})}
                />
                Рекомендован:
                <select
                    defaultValue={'DEFAULT'}
                    onChange={e => setLocalState({...localState, isRecommended: e.target.value})}>
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    <option value="0">Обычный</option>
                    <option value="1">Рекоммендованый</option>
                </select>
                Уровень сложности:
                <select
                    defaultValue={'DEFAULT'}
                    onChange={e => setLocalState({...localState, levelId: e.target.value})}>
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    {levels.map(level => <option key={level.id} value={level.id}>{level.level}</option>)}
                </select>
                Софт:
                <select
                    defaultValue={'DEFAULT'}
                    onChange={e => setLocalState({...localState, softwareId: e.target.value})}>
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    {software.map(soft => <option key={soft.id} value={soft.id}>{soft.software}</option>)}
                </select>
                Просмотры:
                <input
                    defaultValue={0}
                    type="number"
                    onChange={e => setLocalState({...localState, views: e.target.value})}
                />
                Бонус:
                <select
                    defaultValue={'DEFAULT'}
                    onChange={e => setLocalState({...localState, bonus: e.target.value})}>
                    <option value='DEFAULT' label='--- Выберите ---' disabled/>
                    <option value="0">Нет</option>
                    <option value="1">Есть</option>
                </select>
                Автор:
                <select
                    defaultValue={currentUser.id}
                    onChange={e => setLocalState({...localState, authorId: e.target.value})}>
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
