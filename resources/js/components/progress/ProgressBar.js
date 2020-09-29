import React from 'react';
import {string, number, oneOfType} from "prop-types";

export function ProgressBar({progress, height, width, color, borderRadius}) {

    const barStyle = {
        height: height,
        width: width,
        borderRadius: borderRadius
    };

    const dynStyle = {
        height: height,
        width: progress + '%',
        backgroundColor: color,
        borderRadius: borderRadius,
    };

    return (
        <div className="progress-study" style={barStyle}>
            <div className="progress-study-line" style={dynStyle}>
                {!!progress && progress + '%'}
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    progress: oneOfType([string, number]),
    height: string,
    width: string,
    color: string,
    borderRadius: oneOfType([string, number])
};
