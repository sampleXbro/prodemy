import React from 'react'
import {Title} from "../titles/Title";

export function Badge({size, radius, color, text, textSize, textColor}) {

    const dynStyle = {
        display: 'flex',
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: radius
    };

    return (
        <div style={dynStyle}>
            <Title text={text} size={textSize} textAlign='center' weight={300} margin={0} color={textColor}/>
        </div>
    )
}
