import React from 'react';

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
