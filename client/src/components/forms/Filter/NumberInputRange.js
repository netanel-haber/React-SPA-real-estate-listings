import React from 'react';
import NumberInput from '../../NumberInput';
import classnames from 'classnames';



const { HEB_DEF_PLACHOLDER_FROM = "מ-", HEB_DEF_PLACHOLDER_TO = "עד-" } = {};


const NumberInputRange = ({ name, jointValidation, placeholders = [HEB_DEF_PLACHOLDER_FROM, HEB_DEF_PLACHOLDER_TO], className }) => {
    const names = name.split(' ');
    return (
        <>
            <NumberInput altValidation={jointValidation} name={names[0]} placeholder={placeholders[0]} className={classnames("NumberInput", className)} />
            <NumberInput name={names[1]} placeholder={placeholders[1]} className={classnames("NumberInput", className)} />
        </>
    )
}


export default NumberInputRange;