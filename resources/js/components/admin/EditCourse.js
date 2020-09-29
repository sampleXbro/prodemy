import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Image from "../images/Image";
import {Title} from "../titles/Title";
import ReactPlayer from "react-player";
import {FlatButton} from "../buttons/FlatButton";
import {Preloader} from "../preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {getCourseById, updateCourse} from "../../redux/actions/actionCreators";

export function EditCourse({id, setModal}) {
    const {currentCourse, isLoading} = useSelector(store => store.coursesReducer);
    const {levels} = useSelector(store => store.coursesLevelsReducer);
    const {software} = useSelector(store => store.softwareReducer);
    const {users} = useSelector(store => store.userReducer);
    const [error, setError] = useState('');
    const [localState, setLocalState] = useState({
        title: '',
        description: '',
        file: '',
        link: '',
        lessonsQty: '',
        fullDuration: '',
        whatWillLearn: '',
        requirements: '',
        isRecommended: '',
        levelId: '',
        softwareId: '',
        views: '',
        bonus: '',
        authorId: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseById(id));
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
        if(ReactPlayer.canPlay(localState.link)){
            dispatch(updateCourse(id, localState));
            setModal('');
        } else {
            setError('Ссылка на видео не верна или видео недоступно')
        }
    };

    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                <div className='d-flex align-items-center'>
                    <Image path={localState.file || currentCourse.image} size='150px' margin='0 20px 0 0'/>
                    <input type="file" onChange={handleFileChange}/>
                </div>
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
                </div>}
                Ссылка:
                <input
                    type="text"
                    defaultValue={currentCourse.link}
                    onChange={e => setLocalState({...localState, link: e.target.value})}
                />
                Название:
                <input
                    type="text"
                    defaultValue={currentCourse.title}
                    onChange={e => setLocalState({...localState, title: e.target.value})}
                />
                Описание:
                <textarea
                    style={{minHeight: '100px'}}
                    defaultValue={currentCourse.description}
                    onChange={e => setLocalState({...localState, description: e.target.value})}
                />
                Кол-во уроков:
                <input
                    type="number"
                    defaultValue={currentCourse.lessons_qty}
                    onChange={e => setLocalState({...localState, lessonsQty: e.target.value})}
                />
                Продолжительность, мин:
                <input
                    type="number"
                    defaultValue={(+currentCourse.full_duration / 60).toFixed(0)}
                    onChange={e => setLocalState({...localState, fullDuration: e.target.value * 60})}
                />
                Чему научит:
                <textarea
                    style={{minHeight: '100px'}}
                    defaultValue={currentCourse.what_will_learn}
                    onChange={e => setLocalState({...localState, whatWillLearn: e.target.value})}
                />
                Требования:
                <textarea
                    style={{minHeight: '100px'}}
                    defaultValue={currentCourse.requirements}
                    onChange={e => setLocalState({...localState, requirements: e.target.value})}
                />
                Рекомендован:
                <select
                    defaultValue={currentCourse.is_recommended}
                    onChange={e => setLocalState({...localState, isRecommended: e.target.value})}>
                    <option value="0">Обычный</option>
                    <option value="1">Рекоммендованый</option>
                </select>
                Уровень сложности:
                <select defaultValue={currentCourse.level_id}
                        onChange={e => setLocalState({...localState, levelId: e.target.value})}>
                    {levels.map(level => <option key={level.id} value={level.id}>{level.level}</option>)}
                </select>
                Софт:
                <select
                    defaultValue={currentCourse.software_id}
                    onChange={e => setLocalState({...localState, softwareId: e.target.value})}>
                    {software.map(soft => <option key={soft.id} value={soft.id}>{soft.software}</option>)}
                </select>
                Просмотры:
                <input
                    type="number"
                    defaultValue={currentCourse.views}
                    onChange={e => setLocalState({...localState, views: e.target.value})}
                />
                Бонус:
                <select
                    defaultValue={currentCourse.bonus}
                    onChange={e => setLocalState({...localState, bonus: e.target.value})}>
                    <option value="0">Нет</option>
                    <option value="1">Есть</option>
                </select>
                Автор:
                <select
                    defaultValue={currentCourse.author_id}
                    onChange={e => setLocalState({...localState, authorId: e.target.value})}>
                    {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </select>
                <div className='d-flex justify-content-center'>
                    <Title text={error} color='red'/>
                </div>
                <FlatButton name='Сохранить' width='160px' height='40px' className='m-auto' onClick={handleSaveClick}/>
            </div>
        </div>
    )
}

EditCourse.propTypes = {
    id: PropTypes.number,
    setModal: PropTypes.func
};
