import React, {useEffect, useState} from 'react';
import {Title} from "../titles/Title";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
import {Users} from "./Users";
import {Courses} from "./Courses";
import {Posts} from "./Posts";
import {Reviews} from "./Reviews";
import {Comments} from "./Comments";
import {Software} from "./Software";
import {Input} from "../inputs/Input";
import {UsersRoles} from "./UsersRoles";
import {UsersLevels} from "./UserLevels";
import {CoursesLevels} from "./CoursesLevels";
import {Link, useParams} from "react-router-dom";
import {FlatButton} from "../buttons/FlatButton";
import {Badge} from "../badges/Badge";

export function AdminPanel({mUnreadMessagesQty}) {
    const [scrollMultiplier, setScrollMultiplier] = useState(1);
    const [search, setSearch] = useState('');
    const {data} = useSelector(store => store.adminReducer);
    const {currentUser} = useSelector(store => store.userReducer);
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ADMIN_INITIAL});
        dispatch({type: actionTypes.GET_CURRENT_USER});
        document.title = 'prodemy - Панель администратора'
    }, []);

    const menuTabs = [
        {title: 'Пользователи', count: data.users, icon: <i className="fas fa-user-friends"/>, slug: 'users'},
        {title: 'Курсы', count: data.courses, icon: <i className="fas fa-user-graduate"/>, slug: 'courses'},
        {title: 'Посты', count: data.posts, icon: <i className="fas fa-align-left"/>, slug: 'posts'},
        {title: 'Отзывы', count: data.reviews, icon: <i className="far fa-comment-dots"/>, slug: 'reviews'},
        {title: 'Комментарии', count: data.comments, icon: <i className="far fa-comments"/>, slug: 'comments'},
        {title: 'Софт', count: data.software, icon: <i className="fas fa-desktop"/>, slug: 'software'},
        {title: 'Роли пользователей', count: data.roles, icon: <i className="fas fa-user-tag"/>, slug: 'roles'},
        {title: 'Уровни пользователей', count: data.users_levels, icon: <i className="fas fa-user-ninja"/>, slug: 'users-levels'},
        {title: 'Уровни сложности', count: data.complexity_levels, icon: <i className="fas fa-layer-group"/>, slug: 'courses-levels'},
    ];

    const handleItemClick = () => {
        setScrollMultiplier(1);
        setSearch('');
        document.querySelector('#scrollableArea').scrollTo(0, 0)
    };

    const tabsJsx = menuTabs.map((tab, index) => {
        const dynStyle = slug === tab.slug ? 'admin-menu-item-selected' : 'admin-menu-item';

        return (
            <Link to={`/admin/${tab.slug}`} style={{textDecoration: 'none', width: '100%'}} key={index}>
                <div className={dynStyle} onClick={() => handleItemClick(index)}>
                    <div className='d-flex align-items-center'>
                        {tab.icon}
                        <Title text={tab.title} margin='0 0 0 10px'/>
                    </div>
                    <div className='admin-menu-item-badge'>
                        <Title text={tab.count} margin={0} size='12px'/>
                    </div>
                </div>
            </Link>
        )
    });

    const handleScroll = () => {
        const element = document.querySelector('#scrollableArea');
        if(element.scrollTop >= element.scrollHeight - element.clientHeight){
            setScrollMultiplier(scrollMultiplier + 1);
        }
    };

    return (
        <div className='admin-page-container'>

            <div className='admin-top-panel'>
                <div className='d-flex align-items-center'>
                    <p className='admin-logo'>proAdmin</p>
                    <Link to='/portal/courses' target='_blank'>
                        <FlatButton height='22px' name='На сайт' margin='0 10px'/>
                    </Link>
                </div>
                <div className='d-flex justify-content-around align-items-center position-relative'>
                    <Input width='250px'
                           placeholder='Поиск'
                           margin='0 15px 0 0'
                           value={search}
                           onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />

                    <i className="far fa-bell text-white mr-3"/>

                    <div className='position-absolute' style={{right: '30px', top: '20px'}}>
                        <Link to='/portal/cabinet/my-messages' style={{textDecoration: 'none', width: '100%'}}>
                            <Badge text={mUnreadMessagesQty} color='#38c172' size='20px' radius='0 100% 100% 100%' textColor='white' textSize='11px'/>
                        </Link>
                    </div>

                    <Link to='/portal/cabinet/studied-courses' style={{textDecoration: 'none'}}>
                        <i className="fas fa-user-circle text-white mr-3"/>
                    </Link>
                </div>
            </div>
            <div className='d-flex'>
                <div className='admin-sidebar-container'>
                    {tabsJsx}
                </div>

                <div className='admin-data-area' onScroll={handleScroll} id='scrollableArea'>
                    {slug === 'users' && <Users scrollMultiplier={scrollMultiplier} search={search}/>}
                    {slug === 'courses' && <Courses scrollMultiplier={scrollMultiplier} search={search} currentUser={currentUser}/>}
                    {slug === 'posts' && <Posts scrollMultiplier={scrollMultiplier} search={search} currentUser={currentUser}/>}
                    {slug === 'reviews' && <Reviews scrollMultiplier={scrollMultiplier} search={search}/>}
                    {slug === 'comments' && <Comments scrollMultiplier={scrollMultiplier} search={search}/>}
                    {slug === 'software' && <Software/>}
                    {slug === 'roles' && <UsersRoles/>}
                    {slug === 'users-levels' && <UsersLevels/>}
                    {slug === 'courses-levels' && <CoursesLevels/>}
                </div>

            </div>
        </div>
    )
}
