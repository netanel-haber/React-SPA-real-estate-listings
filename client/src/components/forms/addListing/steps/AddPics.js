import React from 'react'
import { useFormContext } from 'react-hook-form';
const AddPics = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
            <div>
                Addpics 
            </div> 
        </>
    )
}

export default AddPics;