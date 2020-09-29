import React from 'react';
import {string, func} from "prop-types";

export const Input = ({value, onChange, placeholder = 'Кто ищет - тот найдет!', width, textAlign, margin}) => {

    const dynStyle = {
        width: width,
        fontWeight: 300,
        textAlign: textAlign,
        margin: margin
    };

    return (
        <input
            type="text"
            style={dynStyle}
            className='search-input'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

Input.propTypes = {
    value: string,
    onChange: func,
    placeholder: string,
    width: string,
    textAlign: string,
    margin: string
};
