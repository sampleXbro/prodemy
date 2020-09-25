import React from 'react'

export function FileInput({onChange}) {
    return (
        <>
            <input type="file" onChange={onChange} className='file-input' id='fileInput'/>
            <label htmlFor="fileInput"><i className="fas fa-plus"/></label>
        </>
        )
}
