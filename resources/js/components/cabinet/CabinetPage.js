import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Image from "../images/Image";
import {Title} from "../titles/Title";
import {FlatButton} from "../buttons/FlatButton";
import {StudiedCourses} from "./StudiedCourses";
import {MyReviews} from "./MyReviews";
import {MyNotes} from "./MyNotes";
import {MyMessages} from "./MyMessages";
import {FileInput} from "../inputs/FileInput";
import {updateUser} from "../../redux/actions/actionCreators";
import {Link} from "react-router-dom";
import actionTypes from "../../redux/actions/actionTypes";
import {useParams} from "react-router-dom";

export function CabinetPage({user, courses}) {
    const {reviews} = useSelector((store) => store.reviewsReducer);
    const {users} = useSelector(store => store.userReducer);
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_USERS});
    }, []);

    const reviewsByUser = reviews.filter((review) => review.author_id === user.id);

    const buttonsNames = [
        {name: 'Изучаемые курсы', slug: 'studied-courses'},
        {name: 'Мои отзывы', slug: 'my-reviews'},
        {name: 'Мои заметки', slug: 'my-notes'},
        {name: 'Мои сообщения', slug: 'my-messages'}
    ];

    const buttons = buttonsNames.map((button, i) => {
        return (
            <Link key={i} to={`/portal/cabinet/${button.slug}`} style={{textDecoration: 'none', width: '100%'}}>
                <FlatButton name={button.name} isActive={slug === button.slug} />
            </Link>
        )
    });

    const handleEditNameBlur = (e) => {
        const element = document.getElementById('userName');
        element.contentEditable = false;
        element.style.padding = '';
        element.style.backgroundColor = '';
        dispatch(updateUser(user.id, {name: element.innerText}))
    };

    const handleEditName = (e) => {
        const element = document.getElementById('userName');
        element.contentEditable = true;
        element.style.padding = '0 15px';
        element.style.backgroundColor = 'white';
        element.onblur = (e) => handleEditNameBlur(e);
        element.focus();
    };

    const handleEditAdditionalBlur = (e) => {
        const element = document.getElementById('additional');
        element.innerHTML = `Дополнительно: ${e.target.value}`;
        dispatch(updateUser(user.id, {additional: e.target.value}))
    };

    const handleEditAdditional = (e) => {
        const element = document.getElementById('additional');
        element.innerHTML = `<textarea style="width: 100%; resize: none">${user.additional || ''}</textarea>`;
        element.firstChild.focus();
        element.firstChild.onblur = (e) => handleEditAdditionalBlur(e);
    };

    const handleChangeFile = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        const reader = new FileReader();
        reader.onload = (e) => {
            dispatch(updateUser(user.id, {file: e.target.result}));
        };
        reader.readAsDataURL(file[0]);
    };

    return (
        <>
            <div className='container-xl cabinet-page-container'>
                <div className='avatar-container position-relative'>
                    <Image path={user.avatar} size='200px'/>
                    <FileInput onChange={handleChangeFile}/>
                </div>

                <div className='d-flex w-100 flex-column'>
                    <div className='d-flex  justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Title
                                size='18px'
                                weight={400}
                                text={'Привет,  '}
                                margin='5px'
                                fontStyle={'italic'}
                            />
                            <Title
                                size='18px'
                                weight={400}
                                text={user.name}
                                margin='5px'
                                fontStyle={'italic'}
                                id='userName'
                            />
                            <i className="fas fa-pencil-alt text-primary"
                               style={{cursor: 'pointer'}}
                               onClick={handleEditName}
                            />
                        </div>
                        <div className='d-flex align-items-center'>
                            <Title
                                size='16px'
                                weight={400}
                                text={user.role.role}
                                margin='5px'
                            />
                            {user.role.role === 'Администратор' &&
                            <Link to='/admin/users'>
                                <FlatButton height='30px' name='proAdmin panel'/>
                            </Link>}
                        </div>
                    </div>
                    <hr/>
                    <Title
                        size='16px'
                        weight={300}
                        text={'Email:  ' + user.email}
                        margin='5px'
                        fontStyle={'italic'}/>
                    <Title
                        size='16px'
                        weight={300}
                        text={'Ваш уровень:  ' + user.level.user_level}
                        margin='5px'
                        fontStyle={'italic'}/>
                    <Title
                        size='16px'
                        weight={300}
                        text={'Дополнительно:  ' + (user.additional || 'Здесь пока ничего нет...')}
                        margin='5px'
                        fontStyle={'italic'}
                        id='additional'
                    />
                    <i className="fas fa-pencil-alt text-primary"
                       style={{cursor: 'pointer'}}
                       onClick={handleEditAdditional}
                    />
                </div>
            </div>
            <div className='container-xl cabinet-page-container justify-content-around align-items-center'>
                {buttons}
            </div>
            <div className='container-xl cabinet-page-container'>
                {slug === 'studied-courses' && <StudiedCourses user={user} courses={courses}/>}
                {slug === 'my-reviews' && <MyReviews id={user.id} reviews={reviewsByUser}/>}
                {slug === 'my-notes' && <MyNotes courses={courses}/>}
                {slug === 'my-messages' && <MyMessages currentUser={user} users={users}/>}
            </div>
        </>
    )
}
