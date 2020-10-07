import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Image from "../../components/images/Image";
import {Title} from "../../components/titles/Title";
import ReactPlayer from "react-player";
import {FlatButton} from "../../components/buttons/FlatButton";
import {Preloader} from "../../components/preloaders/Preloader";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {getPostById, updatePost} from "../../redux/actions/actionCreators";


export function EditPost({id, setModal}) {
    const {currentPost, isLoading} = useSelector(store => store.postsReducer);
    const {types} = useSelector(store => store.postsTypesReducer);
    const {software} = useSelector(store => store.softwareReducer);
    const {users} = useSelector(store => store.userReducer);
    const [error, setError] = useState('');

    const [localState, setLocalState] = useState({
        title: '',
        description: '',
        text: '',
        file: '',
        video_link: '',
        author_id: '',
        software_id: '',
        is_recommended: '',
        type_id: '',
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(id));
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
        if(ReactPlayer.canPlay(localState.video_link)){
            dispatch(updatePost(id, localState));
            setModal('')
        } else {
            setError('Ссылка на видео не верна или видео недоступно')
        }
    };

    return (
        <div className='big-modal-container'>
            <div className='big-modal-window'>
                <h3 className="fas fa-times align-self-end text-danger position-fixed" onClick={() => setModal('')}/>
                <div className='d-flex align-items-center'>
                    <Image path={localState.file || currentPost.image} size='150px' margin='0 20px 0 0'/>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                Название:
                <input
                    type="text"
                    defaultValue={currentPost.title}
                    onChange={e => setLocalState({...localState, title: e.target.value})}
                />
                {ReactPlayer.canPlay(localState.video_link) &&
                <div className={'d-flex justify-content-center border border-primary'}>
                    <ReactPlayer
                        url={localState.video_link}
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
                Ссылка на видео:
                <input
                    type="text"
                    defaultValue={currentPost.video_link}
                    onChange={e => setLocalState({...localState, video_link: e.target.value})}
                />
                Описание:
                <textarea
                    style={{minHeight: '100px'}}
                    defaultValue={currentPost.description}
                    onChange={e => setLocalState({...localState, description: e.target.value})}
                />
                Текст:
                <textarea
                    style={{minHeight: '200px'}}
                    defaultValue={currentPost.text}
                    onChange={e => setLocalState({...localState, text: e.target.value})}
                />
                Рекомендован:
                <select
                    defaultValue={currentPost.is_recommended}
                    onChange={e => setLocalState({...localState, is_recommended: e.target.value})}>
                    <option value="0">Обычный</option>
                    <option value="1">Рекоммендованый</option>
                </select>
                Тип:
                <select defaultValue={currentPost.type_id}
                        onChange={e => setLocalState({...localState, type_id: e.target.value})}>
                    {types.map(type => <option key={type.id} value={type.id}>{type.post_type.toUpperCase()}</option>)}
                </select>
                Софт:
                <select
                    defaultValue={currentPost.software_id}
                    onChange={e => setLocalState({...localState, software_id: e.target.value})}>
                    {software.map(soft => <option key={soft.id} value={soft.id}>{soft.software}</option>)}
                </select>
                Автор:
                <select
                    defaultValue={currentPost.author_id}
                    onChange={e => setLocalState({...localState, author_id: e.target.value})}>
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

EditPost.propTypes = {
    id: PropTypes.number,
    setModal: PropTypes.func
};
