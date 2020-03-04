import React from 'react';

const NumberInput = ({ max, min, className, callback = (() => { }) }) => (
    <form onSubmit={function (e) {
        e.preventDefault();
        callback(Number(e.target.elements.input.value));
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
