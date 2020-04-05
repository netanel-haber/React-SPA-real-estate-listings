import React from 'react';
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../components/forms/utilities';

export default function NumberInput({ value, max, min = 0, required, altValidation, name, className, placeholder, callback = (() => { }), disabled = false }) {
    const { register } = useFormContext() || {};
    return (
        <input
            {...(value && { value })}
            {...{ className, disabled, name, min }}
            {...(register && {
                ref: register(
                    altValidation ||
                    validationConfig.numberInput({ min, max }, required))
            })}
            {...(max !== undefined && { max })}
            type="number"
            onChange={(e) => {
                e.preventDefault();
                callback(Number(e.target.value));
            }}
            placeholder={placeholder || (max ? `${min}-${max}` : `מינ' ${min}`)}
            autoComplete="off"
        />
    )
}