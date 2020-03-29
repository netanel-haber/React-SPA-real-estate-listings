import React from 'react';

export default React.forwardRef(function NumberInput({ max, min, name, className, callback = (() => { }), disabled = false }, ref) {
    return (
        <input
            {...{ max, min, className, disabled, ref, name }}
            type="number"
            onChange={(e) => {
                e.preventDefault();
                callback(Number(e.target.value));
                e.target.blur();
            }}
            autoComplete="off"
        />
    )
})