import React from 'react';
import PropTypes from "prop-types";
import {Title} from "../titles/Title";

export function FlatButton(props) {
    const {name, isActive, onClick, width, height, disabled, colorActive='#F38300', colorInactive='white', className, margin} = props;

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

FlatButton.propTypes = {
    name: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    disabled: PropTypes.bool,
    colorActive: PropTypes.string,
    colorInactive: PropTypes.string,
    className: PropTypes.string,
    margin: PropTypes.string,
};
