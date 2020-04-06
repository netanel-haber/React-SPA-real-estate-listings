import React from 'react';
import NumberInput from '../../NumberInput';


const { HEB_FROM = "ממחיר", HEB_TO = "עד מחיר" } = {};


const PriceFilter = ({ names }) => (
    <>
        <NumberInput name={names[0]} placeholder={HEB_FROM} className="NumberInput" />
        <NumberInput name={names[1]} placeholder={HEB_TO} className="NumberInput" />
    </>
)


export default PriceFilter;