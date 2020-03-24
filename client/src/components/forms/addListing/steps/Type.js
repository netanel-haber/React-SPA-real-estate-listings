import React from 'react';
import { useFormContext } from 'react-hook-form';
const Type = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
            <div>
                Type
            </div>
        </>
    )
}

export default Type;
