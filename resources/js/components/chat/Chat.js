import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Image from "../images/Image";
import {Title} from "../titles/Title";
import {momentTime} from "../../utils/momentTime";
import {updatePrivateMessage} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {PopupMessages} from "../popup/PopupMessages";
import actionTypes from "../../redux/actions/actionTypes";
import {sendChatMessage} from "../../redux/actions/actionCreators";
import {Badge} from "../styled/Badge";
import {colors} from "../../colors/colors";

export const Chat = ({user, privateMessages}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [qtyList, setQtyList] = useState(10);
    const [message, setMessage] = useState('');
    const [popup, setPopup] = useState('');
    const {messages} = useSelector(store => store.chatReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({type: actionTypes.GET_CHAT_MESSAGES});
        Echo.private('chat')
            .listen('MessageSent', (e) => {
                dispatch({type: actionTypes.GET_CHAT_MESSAGES});
                if(!isOpen){
                    if(localStorage.getItem('chatUnread')){
                        localStorage.setItem('chatUnread', (+localStorage.getItem('chatUnread') + 1).toString())
                    } else {
                        localStorage.setItem('chatUnread', '0');
                        localStorage.setItem('chatUnread', (+localStorage.getItem('chatUnread') + 1).toString())
                    }
                }
            });
        Echo.private('myMessages')
            .listen('PrivateMessageSent', (e) => {
                if(e.message.recipient_id === user.id){
                    setPopup(<PopupMessages event={e}/>);
                    dispatch({type: actionTypes.GET_PRIVATE_MESSAGES});
                    dispatch({type: actionTypes.UPDATE_PRIVATE_MESSAGE, id: e.message.id, data: {status: 'delivered'}})
                }
            })
            .listen('PrivateMessageDelivered', (e) => {
                if(e.message.author_id === user.id){
                    dispatch({type: actionTypes.GET_PRIVATE_MESSAGES})
                }
            })
            .listen('PrivateMessageRead', (e) => {
                if(e.message.author_id === user.id){
                    dispatch({type: actionTypes.GET_PRIVATE_MESSAGES})
                }
            });

        privateMessages.map(async (mes) => {
            if(mes.recipient_id === user.id && mes.status === 'pending'){
                await updatePrivateMessage(mes.id, {status: 'delivered'})
            }
        })

    }, []);

    const unread = +localStorage.getItem('chatUnread');

    const messagesJsx = [];

    messages.map((item, i) => {
        const style = item.user.id === user.id ? 'chat-single-message-my' : 'chat-single-message-your';
        if(i < qtyList){
            messagesJsx.push(
                <div key={item.id} className={style}>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <Image path={item.user.avatar} size='30px' borderRadius='100%'/>
                            <Title text={item.user.name} margin='5px' size='16px'/>
                        </div>
                        <div >
                            <Title text={momentTime(item.created_at)} margin='5px' size='12px' weight={300}/>
                        </div>
                    </div>
                    <Title text={item.message} size='14px' weight={300} margin={0}/>
                </div>)
        }

    });

    const dynStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: isOpen ? '350px' : '50px',
        height: isOpen ? '550px' : '50px',
        backgroundColor: isOpen ? '#F38300' : '#F38300',
        borderRadius: isOpen ? '10px' : '100%',
        transitionDuration: '200ms',
        position: 'fixed',
        zIndex: 5,
        userSelect: 'none',
        transitionTimingFunction: 'ease-in',

    };

    const handleChatClick = () => {
        setIsOpen(true);
    };

    const handleCloseChatClick = () => {
        setIsOpen(false);
        localStorage.setItem('chatUnread', '0')
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessageClick =() => {
        if(message){
            dispatch(sendChatMessage(message));
            setMessage('');
        }
    };

    function scrollHandler(e){
        let element = e.target;
        if (element.scrollTop === 0) {
            setQtyList(qtyList + 10);
        }
    }

    const chatContent = () => {
        if (isOpen) {
            return (
                <div className='chat-content chat-anim'>
                    <div className='d-flex w-100 justify-content-xl-between'>
                        <textarea name="chatTextArea" cols="35" rows="3" className={'chat-input'} value={message} onChange={handleMessageChange} placeholder='Введите ваше сообщение'/>
                        <i onClick={handleSendMessageClick} className="fas fa-paper-plane send-message-button"/>
                    </div>
                    <div className='chat-messages-area' onScroll={scrollHandler}>
                        {messagesJsx}
                    </div>
                    <i onClick={handleCloseChatClick} className="fas fa-times close-chat-button"/>
                </div>
            )
        } else {
            return (
                <div onClick={handleChatClick}>
                    {+unread ?
                        <Badge
                            position={'absolute'}
                            top={'-5px'}
                            right={'-5px'}
                            size={'18px'}
                            textColor={colors.mainWhite}
                            radius={'100%'}
                            color={colors.green}
                            fontSize={'12px'}>{unread}
                        </Badge> : ''}
                    <Title text='ЧАТ' size='24px' textAlign='center' weight={400} margin={0} cursor={'pointer'}/>
                </div>
            )
        }
    };

    return (
        <>
            {popup}
            <div style={dynStyles} className='chat-outer-container'>
                {chatContent()}
            </div>
        </>
    )
};

Chat.propTypes = {
    user: PropTypes.object,
    privateMessages: PropTypes.array,
};
