import React from 'react';
import { useFormContext } from 'react-hook-form';
const Type = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
            <div className="Type__container">
                <input ref={register} type="radio" name="type" id="" />
                <input ref={register} type="radio" name="type" id="" />
                <input ref={register} type="radio" name="type" id="" />
                <input ref={register} type="radio" name="type" id="" />
            </div>
        </>
    )
}

export default Type;
