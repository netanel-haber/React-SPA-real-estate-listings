import '#src#/styles/components/forms/form-utilities.scss';
import React from 'react';
import { FormContext } from 'react-hook-form';

const FormFrag = ({ children, contextProps, handle, register }) => {
    return (
        <FormContext {...contextProps}>
            <div>
                <form className="gen-form" onSubmit={handle}>
                    {children}
                </form>
                <div className="submit-container pure-control-group">
                    <button className="pure-button pure-button-primary" type="submit" ref={register}>שלח</button>
                </div>
            </div>
        </FormContext>
    )
}

export default FormFrag;