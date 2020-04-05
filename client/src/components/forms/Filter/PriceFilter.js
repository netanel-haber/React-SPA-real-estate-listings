import React from 'react';
import { useFormContext } from 'react-hook-form';
import NumberInput from './../../NumberInput';
import withDivAndLabel, { WithDivsAndLabels } from './../withDivAndLabel';

const { HEB_FROM = "ממחיר", HEB_TO = "עד מחיר" } = {};


const PriceFilter = () => {
    const { register } = useFormContext;
    return (
        <div className="PriceFilter">
            <NumberInput placeholder={HEB_FROM} />
            <NumberInput placeholder={HEB_TO} />
        </div>
    )
}

export default PriceFilter;