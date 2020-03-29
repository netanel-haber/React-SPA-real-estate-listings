import React from 'react';

const NumberInput = ({ max, min, className, callback = (() => { }), disabled = false}) => (
    <input
        {...{ max, min, className, disabled }}
        type="number"
        name="input"
        onChange={(e) => {
            e.preventDefault();
            callback(Number(e.target.value));
            e.target.blur();
        }}
        autoComplete="off"
    />
);


export default NumberInput;
