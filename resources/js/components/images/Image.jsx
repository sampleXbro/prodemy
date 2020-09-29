import React, {useState, useEffect} from 'react';
import {string, oneOfType, number} from "prop-types";

export default function Image({path, title, size = '300px', margin, borderRadius = '5px', className}){

    const [image, setImage] = useState('');

    useEffect(() => {
        if (path){
            setImage(path)
        } else {
            setImage('/images/no-image.png')
        }

    }, [path]);

    const styles = {
        width: size,
        height: size,
        borderRadius: borderRadius,
        objectFit: 'cover',
        margin: margin,
    };

    return <img
        className={className}
        src={image}
        onError={()=>{setImage('/images/no-image.png')}}
        alt={title}
        style={styles}
    />
}

Image.propTypes = {
    path: string,
    title: string,
    size: string,
    margin: oneOfType([number, string]),
    borderRadius: string,
    className: string,
};
