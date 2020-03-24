import React from 'react'
import { useFormContext } from 'react-hook-form';
import { validationConfig } from '../../utilities';
import withDivAndLabel from './../../withDivAndLabel';

const { email } = validationConfig;

const Address = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <>
            <div>
                k
                {/* {withDivAndLabel(< input type="email" className="pure-input-rounded eng" name="number" autoComplete="email" ref={register(email())} />,
                    "email")}
                Address */}
            </div>
        </>
    )
}

export default Address;