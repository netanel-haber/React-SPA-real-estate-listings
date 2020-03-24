import React from 'react'
import { useFormContext } from 'react-hook-form';
const Finalize = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
        <div>
                Finalize
                </div>
            
        </>
    )
}

export default Finalize;