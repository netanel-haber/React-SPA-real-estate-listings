import '#src#/styles/components/forms/form-utilities.scss';
import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import withDivAndLabel from '../withDivAndLabel';
import { formHebrew } from '../heb';
import onSubmit from './submit';
import { validationConfig } from '../utilities';
import Type from './steps/Type';

const { HEB_EMAIL, HEB_SEND, HEB_PASSWORD, HEB_REENTER_PASSWORD, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME, HEB_EXPLANATION } = formHebrew;
const { email, name, password, phoneNumber, reEnter } = validationConfig;

const AddListing = () => {
    const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
    return (
        <FormContext {...{ errors, submitCount }}>
            <div>
                <Type />
                <form className="gen-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="submit-container pure-control-group">
                        <button className="pure-button pure-button-primary" type="submit" ref={register}>{HEB_SEND}</button>
                    </div>
                </form>
            </div>
        </FormContext>
    )
}

export default AddListing;
