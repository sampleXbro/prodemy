import React from 'react'
import {Title} from "../titles/Title";
import Image from "../images/Image";

export function PopupMessages({event}) {

    const handleCloseClick = () => {
        const element = document.getElementById('singlePopup');
        element.className = 'single-popup-message-hide';
    };

    return (
        <div className='popup-message-container'>
            <div key={event.message.id} className='single-popup-message' id='singlePopup'>
                <Image path={event.author.avatar} size='35px' margin='0 10px 0 0 '/>
                <div className='d-flex flex-column w-100'>
                    <div className='d-flex w-100 justify-content-between'>
                        <Title text={event.author.name} weight={400} margin={0}/>
                        <h5 className="fas fa-times text-danger" onClick={handleCloseClick}/>
                    </div>
                    <Title text={event.message.message} weight={300} margin={0}/>
                </div>

            </div>
        </div>
    )
}
