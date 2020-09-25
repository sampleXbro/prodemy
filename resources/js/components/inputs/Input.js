import React from 'react';

export const Input = ({value, onChange, placeholder = 'Кто ищет - тот всегда найдет!', width, textAlign, margin}) => {

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
