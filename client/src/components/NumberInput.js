import React from 'react';
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../components/forms/utilities';

export default function NumberInput({ value, max, min = 0, req = false,
    altValidation, name, className, placeholder, callback = (() => { }), disabled = false }) {
    const { register } = useFormContext() || {};
    return (
        <input
            {...(value && { value })}
            {...{ className, disabled, name }}
            {...(register && {
                ref: register(
                    altValidation ||
                    validationConfig.numberInput({ min, max }, req))
            })}
            onChange={(e) => {
                e.preventDefault();
                callback(Number(e.target.value));
            }}
            placeholder={placeholder || (max ? `${min}-${max}` : `מינ' ${min}`)}
            autoComplete="off"
        />
    )
}