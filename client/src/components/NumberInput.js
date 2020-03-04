import React from 'react';

const NumberInput = ({ max, min, className, callback = (() => { }) }) => (
    <form onSubmit={function (e) {
        e.preventDefault();
        const input = e.target.elements.input;
        callback(Number(input.value));
        input.blur();
    }}>
        <input
            className={className}
            type="number"
            min={min}
            max={max}
            name="input"
            autoComplete="off"
        />
    </form>
);


export default NumberInput;
