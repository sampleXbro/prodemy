import React, {useState, useEffect} from 'react';
import {Title} from "../titles/Title";
import {sendNoteViaMail} from "../../api/api";
import {FlatButton} from "../buttons/FlatButton";


export function Notes({id, course, isVisibleButton}) {
    const [notes, setNotes] = useState(localStorage.getItem(`@course|${id}`) || '');
    const [sendNotesButtonText, setSendNotesButtonText] = useState('Отправить заметки себе на почту');
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [isEnabledButton, setIsEnabledButton] = useState(true);

    function onNotesChange(e){
        localStorage.setItem(`@course|${id}`, e.target.value);
        setNotes(e.target.value);
        if(e.target.value.length < 1) localStorage.removeItem(`@course|${id}`);
    }

    const handleSendMailClick = () => {
        setIsEnabledButton(false);
        setSendNotesButtonText('Отправляем...');
        sendNoteViaMail({courseTitle: course.title, note: notes})
            .then((res) => {
                setIsActiveButton(true);
                setSendNotesButtonText('Мы отправили заметки вам на почту');
                setTimeout(() => {
                    setIsEnabledButton(true);
                    setIsActiveButton(false);
                    setSendNotesButtonText('Отправить заметки себе на почту');
                },3000)
            })
    };

    return (
        <div className={'d-flex flex-column align-items-center'}>
            <Title text={'Мои заметки'} margin={'0 0 3px 15px'} weight={400} size={'18px'}/>
            <textarea className={'notesArea'} rows={7} placeholder={'Просто запишите сюда то, что нужно и всё сохранится...'} value={notes} onChange={onNotesChange}/>
            <Title text={'* Заметки будут доступны на том устройстве, с котрого были написаны'} margin={'5px 20px'} weight={300} size={'14px'}/>
            {isVisibleButton && <FlatButton onClick={handleSendMailClick} name={sendNotesButtonText} isActive={isActiveButton} disabled={!isEnabledButton}/>}
            <br/>
        </div>
    )
}
