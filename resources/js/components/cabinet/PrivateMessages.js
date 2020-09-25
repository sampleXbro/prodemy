import React, {useEffect, useState} from 'react'
import {Title} from "../titles/Title";
import Image from "../images/Image";
import {FlatButton} from "../buttons/FlatButton";
import {useDispatch} from "react-redux";
import {sendPrivateMessage} from "../../redux/actions/actionCreators";
import {momentTime} from "../../utils/momentTime";
import {updatePrivateMessage} from "../../api/api";


export function PrivateMessages({users, selectedUserId, currentUser, messages}) {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        messages.filter(m => m.author_id === selectedUserId && m.recipient_id === currentUser.id && m.status === 'delivered')
            .map(async m => {
                await updatePrivateMessage(m.id, {status: 'read'})
            })
    }, [messages]);

    if(selectedUserId === '') return <Title size='18px' margin='10px 0 0 10px' text='Выберите пользователя из списка' textAlign='center'/>;

    const user = users.find(u => u.id === selectedUserId);

    const handleSendMessage = () => {
        if (message.length > 0) {
            dispatch(sendPrivateMessage(message, user.id));
            setMessage('');
        }
    };

    const messagesJsx = [];

    messages.map((mes) => {

        if((mes.author_id === currentUser.id && mes.recipient_id === user.id) ||
            (mes.author_id === user.id && mes.recipient_id === currentUser.id)){

            const dynStyle = mes.author_id === currentUser.id ? 'messages-list-item-my' : 'messages-list-item-your';
            const sender = mes.author_id === currentUser.id ? 'Я:' : mes.author.name + ':';
            const deliverCheck = mes.status === 'delivered' &&
                mes.author_id === currentUser.id && <h5 className="fas fa-check text-success text-right m-0 p-0"/>;

            const readCheck = mes.status === 'read' &&
                mes.author_id === currentUser.id && <h5 className="fas fa-check-double text-success text-right m-0 p-0"/>;

            messagesJsx.push(
                <div key={mes.id} className={dynStyle}>
                    <div className={'d-flex w-100 justify-content-between'}>
                        <Title text={sender} size='16px' margin='0' weight={400}/>
                        <Title text={momentTime(mes.created_at)} size='14px' margin='0' weight={300}/>
                    </div>

                    <Title text={mes.message} size='14px' margin='0' weight={300}/>
                    {deliverCheck}
                    {readCheck}
                </div>
            )
        }
    });

    return (
        <div className='message-window'>
            <div className='d-flex w-100'>
                <Image path={user.avatar} size='150px' margin='5px'/>
                <div className='d-flex flex-column w-100'>
                    <div className='d-flex w-100 justify-content-between'>
                        <Title size='18px' margin='10px 0 0 10px' text={user.name} fontStyle='italic'/>
                        <Title size='16px' margin='10px 10px 0 0' text={user.role.role} weight={300}/>
                    </div>
                    <div className='d-flex flex-column'>
                        <Title size='16px'
                               margin='0 0 0 10px'
                               text={'Уровень: ' + user.level.user_level}
                               weight={300} fontStyle='italic'/>
                        <Title size='16px'
                               margin='0 0 0 10px'
                               text={'Дополнительно:  ' + (user.additional || 'Здесь пока ничего нет...')}
                               weight={300} fontStyle='italic'/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='d-flex flex-grow-1'>
                <div className='d-flex flex-column w-50'>
                    <Title size='16px' margin='0 0 0 10px' text={'Переписка'} weight={400}/>
                    <div className='messages-list-container'>
                        {messagesJsx.length >= 1 ?
                            messagesJsx :
                            <Title text='Здесь пока ничего нет. Напишите первым ;)'
                                   textAlign='center' size='16px'
                                   margin='10px' weight={300}/>}
                    </div>
                </div>
                <div className='d-flex flex-column w-50'>
                    <Title size='16px' margin='0 0 0 10px' text={'Написать сообщение'} weight={400}/>
                    <textarea
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        className='message-input'
                        placeholder='Введите ваше сообщение...'
                    />
                    <FlatButton onClick={handleSendMessage} width='200px' height='30px' name='Отправить'/>
                </div>
            </div>
        </div>
    )
}
