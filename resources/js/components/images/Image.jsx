import React, {useState, useEffect} from 'react';


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
        src={image}
        onError={()=>{setImage('/images/no-image.png')}}
        alt={title}
        style={styles}
        className={className}
    />
}
