import React from 'react';
import NumberInput from '../../NumberInput';


const { HEB_FROM = "ממחיר", HEB_TO = "עד מחיר" } = {};


const NumberInputRange = ({ name }) => (
    <>
        <NumberInput name={name+"From"} placeholder={HEB_FROM} className="NumberInput" />
        <NumberInput name={name+"To"} placeholder={HEB_TO} className="NumberInput" />
    </>
)


export default NumberInputRange;