import React from 'react'

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
