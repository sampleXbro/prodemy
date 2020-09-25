import React from 'react';
import {Title} from "../titles/Title";

export function FlatButton({name, isActive, onClick, width, height, disabled, colorActive='#F38300', colorInactive='white', className, margin}) {

    const styles = {
        backgroundColor: isActive ? colorActive : colorInactive,
        color: isActive ? 'white' : 'black',
        width: width,
        maxWidth: width,
        maxHeight: height,
        pointerEvents: disabled && 'none',
        margin: margin

    };
    return (
        <div onClick={onClick} className={`flat-button ${className}`} style={styles}>
            <Title text={name} margin={0} textAlign={'center'}/>
        </div>
    )
}
