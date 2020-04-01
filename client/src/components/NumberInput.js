import React from 'react';

export default React.forwardRef(function NumberInput({ max, min, name, className, placeholder, callback = (() => { }), disabled = false }, ref) {
    return (
        <input
            {...{ className, disabled, ref, name, placeholder }}
            {...(max && { max })}
            {...(min && { min })}
            type="number"
            onChange={(e) => {
                e.preventDefault();
                callback(Number(e.target.value));
            }}
            autoComplete="off"
        />
    )
})