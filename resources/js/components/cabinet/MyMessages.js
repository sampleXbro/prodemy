import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import Image from "../images/Image";
import {Badge} from "../badges/Badge";
import {Title} from "../titles/Title";
import {Input} from "../inputs/Input";
import {PrivateMessages} from "./PrivateMessages";
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";

export const MyMessages = ({currentUser, users}) => {

    const {messages} = useSelector(store => store.privateMessagesReducer);
    const [input, setInput] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actionTypes.GET_ALL_USERS});
        dispatch({type: actionTypes.GET_PRIVATE_MESSAGES});
    }, [selectedUser]);

    const handleInput = (e) => {
        setInput(e.target.value)
    };

    const handleUserClick = (userId) => {
        setSelectedUser(userId);
    };

    const usersJsx = users
        .filter((user) => (
            user.name.toLowerCase().includes(input.toLowerCase()) ||
            user.level.user_level.toLowerCase().includes(input.toLowerCase())) &&
            user.id !== currentUser.id)
        .sort((a, b) => {
            return(
            messages.filter(m => m.author_id === b.id && m.status === 'delivered').length -
            messages.filter(m => m.author_id === a.id && m.status === 'delivered').length
            )
        })
        .map((user) => {
            const dynStyle = selectedUser === user.id ? 'user-block-container-selected' : 'user-block-container';
            const unreadMsg = messages.filter(m => m.status === 'delivered' &&
                    m.author_id === user.id && m.recipient_id === currentUser.id);
        return (
            <div key={user.id} className={dynStyle} onClick={() => handleUserClick(user.id)}>
                <Image size='40px' path={user.avatar} title={user.name} borderRadius='100%' margin='5px'/>
                <div>
                    <Title size='16px' margin='0 0 0 10px' text={user.name}/>
                    <Title size='14px' margin='0 0 0 10px' weight={300} text={user.level.user_level}/>
                </div>
                <div className='d-flex ml-auto mr-3'>
                    {unreadMsg.length && selectedUser !== user.id ?
                    <Badge color='#38c172' textColor='white' text={unreadMsg.length} size='20px' radius='5px' textSize='12px'/>
                    : ''
                    }
                </div>
            </div>
        )
    });

    return (
        <div className='cabinet-page-container'>
            <div className='users-messages-container position-relative'>
                <div className='d-flex cabinet-search-input'>
                    <Input onChange={handleInput} value={input} placeholder='Поиск по имени' width='100%'/>
                </div>

                {usersJsx}
            </div>
            <PrivateMessages selectedUserId={selectedUser} users={users} currentUser={currentUser} messages={messages}/>
        </div>
    )
};

MyMessages.propTypes = {
    currentUser: PropTypes.object,
    users: PropTypes.arrayOf(PropTypes.object)
};
