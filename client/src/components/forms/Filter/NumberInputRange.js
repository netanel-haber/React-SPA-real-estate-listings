import React from 'react';
import NumberInput from '../../NumberInput';
import classnames from 'classnames';

const { HEB_DEF_PLACHOLDER_FROM = "מ-", HEB_DEF_PLACHOLDER_TO = "עד-" } = {};


const NumberInputRange = ({ name, placeholders = [HEB_DEF_PLACHOLDER_FROM, HEB_DEF_PLACHOLDER_TO], className }) => (
    <>
        <NumberInput name={name + "From"} placeholder={placeholders[0]} className={classnames("NumberInput",className)} />
        <NumberInput name={name + "To"} placeholder={placeholders[1]} className={classnames("NumberInput",className)} />
    </>
)


export default NumberInputRange;