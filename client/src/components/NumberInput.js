import React from 'react';
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../components/forms/utilities';

export default function NumberInput({ max, min = 0, required, altValidation, name, className, placeholder, callback = (() => { }), disabled = false }) {
    const { register } = useFormContext() || {};
    return (
        <input
            {...(register && {
                ref: register(
                    altValidation ||
                    validationConfig.numberInput({ min, max }, required))
            })}
            {...{ className, disabled, name, placeholder, min }}
            {...(max !== undefined && { max })}
            type="number"
            onChange={(e) => {
                e.preventDefault();
                callback(Number(e.target.value));
            }}
            autoComplete="off"
        />
    )
}