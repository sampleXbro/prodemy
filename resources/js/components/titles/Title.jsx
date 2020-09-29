import React from 'react';
import {string, oneOfType, number, any} from "prop-types";

export function Title({text, size, weight, margin, fontStyle, textAlign, cursor, color, id}) {
    const styles = {
        fontFamily: "'Roboto Condensed', sans-serif",
        fontWeight: weight,
        fontSize: size,
        padding: '0',
        margin: margin,
        fontStyle: fontStyle,
        textAlign: textAlign,
        cursor: cursor,
        color: color
    };
    return (
        <p style={styles} id={id}>{text}</p>
    )
}

Title.propTypes = {
    text: any,
    size: oneOfType([string, number]),
    weight: oneOfType([string, number]),
    margin: oneOfType([string, number]),
    fontStyle: string,
    textAlign: string,
    cursor: string,
    color: string,
    id: oneOfType([string, number])
};
